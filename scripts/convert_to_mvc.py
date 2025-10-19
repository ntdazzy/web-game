#!/usr/bin/env python3
"""
Utility chuyển đổi toàn bộ mã nguồn tĩnh trong srcA sang cấu trúc PHP MVC trong srcB.

Các bước chính:
1. Khởi tạo cấu trúc thư mục srcB (app/, public/, reports/…).
2. Quét HTML để gom CSS/JS theo thứ tự sử dụng, phát hiện trùng lặp và tạo vendor bundles.
3. Sao chép tài nguyên tĩnh (st-ms, webfonts, videos…) sang public/.
4. Tách layout: head, header, footer, các view trang và lưu thành file PHP.
5. Trích xuất dữ liệu có cấu trúc (tin tức, sự kiện, tướng…) -> JSON trong app/data/.
6. Sinh models, controllers, front controller, router và các báo cáo kèm đặc tả API.
"""

from __future__ import annotations

import argparse
import hashlib
import json
import os
import re
import shutil
import sys
import textwrap
from collections import OrderedDict, defaultdict
from dataclasses import dataclass, field
from html import unescape
from pathlib import Path
from typing import Dict, Iterable, List, Optional, Tuple

import requests
from bs4 import BeautifulSoup, NavigableString, Tag


BASE_DIR = Path(__file__).resolve().parent.parent
SRC_A = BASE_DIR / "srcA"
SRC_A_DOMAIN = SRC_A / "haitacmanhnhat.vn"
SRC_B = BASE_DIR / "srcB"


@dataclass
class AssetReference:
    href: str
    html_path: Path
    resolved: Optional[Path] = None
    file_hash: Optional[str] = None


def sanitize_url(url: str) -> str:
    no_fragment = url.split("#", 1)[0]
    return no_fragment.split("?", 1)[0]


def is_external_resource(url: str) -> bool:
    lowered = url.lower()
    if not lowered:
        return True
    return lowered.startswith(("http://", "https://", "//", "data:", "mailto:", "tel:"))


def compute_hash(path: Path) -> str:
    h = hashlib.sha256()
    with path.open("rb") as handle:
        for chunk in iter(lambda: handle.read(1024 * 1024), b""):
            h.update(chunk)
    return h.hexdigest()


def ensure_directory(path: Path) -> None:
    path.mkdir(parents=True, exist_ok=True)


def posix_path(path: Path) -> str:
    return str(path).replace(os.sep, "/")


def resolve_local_asset(html_file: Path, url: str, root: Path) -> Optional[Path]:
    url = url.strip()
    if not url or is_external_resource(url):
        return None

    canonical = sanitize_url(url)
    html_dir = html_file.parent.resolve()
    root_resolved = root.resolve()

    def safe_relative(candidate: Path) -> Optional[Path]:
        try:
            rel = candidate.resolve().relative_to(root_resolved)
        except Exception:
            return None
        return rel if candidate.exists() else None

    if canonical.startswith("/"):
        candidate = (root_resolved / canonical.lstrip("/")).resolve()
        rel = safe_relative(candidate)
        if rel:
            return rel
        # Thử ghép với domain của file HTML (vd haitacmanhnhat.vn/)
        try:
            html_rel = html_file.resolve().relative_to(root_resolved)
            domain_root = root_resolved / html_rel.parts[0]
        except Exception:
            domain_root = root_resolved
        candidate = (domain_root / canonical.lstrip("/")).resolve()
        rel = safe_relative(candidate)
        if rel:
            return rel
        return None

    candidate = (html_dir / canonical).resolve()
    rel = safe_relative(candidate)
    if rel:
        return rel

    try:
        html_rel = html_file.resolve().relative_to(root_resolved)
        domain_root = root_resolved / html_rel.parts[0]
    except Exception:
        domain_root = root_resolved
    candidate = (domain_root / canonical).resolve()
    rel = safe_relative(candidate)
    if rel:
        return rel

    return None


def strip_html_suffix(value: str) -> str:
    value = value.strip()
    if value.endswith(".html"):
        return value[: -len(".html")]
    return value


def split_url_suffix(url: str) -> Tuple[str, str]:
    fragment = ""
    if "#" in url:
        url, frag = url.split("#", 1)
        fragment = "#" + frag
    query = ""
    if "?" in url:
        url, qry = url.split("?", 1)
        query = "?" + qry
    return url, query + fragment


def html_parser(html_path: Path) -> BeautifulSoup:
    with html_path.open("r", encoding="utf-8", errors="ignore") as handle:
        return BeautifulSoup(handle.read(), "lxml")


def strip_empty_lines(text: str) -> str:
    return "\n".join(line for line in text.splitlines() if line.strip())


def normalize_spacing(text: str) -> str:
    return re.sub(r"\n{3,}", "\n\n", text)


def php_export(value, indent: int = 0) -> str:
    """Chuyển Python value thành PHP code (array)."""
    pad = "    " * indent
    if value is None:
        return "null"
    if isinstance(value, bool):
        return "true" if value else "false"
    if isinstance(value, (int, float)):
        return str(value)
    if isinstance(value, str):
        escaped = value.replace("\\", "\\\\").replace("'", "\\'")
        return f"'{escaped}'"
    if isinstance(value, list):
        if not value:
            return "[]"
        items = []
        for item in value:
            items.append(f"{pad}    {php_export(item, indent + 1)}")
        return "[\n" + ",\n".join(items) + f"\n{pad}]"
    if isinstance(value, dict):
        if not value:
            return "[]"
        items = []
        for key, val in value.items():
            items.append(f"{pad}    {php_export(key)} => {php_export(val, indent + 1)}")
        return "[\n" + ",\n".join(items) + f"\n{pad}]"
    return php_export(str(value), indent)


@dataclass
class PageMeta:
    title: str = ""
    body_attributes: str = ""
    meta: Dict[str, object] = field(default_factory=dict)
    view_path: Path = Path()
    source_path: Path = Path()
    content_html: str = ""
    page_type: str = "page"


class MVCConverter:
    def __init__(self, *, clean: bool = True, verbose: bool = True, fetch_remote: bool = True) -> None:
        self.clean = clean
        self.verbose = verbose
        self.fetch_remote = fetch_remote

        self.asset_alias: Dict[str, Dict[str, Dict[str, str]]] = {"css": {}, "js": {}}
        self.duplicates_report: Dict[str, List[dict]] = {"css": [], "js": []}
        self.global_css_hash_order: OrderedDict[str, Path] = OrderedDict()
        self.global_js_hash_order: OrderedDict[str, Path] = OrderedDict()
        self.hash_to_css_paths: Dict[str, List[str]] = defaultdict(list)
        self.hash_to_js_paths: Dict[str, List[str]] = defaultdict(list)

        self.pages: List[PageMeta] = []
        self.news_index: List[dict] = []
        self.news_detail: Dict[str, dict] = {}
        self.event_index: List[dict] = []
        self.event_detail: Dict[str, dict] = {}
        self.update_index: List[dict] = []
        self.update_detail: Dict[str, dict] = {}
        self.character_index: List[dict] = []
        self.character_detail: Dict[str, dict] = {}

        self.routes_static: Dict[str, str] = {}

        self.head_partial_html: Optional[str] = None
        self.header_partial_html: Optional[str] = None
        self.footer_partial_html: Optional[str] = None
        self.default_page_title: str = "Hải Tặc Mạnh Nhất"
        self.default_meta: Dict[str, object] = {}

        self.remote_cache: Dict[Tuple[str, str], dict] = {}

    # region logging -----------------------------------------------------
    def log(self, message: str) -> None:
        if self.verbose:
            print(f"[convert] {message}")

    # endregion ----------------------------------------------------------

    def run(self) -> None:
        self.log("Bắt đầu chuyển đổi…")
        self.prepare_structure()
        self.copy_static_assets()
        self.log("Thu thập assets (CSS/JS)…")
        html_files = sorted(SRC_A_DOMAIN.rglob("*.html"))
        for html_file in html_files:
            self.process_html_assets(html_file)
        self.write_asset_bundles()
        self.log("Tách layout, phần tử chung và view trang…")
        self.extract_layout_parts()
        for html_file in html_files:
            self.convert_html_to_view(html_file)
        self.log("Sinh dữ liệu JSON và PHP source…")
        self.write_data_files()
        self.write_php_sources()
        self.write_reports()
        self.log("Hoàn tất.")

    # region prepare -----------------------------------------------------
    def prepare_structure(self) -> None:
        if self.clean and SRC_B.exists():
            self.log(f"Xoá thư mục đích {SRC_B}")
            shutil.rmtree(SRC_B)

        ensure_directory(SRC_B)
        ensure_directory(SRC_B / "app" / "Controllers")
        ensure_directory(SRC_B / "app" / "Models")
        ensure_directory(SRC_B / "app" / "Views" / "layouts")
        ensure_directory(SRC_B / "app" / "Views" / "partials")
        ensure_directory(SRC_B / "app" / "Views" / "pages")
        ensure_directory(SRC_B / "app" / "Views" / "characters")
        ensure_directory(SRC_B / "app" / "data")
        ensure_directory(SRC_B / "app" / "data" / "news")
        ensure_directory(SRC_B / "app" / "data" / "events")
        ensure_directory(SRC_B / "app" / "data" / "updates")
        ensure_directory(SRC_B / "app" / "data" / "characters")
        ensure_directory(SRC_B / "public" / "assets" / "css")
        ensure_directory(SRC_B / "public" / "assets" / "js")
        ensure_directory(SRC_B / "public" / "assets" / "images")
        ensure_directory(SRC_B / "public" / "assets" / "fonts")
        ensure_directory(SRC_B / "public" / "st-ms")
        ensure_directory(SRC_B / "public" / "st-ms" / "tmp")
        ensure_directory(SRC_B / "reports")

    # endregion ----------------------------------------------------------

    # region copy assets -------------------------------------------------
    def copy_static_assets(self) -> None:
        # Bản sao nguyên vẹn các domain phụ (cdn, dl, fonts google nếu có)
        for domain_dir in SRC_A.iterdir():
            if domain_dir.is_dir() and domain_dir.name != "haitacmanhnhat.vn":
                target = SRC_B / "public" / domain_dir.name
                self.log(f"Sao chép domain assets: {domain_dir.name}")
                if target.exists():
                    shutil.rmtree(target)
                shutil.copytree(domain_dir, target)

        # st-ms, webfonts, video, fonts… trong domain chính
        candidates = []
        for child in SRC_A_DOMAIN.iterdir():
            if not child.is_dir():
                continue
            if child.name == "st-ms":
                candidates.append(("st-ms", child))
            elif re.search(r"(fonts?|webfonts|videos?|media)", child.name):
                candidates.append((child.name, child))

        for name, source in candidates:
            target = SRC_B / "public" / name
            self.log(f"Sao chép thư mục tĩnh: {name}")
            if target.exists():
                shutil.rmtree(target)
            shutil.copytree(source, target)

    # endregion ----------------------------------------------------------

    # region asset processing -------------------------------------------
    def process_html_assets(self, html_file: Path) -> None:
        soup = html_parser(html_file)
        for link in soup.find_all("link"):
            rel_attr = link.get("rel")
            if not rel_attr:
                continue
            rel_values = {value.lower() for value in rel_attr}
            if "stylesheet" not in rel_values:
                continue
            href = link.get("href", "").strip()
            if not href or is_external_resource(href):
                continue
            resolved = resolve_local_asset(html_file, href, SRC_A)
            if not resolved:
                continue
            full_path = SRC_A / resolved
            if not full_path.exists():
                continue
            file_hash = compute_hash(full_path)
            self.hash_to_css_paths[file_hash].append(posix_path(resolved))
            if file_hash not in self.global_css_hash_order:
                self.global_css_hash_order[file_hash] = resolved
            self.asset_alias["css"][href] = {
                "bundle": "vendor",
                "target": "/assets/css/vendor.css",
                "source": posix_path(resolved),
                "hash": file_hash,
                "html": posix_path(html_file.relative_to(SRC_A)),
            }

        for script in soup.find_all("script"):
            src = script.get("src", "").strip()
            if not src or is_external_resource(src):
                continue
            resolved = resolve_local_asset(html_file, src, SRC_A)
            if not resolved:
                continue
            full_path = SRC_A / resolved
            if not full_path.exists():
                continue
            file_hash = compute_hash(full_path)
            self.hash_to_js_paths[file_hash].append(posix_path(resolved))
            if file_hash not in self.global_js_hash_order:
                self.global_js_hash_order[file_hash] = resolved
            self.asset_alias["js"][src] = {
                "bundle": "vendor",
                "target": "/assets/js/vendor.js",
                "source": posix_path(resolved),
                "hash": file_hash,
                "html": posix_path(html_file.relative_to(SRC_A)),
            }

    def write_asset_bundles(self) -> None:
        css_vendor_files = [SRC_A / path for path in self.global_css_hash_order.values()]
        js_vendor_files = [SRC_A / path for path in self.global_js_hash_order.values()]

        css_out = SRC_B / "public" / "assets" / "css" / "vendor.css"
        js_out = SRC_B / "public" / "assets" / "js" / "vendor.js"

        self.write_bundle(css_out, css_vendor_files, asset_type="css")
        self.write_bundle(js_out, js_vendor_files, asset_type="js")

        for file_hash, paths in self.hash_to_css_paths.items():
            if len(paths) > 1:
                self.duplicates_report["css"].append({
                    "hash": file_hash,
                    "canonical": paths[0],
                    "duplicates": paths[1:],
                })
        for file_hash, paths in self.hash_to_js_paths.items():
            if len(paths) > 1:
                self.duplicates_report["js"].append({
                    "hash": file_hash,
                    "canonical": paths[0],
                    "duplicates": paths[1:],
                })

        bundles_report = {
            "css": [posix_path(path) for path in self.global_css_hash_order.values()],
            "js": [posix_path(path) for path in self.global_js_hash_order.values()],
        }
        (SRC_B / "reports" / "bundles.json").write_text(
            json.dumps(bundles_report, ensure_ascii=False, indent=2), encoding="utf-8"
        )

    # endregion ----------------------------------------------------------

    def write_bundle(self, output_path: Path, items: Iterable[Path], *, asset_type: str) -> None:
        ensure_directory(output_path.parent)
        data = bytearray()
        for index, source in enumerate(items):
            if not source.exists():
                continue
            chunk = source.read_bytes()
            if asset_type == "css":
                chunk = self.rewrite_css_urls_for_bundle(chunk, source.relative_to(SRC_A))
            if index:
                data.extend(b"\n")
            data.extend(chunk)
        output_path.write_bytes(bytes(data))

    def rewrite_css_urls_for_bundle(self, content: bytes, source_rel_path: Path) -> bytes:
        try:
            text = content.decode("utf-8")
            encoding = "utf-8"
        except UnicodeDecodeError:
            text = content.decode("latin-1")
            encoding = "latin-1"

        css_url_pattern = re.compile(r"url\(\s*(?P<quote>['\"]?)(?P<url>[^'\"\)]+)(?P=quote)\s*\)", re.IGNORECASE)

        def repl(match: re.Match) -> str:
            raw_url = match.group("url").strip()
            if not raw_url or raw_url.startswith("#"):
                return match.group(0)
            if is_external_resource(raw_url):
                return match.group(0)
            base_url, suffix = split_url_suffix(raw_url)
            if is_external_resource(base_url):
                return match.group(0)
            if base_url.lower().startswith("data:"):
                return match.group(0)
            resolved = self.resolve_css_reference(source_rel_path, base_url)
            if not resolved:
                return match.group(0)
            new_url = resolved + suffix
            quote = match.group("quote") or ""
            return f"url({quote}{new_url}{quote})"

        updated = css_url_pattern.sub(repl, text)
        return updated.encode(encoding)

    def resolve_css_reference(self, source_rel_path: Path, url: str) -> Optional[str]:
        base_abs = (SRC_A / source_rel_path).resolve()
        base_dir = base_abs.parent
        canonical = sanitize_url(url)

        def candidate_paths() -> Iterable[Path]:
            if canonical.startswith("/"):
                rel = canonical.lstrip("/")
                yield (SRC_A / rel)
                yield (SRC_A_DOMAIN / rel)
            else:
                yield (base_dir / canonical)
                yield (SRC_A_DOMAIN / canonical)

        for candidate in candidate_paths():
            candidate = candidate.resolve()
            if not candidate.exists():
                continue
            try:
                relative = candidate.relative_to(SRC_A)
            except ValueError:
                continue
            parts = list(relative.parts)
            if parts and parts[0] == "haitacmanhnhat.vn":
                parts = parts[1:]
            return "/" + "/".join(parts)
        return None

    # region layout extraction ------------------------------------------
    def extract_layout_parts(self) -> None:
        index_html = SRC_A_DOMAIN / "index.html"
        if not index_html.exists():
            raise FileNotFoundError("Không tìm thấy trang chủ index.html trong srcA/haitacmanhnhat.vn/")
        soup = html_parser(index_html)

        head = soup.head or soup.find("head")
        body = soup.body or soup.find("body")
        if not head or not body:
            raise RuntimeError("Trang chủ thiếu thẻ head/body.")

        self.rewrite_asset_urls(head, index_html)

        # Lưu meta mặc định
        title_tag = head.find("title")
        if title_tag:
            self.default_page_title = title_tag.get_text(strip=True) or self.default_page_title

        self.default_meta = self.collect_meta(head)

        # Xoá link/script css/js trong head
        for tag in list(head.find_all(["link", "script"])):
            if tag.name == "link":
                rel_attr = tag.get("rel")
                if rel_attr and "stylesheet" in {v.lower() for v in rel_attr}:
                    tag.decompose()
            elif tag.name == "script" and tag.get("src"):
                tag.decompose()

        # Bỏ thẻ title để layout tự sinh
        if title_tag:
            title_tag.decompose()

        for meta_tag in list(head.find_all("meta")):
            meta_tag.decompose()

        self.head_partial_html = head.decode_contents()

        header_node = None
        for candidate in body.find_all(True, recursive=False):
            if isinstance(candidate, Tag) and "top-nav" in candidate.get("class", []):
                header_node = candidate
                break
        if header_node:
            header_html = header_node.decode()
            self.header_partial_html = header_html
            header_node.decompose()
        else:
            self.header_partial_html = ""

        footer_node = body.find("footer")
        footer_segments: List[str] = []
        if footer_node:
            footer_segments.append(footer_node.decode())
            footer_node.decompose()

        # Lấy các phần tử chung sau footer (menu fixed...)
        for sibling in list(body.children):
            if isinstance(sibling, Tag) and sibling.name in {"div", "section"}:
                classes = sibling.get("class") or []
                if any(cls.startswith("menu-fixed") for cls in classes):
                    footer_segments.append(sibling.decode())
                    sibling.decompose()

        # Giữ inline script toàn cục
        for script in list(body.find_all("script")):
            if script.get("src"):
                script.decompose()
            else:
                footer_segments.append(script.decode())
                script.decompose()

        self.footer_partial_html = "\n".join(footer_segments)

    def collect_meta(self, head: Tag) -> Dict[str, object]:
        meta_info: Dict[str, object] = {}
        for meta in head.find_all("meta"):
            name = meta.get("name")
            prop = meta.get("property")
            content = meta.get("content") or meta.get("value") or ""
            if not content:
                continue
            if name:
                meta_info[name] = content
            elif prop:
                meta_info[prop] = content
        link_icon = head.find("link", rel=lambda value: value and "shortcut icon" in value.lower())
        if link_icon:
            meta_info["link:shortcut_icon"] = link_icon.get("href")
        return meta_info

    # endregion ----------------------------------------------------------

    # region HTML -> View ------------------------------------------------
    def convert_html_to_view(self, html_file: Path) -> None:
        soup = html_parser(html_file)
        head = soup.head or soup.find("head")
        body = soup.body or soup.find("body")
        if head is None or body is None:
            return

        # Lấy meta riêng của trang
        page_meta = self.collect_meta(head)
        title_tag = head.find("title")
        page_title = title_tag.get_text(strip=True) if title_tag else self.default_page_title

        # Cập nhật URL assets trong head và body
        self.rewrite_asset_urls(head, html_file)
        self.rewrite_asset_urls(body, html_file)

        # Dọn head khỏi link/script cũ
        for tag in list(head.find_all(["link", "script"])):
            if tag.name == "link":
                rel_attr = tag.get("rel")
                if rel_attr and "stylesheet" in {v.lower() for v in rel_attr}:
                    tag.decompose()
            elif tag.name == "script" and tag.get("src"):
                tag.decompose()

        # Loại header/footer trùng lặp
        for nav in body.find_all("div", class_=lambda value: value and "top-nav" in value.split()):
            nav.decompose()
        for footer in body.find_all("footer"):
            footer.decompose()

        for script in body.find_all("script"):
            if script.get("src"):
                script.decompose()

        body_attributes = self.extract_body_attributes(body)
        content_html = body.decode_contents()
        content_html = normalize_spacing(content_html.strip())

        rel_path = html_file.relative_to(SRC_A_DOMAIN)
        page_type = self.classify_page(rel_path)
        view_rel = self.view_path_for(rel_path, page_type)
        view_path = SRC_B / "app" / "Views" / view_rel
        ensure_directory(view_path.parent)

        meta_payload = self.build_meta_payload(page_meta)

        php_header_lines = [
            "<?php",
            f"$pageTitle = {php_export(page_title)};",
            f"$meta = {php_export(meta_payload)};",
        ]
        if body_attributes:
            php_header_lines.append(f"$bodyAttributes = {php_export(body_attributes)};")
        php_header_lines.append("?>")

        view_content = "\n".join(php_header_lines) + "\n\n" + content_html + "\n"
        view_path.write_text(view_content, encoding="utf-8")

        page_record = PageMeta(
            title=page_title,
            body_attributes=body_attributes,
            meta=meta_payload,
            content_html=content_html,
            view_path=view_rel,
            source_path=rel_path,
            page_type=page_type,
        )
        self.pages.append(page_record)

        self.collect_structured_data(page_record, soup, rel_path)

    def rewrite_asset_urls(self, node: Tag, html_file: Path) -> None:
        attribute_targets = ["href", "src", "data-src", "data-background", "poster"]
        for tag in node.find_all(True):
            for attr in attribute_targets:
                if not tag.has_attr(attr):
                    continue
                value = tag.get(attr, "").strip()
                if not value or value.startswith("#") or value.lower().startswith("javascript:"):
                    continue
                resolved = resolve_local_asset(html_file, value, SRC_A)
                if not resolved:
                    continue
                new_url = self.new_public_url(resolved)
                tag[attr] = new_url
            if tag.name == "meta" and tag.has_attr("content"):
                value = tag.get("content", "").strip()
                if value and not is_external_resource(value):
                    resolved = resolve_local_asset(html_file, value, SRC_A)
                    if resolved:
                        tag["content"] = self.new_public_url(resolved)
            # srcset xử lý riêng
            if tag.has_attr("srcset"):
                entries = []
                for part in tag["srcset"].split(","):
                    chunk = part.strip()
                    if not chunk:
                        continue
                    if " " in chunk:
                        url_part, descriptor = chunk.split(" ", 1)
                    else:
                        url_part, descriptor = chunk, ""
                    resolved = resolve_local_asset(html_file, url_part, SRC_A)
                    if resolved:
                        url_part = self.new_public_url(resolved)
                    if descriptor:
                        entries.append(f"{url_part} {descriptor}")
                    else:
                        entries.append(url_part)
                if entries:
                    tag["srcset"] = ", ".join(entries)
            # background-image trong style
            style_value = tag.get("style")
            if style_value and "url(" in style_value:
                tag["style"] = self.rewrite_style_urls(style_value, html_file)

    def rewrite_style_urls(self, style_value: str, html_file: Path) -> str:
        def repl(match: re.Match) -> str:
            url = match.group("url")
            resolved = resolve_local_asset(html_file, url, SRC_A)
            if not resolved:
                return match.group(0)
            return f"url('{self.new_public_url(resolved)}')"

        return re.sub(
            r"url\(['\"]?(?P<url>[^'\")]+)['\"]?\)",
            repl,
            style_value,
        )

    def new_public_url(self, relative_path: Path) -> str:
        parts = list(relative_path.parts)
        if not parts:
            return ""
        if parts[0] == "haitacmanhnhat.vn":
            parts = parts[1:]
        return "/" + "/".join(parts)

    def extract_body_attributes(self, body: Tag) -> str:
        attrs = []
        for key, value in body.attrs.items():
            if isinstance(value, list):
                attr_value = " ".join(value)
            else:
                attr_value = str(value)
            escaped = attr_value.replace('"', "&quot;")
            attrs.append(f'{key}="{escaped}"')
        return " ".join(attrs)

    def build_meta_payload(self, page_meta: Dict[str, object]) -> Dict[str, object]:
        meta = dict(self.default_meta)
        meta.update(page_meta)
        return meta

    def view_path_for(self, rel_path: Path, page_type: str) -> Path:
        if page_type == "character_detail":
            return Path("characters/detail.php")
        target = Path("pages") / rel_path.with_suffix(".php")
        return target

    def classify_page(self, rel_path: Path) -> str:
        parts = rel_path.parts
        name = rel_path.name
        if rel_path == Path("index.html"):
            return "home"
        if rel_path == Path("danh-sach-tuong.html"):
            return "character_list"
        if len(parts) >= 2 and parts[0] == "danh-sach-tuong" and rel_path.suffix == ".html":
            return "character_detail"
        if name == "tin-tuc.html":
            return "news_list"
        if name == "su-kien.html":
            return "event_list"
        if name == "update.html":
            return "update_list"
        if len(parts) >= 2 and parts[0] == "tin-tuc":
            return "news_detail"
        if len(parts) >= 2 and parts[0] == "su-kien":
            return "event_detail"
        if len(parts) >= 2 and parts[0] == "update":
            return "update_detail"
        return "page"

    # endregion ----------------------------------------------------------

    # region structured data --------------------------------------------
    def collect_structured_data(self, page: PageMeta, soup: BeautifulSoup, rel_path: Path) -> None:
        if page.page_type == "news_list":
            self.extract_news_list(soup, rel_path)
        elif page.page_type == "news_detail":
            self.extract_news_detail(soup, rel_path)
        elif page.page_type == "event_list":
            self.extract_event_list(soup, rel_path)
        elif page.page_type == "event_detail":
            self.extract_event_detail(soup, rel_path)
        elif page.page_type == "update_list":
            self.extract_update_list(soup, rel_path)
        elif page.page_type == "update_detail":
            self.extract_update_detail(soup, rel_path)
        elif page.page_type == "character_list":
            self.extract_character_list(soup, rel_path)
        elif page.page_type == "character_detail":
            self.extract_character_detail(soup, rel_path)

    def extract_news_list(self, soup: BeautifulSoup, rel_path: Path) -> None:
        items = []
        for li in soup.select("ul.posts-content li"):
            link = li.find("a", class_="title")
            if not link:
                continue
            href = link.get("href", "")
            href_clean = sanitize_url(href)
            slug_path = strip_html_suffix(href_clean).strip("/")
            slug = slug_path.split("/")[-1] if slug_path else ""
            thumbnail = ""
            img = li.find("img")
            if img:
                thumbnail = img.get("src", "")
            title_node = li.select_one(".post-item-title p")
            title = title_node.get_text(strip=True) if title_node else link.get_text(strip=True)
            summary_node = li.select_one(".text-content")
            summary = summary_node.get_text(strip=True) if summary_node else ""
            time_node = li.select_one(".time")
            created_at = time_node.get_text(strip=True) if time_node else ""
            items.append({
                "slug": slug,
                "url": href_clean,
                "title": title,
                "summary": summary,
                "thumbnail": thumbnail,
                "created_at": created_at,
                "category": "news",
            })
        self.news_index = items

    def extract_news_detail(self, soup: BeautifulSoup, rel_path: Path) -> None:
        slug = posix_path(rel_path.with_suffix("")).replace("tin-tuc/", "")
        title = soup.select_one(".post-title h1")
        title_text = title.get_text(strip=True) if title else slug
        time_node = soup.select_one(".post-title .time")
        time_text = time_node.get_text(strip=True) if time_node else ""
        content_node = soup.select_one(".post-content")
        content_html = content_node.decode_contents().strip() if content_node else ""
        images = []
        if content_node:
            for img in content_node.find_all("img"):
                src = img.get("src")
                if src:
                    images.append(src)
        self.news_detail[slug] = {
            "slug": slug,
            "title": title_text,
            "created_at": time_text,
            "content_html": content_html,
            "images": images,
        }

    def extract_event_list(self, soup: BeautifulSoup, rel_path: Path) -> None:
        items = []
        for li in soup.select("ul.posts-content li"):
            link = li.find("a", class_="title")
            if not link:
                continue
            href = link.get("href", "")
            href_clean = sanitize_url(href)
            slug_path = strip_html_suffix(href_clean).strip("/")
            slug = slug_path.split("/")[-1] if slug_path else ""
            thumbnail = ""
            img = li.find("img")
            if img:
                thumbnail = img.get("src", "")
            title_node = li.select_one(".post-item-title p")
            title = title_node.get_text(strip=True) if title_node else link.get_text(strip=True)
            summary_node = li.select_one(".text-content")
            summary = summary_node.get_text(strip=True) if summary_node else ""
            time_node = li.select_one(".time")
            created_at = time_node.get_text(strip=True) if time_node else ""
            items.append({
                "slug": slug,
                "url": href_clean,
                "title": title,
                "summary": summary,
                "thumbnail": thumbnail,
                "created_at": created_at,
                "category": "event",
            })
        self.event_index = items

    def extract_event_detail(self, soup: BeautifulSoup, rel_path: Path) -> None:
        slug = posix_path(rel_path.with_suffix("")).replace("su-kien/", "")
        title = soup.select_one(".post-title h1")
        title_text = title.get_text(strip=True) if title else slug
        time_node = soup.select_one(".post-title .time")
        time_text = time_node.get_text(strip=True) if time_node else ""
        content_node = soup.select_one(".post-content")
        content_html = content_node.decode_contents().strip() if content_node else ""
        images = []
        if content_node:
            for img in content_node.find_all("img"):
                src = img.get("src")
                if src:
                    images.append(src)
        self.event_detail[slug] = {
            "slug": slug,
            "title": title_text,
            "created_at": time_text,
            "content_html": content_html,
            "images": images,
        }

    def extract_update_list(self, soup: BeautifulSoup, rel_path: Path) -> None:
        items = []
        for li in soup.select("ul.posts-content li"):
            link = li.find("a", class_="title")
            if not link:
                continue
            href = link.get("href", "")
            href_clean = sanitize_url(href)
            slug_path = strip_html_suffix(href_clean).strip("/")
            slug = slug_path.split("/")[-1] if slug_path else ""
            thumbnail = ""
            img = li.find("img")
            if img:
                thumbnail = img.get("src", "")
            title_node = li.select_one(".post-item-title p")
            title = title_node.get_text(strip=True) if title_node else link.get_text(strip=True)
            summary_node = li.select_one(".text-content")
            summary = summary_node.get_text(strip=True) if summary_node else ""
            time_node = li.select_one(".time")
            created_at = time_node.get_text(strip=True) if time_node else ""
            items.append({
                "slug": slug,
                "url": href_clean,
                "title": title,
                "summary": summary,
                "thumbnail": thumbnail,
                "created_at": created_at,
                "category": "update",
            })
        self.update_index = items

    def extract_update_detail(self, soup: BeautifulSoup, rel_path: Path) -> None:
        slug = posix_path(rel_path.with_suffix("")).replace("update/", "")
        title = soup.select_one(".post-title h1")
        title_text = title.get_text(strip=True) if title else slug
        time_node = soup.select_one(".post-title .time")
        time_text = time_node.get_text(strip=True) if time_node else ""
        content_node = soup.select_one(".post-content")
        content_html = content_node.decode_contents().strip() if content_node else ""
        images = []
        if content_node:
            for img in content_node.find_all("img"):
                src = img.get("src")
                if src:
                    images.append(src)
        self.update_detail[slug] = {
            "slug": slug,
            "title": title_text,
            "created_at": time_text,
            "content_html": content_html,
            "images": images,
        }

    def extract_character_list(self, soup: BeautifulSoup, rel_path: Path) -> None:
        characters = []
        for li in soup.select("ul.listChars li"):
            link = li.find("a")
            if not link:
                continue
            href = link.get("href", "")
            href_clean = sanitize_url(href)
            slug_path = strip_html_suffix(href_clean).strip("/")
            slug = slug_path.split("/")[-1] if slug_path else ""
            data_particular = li.get("data-particular") or ""
            data_name = li.get("data-name") or link.get("title") or link.get_text(strip=True)
            style = li.get("style", "")
            bg_match = re.search(r"url\(['\"]?(?P<url>[^'\")]+)", style)
            avatar = bg_match.group("url") if bg_match else ""
            characters.append({
                "slug": slug,
                "name": data_name,
                "rank": self.detect_rank_from_name(data_name),
                "avatar": avatar,
                "particular": data_particular,
                "url": href_clean,
            })
        self.character_index = characters

    def detect_rank_from_name(self, name: str) -> str:
        match = re.search(r"\b(SSS|SS|SR|S|A|B)\b", name.upper())
        if match:
            return match.group(1)
        if "-S" in name.upper():
            return "S"
        return ""

    def extract_character_detail(self, soup: BeautifulSoup, rel_path: Path) -> None:
        slug = posix_path(rel_path.with_suffix("")).replace("danh-sach-tuong/", "")
        script_text = " ".join(script.get_text() for script in soup.find_all("script"))
        hero_id_match = re.search(r"const\s+heroId\s*=\s*\"?(?P<id>\d+)\"?", script_text)
        hero_slug_match = re.search(r"const\s+heroSlug\s*=\s*\"?(?P<slug>[a-z0-9\-]+)\"?", script_text)
        hero_id = hero_id_match.group("id") if hero_id_match else ""
        hero_slug = hero_slug_match.group("slug") if hero_slug_match else slug
        main_content = soup.select_one(".subpage-container.wrapper-hero.detail")
        content_html = main_content.decode() if main_content else ""
        remote_payload = self.fetch_remote_character(hero_id, hero_slug)
        self.character_detail[slug] = {
            "slug": slug,
            "hero_id": hero_id,
            "hero_slug": hero_slug,
            "content_html": content_html,
            "remote": remote_payload,
        }

    def fetch_remote_character(self, hero_id: str, hero_slug: str) -> dict:
        if not self.fetch_remote or not hero_id or not hero_slug:
            return {}
        key = (hero_id, hero_slug)
        if key in self.remote_cache:
            return self.remote_cache[key]
        url = "https://haitacmanhnhat.vn/get-hero-detail"
        try:
            response = requests.post(
                url,
                json={"heroId": int(hero_id), "heroSlug": hero_slug},
                timeout=10,
                headers={"User-Agent": "mvc-converter/1.0"},
            )
            response.raise_for_status()
            data = response.json()
            self.remote_cache[key] = data
            return data
        except Exception as exc:
            self.log(f"Lỗi lấy dữ liệu hero {hero_slug}: {exc}")
            self.remote_cache[key] = {}
            return {}

    # endregion ----------------------------------------------------------

    # region data/model/report writers ----------------------------------
    def write_data_files(self) -> None:
        data_dir = SRC_B / "app" / "data"
        ensure_directory(data_dir)

        (data_dir / "news.json").write_text(
            json.dumps(self.news_index, ensure_ascii=False, indent=2),
            encoding="utf-8",
        )
        for slug, payload in self.news_detail.items():
            (data_dir / "news" / f"{slug}.json").write_text(
                json.dumps(payload, ensure_ascii=False, indent=2),
                encoding="utf-8",
            )

        (data_dir / "events.json").write_text(
            json.dumps(self.event_index, ensure_ascii=False, indent=2),
            encoding="utf-8",
        )
        ensure_directory(data_dir / "events")
        for slug, payload in self.event_detail.items():
            (data_dir / "events" / f"{slug}.json").write_text(
                json.dumps(payload, ensure_ascii=False, indent=2),
                encoding="utf-8",
            )

        (data_dir / "updates.json").write_text(
            json.dumps(self.update_index, ensure_ascii=False, indent=2),
            encoding="utf-8",
        )
        ensure_directory(data_dir / "updates")
        for slug, payload in self.update_detail.items():
            (data_dir / "updates" / f"{slug}.json").write_text(
                json.dumps(payload, ensure_ascii=False, indent=2),
                encoding="utf-8",
            )

        ensure_directory(data_dir / "characters")
        (data_dir / "characters.json").write_text(
            json.dumps(self.character_index, ensure_ascii=False, indent=2),
            encoding="utf-8",
        )
        for slug, payload in self.character_detail.items():
            (data_dir / "characters" / f"{slug}.json").write_text(
                json.dumps(payload, ensure_ascii=False, indent=2),
                encoding="utf-8",
            )

    def write_php_sources(self) -> None:
        controllers_dir = SRC_B / "app" / "Controllers"
        models_dir = SRC_B / "app" / "Models"
        views_dir = SRC_B / "app" / "Views"

        # Controller cơ sở
        (controllers_dir / "Controller.php").write_text(textwrap.dedent(f"""\
            <?php
            namespace App\\Controllers;

            abstract class Controller
            {{
                protected function render(string $view, array $data = []): void
                {{
                    extract($data);
                    $viewFile = __DIR__ . '/../Views/' . str_replace('.', '/', $view) . '.php';
                    if (!is_file($viewFile)) {{
                        http_response_code(404);
                        echo 'View not found: ' . htmlspecialchars($view);
                        return;
                    }}
                    ob_start();
                    include $viewFile;
                    $content = ob_get_clean();
                    include __DIR__ . '/../Views/layouts/main.php';
                }}
            }}
        """), encoding="utf-8")

        # HomeController
        (controllers_dir / "HomeController.php").write_text(textwrap.dedent("""\
            <?php
            namespace App\\Controllers;

            class HomeController extends Controller
            {
                public function index(): void
                {
                    $this->render('pages/index');
                }
            }
        """), encoding="utf-8")

        # NewsController
        (controllers_dir / "NewsController.php").write_text(textwrap.dedent("""\
            <?php
            namespace App\\Controllers;

            use App\\Models\\NewsModel;

            class NewsController extends Controller
            {
                private function resolveDataset(string $type): string
                {
                    return match (strtolower($type)) {
                        'event', 'events', 'su-kien' => 'event',
                        'update', 'updates' => 'update',
                        default => 'news',
                    };
                }

                public function index(): void
                {
                    $news = NewsModel::paginateDataset((int)($_GET['page'] ?? 1), 10, 'news');
                    $this->render('pages/tin-tuc', ['newsPagination' => $news]);
                }

                public function detail(string $slug, string $type = 'news'): void
                {
                    $dataset = $this->resolveDataset($type);
                    $item = NewsModel::findBySlug($slug, $dataset);
                    if (!$item) {
                        http_response_code(404);
                        echo 'Bài viết không tồn tại';
                        return;
                    }
                    $viewPrefix = [
                        'news' => 'tin-tuc',
                        'event' => 'su-kien',
                        'update' => 'update',
                    ][$dataset] ?? 'tin-tuc';
                    $this->render('pages/' . $viewPrefix . '/' . $slug, ['article' => $item]);
                }

                public function apiList(): void
                {
                    $page = (int)($_GET['page'] ?? 1);
                    $limit = (int)($_GET['limit'] ?? 10);
                    $type = $_GET['type'] ?? 'news';
                    $dataset = $this->resolveDataset($type);
                    $payload = NewsModel::paginateDataset($page, $limit, $dataset);
                    header('Content-Type: application/json');
                    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
                }

                public function apiDetail(string $slug): void
                {
                    $type = $_GET['type'] ?? 'news';
                    $dataset = $this->resolveDataset($type);
                    $item = NewsModel::findBySlug($slug, $dataset);
                    header('Content-Type: application/json');
                    echo json_encode($item, JSON_UNESCAPED_UNICODE);
                }
            }
        """), encoding="utf-8")

        # CharacterController
        (controllers_dir / "CharacterController.php").write_text(textwrap.dedent("""\
            <?php
            namespace App\\Controllers;

            use App\\Models\\CharacterModel;

            class CharacterController extends Controller
            {
                public function index(): void
                {
                    $characters = CharacterModel::all();
                    $this->render('pages/danh-sach-tuong', ['characters' => $characters]);
                }

                public function detail(string $slug): void
                {
                    $character = CharacterModel::findBySlug($slug);
                    if (!$character) {
                        http_response_code(404);
                        echo 'Không tìm thấy tướng';
                        return;
                    }
                    $this->render('characters/detail', ['character' => $character]);
                }

                public function apiList(): void
                {
                    $page = (int)($_GET['page'] ?? 1);
                    $limit = (int)($_GET['limit'] ?? 20);
                    $rank = $_GET['rank'] ?? null;
                    $payload = CharacterModel::paginate($page, $limit, $rank);
                    header('Content-Type: application/json');
                    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
                }

                public function apiDetail(string $slug): void
                {
                    $character = CharacterModel::findBySlug($slug);
                    header('Content-Type: application/json');
                    echo json_encode($character, JSON_UNESCAPED_UNICODE);
                }

                public function legacyDetail(): void
                {
                    $payload = json_decode(file_get_contents('php://input'), true) ?? [];
                    $slug = $payload['heroSlug'] ?? null;
                    if (!$slug) {
                        http_response_code(400);
                        echo json_encode(['error' => 'Missing heroSlug'], JSON_UNESCAPED_UNICODE);
                        return;
                    }
                    $character = CharacterModel::findBySlug($slug);
                    header('Content-Type: application/json');
                    echo json_encode($character['remote'] ?? [], JSON_UNESCAPED_UNICODE);
                }
            }
        """), encoding="utf-8")

        # PagesController
        (controllers_dir / "PagesController.php").write_text(textwrap.dedent("""\
            <?php
            namespace App\\Controllers;

            class PagesController extends Controller
            {
                public function show(string $slug): void
                {
                    $slug = trim($slug, '/');
                    $slug = $slug === '' ? 'index' : $slug;
                    $this->render('pages/' . $slug);
                }
            }
        """), encoding="utf-8")

        # Models
        (models_dir / "BaseModel.php").write_text(textwrap.dedent("""\
            <?php
            namespace App\\Models;

            abstract class BaseModel
            {
                protected static function dataPath(string $relative): string
                {
                    return __DIR__ . '/../data/' . $relative;
                }

                protected static function loadJson(string $relative)
                {
                    $path = static::dataPath($relative);
                    if (!is_file($path)) {
                        return null;
                    }
                    $data = json_decode(file_get_contents($path), true);
                    return $data;
                }
            }
        """), encoding="utf-8")

        (models_dir / "NewsModel.php").write_text(textwrap.dedent("""\
            <?php
            namespace App\\Models;

            class NewsModel extends BaseModel
            {
                protected static function datasetFile(string $dataset): string
                {
                    return match (strtolower($dataset)) {
                        'event', 'events', 'su-kien' => 'events.json',
                        'update', 'updates' => 'updates.json',
                        default => 'news.json',
                    };
                }

                protected static function detailFile(string $dataset, string $slug): string
                {
                    $slug = trim($slug, '/');
                    $folder = match (strtolower($dataset)) {
                        'event', 'events', 'su-kien' => 'events',
                        'update', 'updates' => 'updates',
                        default => 'news',
                    };
                    return $folder . '/' . $slug . '.json';
                }

                public static function all(string $dataset = 'news'): array
                {
                    return static::loadJson(static::datasetFile($dataset)) ?? [];
                }

                public static function paginateDataset(int $page = 1, int $limit = 10, string $dataset = 'news'): array
                {
                    $all = static::all($dataset);
                    $total = count($all);
                    $limit = max(1, $limit);
                    $page = max(1, $page);
                    $offset = ($page - 1) * $limit;
                    $slice = array_slice($all, $offset, $limit);
                    return [
                        'data' => $slice,
                        'page' => $page,
                        'limit' => $limit,
                        'total' => $total,
                        'total_pages' => (int)ceil($total / $limit),
                    ];
                }

                public static function findBySlug(string $slug, string $dataset = 'news'): ?array
                {
                    $slug = trim($slug);
                    if ($slug === '') {
                        return null;
                    }
                    $data = static::loadJson(static::detailFile($dataset, $slug));
                    if (!$data) {
                        return null;
                    }
                    $list = static::all($dataset);
                    foreach ($list as $item) {
                        if (($item['slug'] ?? null) === $slug) {
                            $data = array_merge($item, $data);
                            break;
                        }
                    }
                    return $data;
                }
            }
        """), encoding="utf-8")

        (models_dir / "CharacterModel.php").write_text(textwrap.dedent("""\
            <?php
            namespace App\\Models;

            class CharacterModel extends BaseModel
            {
                public static function all(): array
                {
                    return static::loadJson('characters.json') ?? [];
                }

                public static function paginate(int $page = 1, int $limit = 20, ?string $rank = null): array
                {
                    $all = static::all();
                    if ($rank) {
                        $all = array_values(array_filter($all, fn ($item) => strcasecmp($item['rank'] ?? '', $rank) === 0));
                    }
                    $total = count($all);
                    $limit = max(1, $limit);
                    $page = max(1, $page);
                    $offset = ($page - 1) * $limit;
                    $slice = array_slice($all, $offset, $limit);
                    return [
                        'data' => $slice,
                        'page' => $page,
                        'limit' => $limit,
                        'total' => $total,
                        'total_pages' => (int)ceil($total / $limit),
                    ];
                }

                public static function findBySlug(string $slug): ?array
                {
                    $slug = trim($slug, '/');
                    $detail = static::loadJson('characters/' . $slug . '.json');
                    if (!$detail) {
                        return null;
                    }
                    $list = static::all();
                    foreach ($list as $item) {
                        if (($item['slug'] ?? null) === $slug) {
                            $detail = array_merge($item, $detail);
                            break;
                        }
                    }
                    return $detail;
                }
            }
        """), encoding="utf-8")

        # Layout & partials
        layout_path = views_dir / "layouts" / "main.php"
        layout_path.write_text(textwrap.dedent("""\
            <?php
            ?><!DOCTYPE html>
            <html lang="vi">
            <head>
                <?php include __DIR__ . '/../partials/head.php'; ?>
                <link rel="stylesheet" href="/assets/css/vendor.css">
            </head>
            <body <?= $bodyAttributes ?? '' ?>>
                <?php include __DIR__ . '/../partials/header.php'; ?>
                <main class="main-content">
                    <?= $content ?? '' ?>
                </main>
                <?php include __DIR__ . '/../partials/footer.php'; ?>
                <script src="/assets/js/vendor.js"></script>
            </body>
            </html>
        """), encoding="utf-8")

        (views_dir / "partials" / "head.php").write_text(textwrap.dedent(f"""\
            <?php
            $meta = $meta ?? [];
            $defaults = {php_export(self.default_meta)};
            $meta = array_replace_recursive($defaults, $meta);
            $pageTitle = $pageTitle ?? {php_export(self.default_page_title)};
            ?>
            <meta charset="utf-8">
            <?php if (!empty($meta['viewport'] ?? null)): ?>
                <meta name="viewport" content="<?= htmlspecialchars($meta['viewport'], ENT_QUOTES) ?>">
            <?php else: ?>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <?php endif; ?>
            <title><?= htmlspecialchars($pageTitle, ENT_QUOTES) ?></title>
            <?php if (!empty($meta['description'] ?? null)): ?>
                <meta name="description" content="<?= htmlspecialchars($meta['description'], ENT_QUOTES) ?>">
            <?php endif; ?>
            <?php if (!empty($meta['og:title'] ?? null)): ?>
                <meta property="og:title" content="<?= htmlspecialchars($meta['og:title'], ENT_QUOTES) ?>">
            <?php endif; ?>
            <?php if (!empty($meta['og:image'] ?? null)): ?>
                <meta property="og:image" content="<?= htmlspecialchars($meta['og:image'], ENT_QUOTES) ?>">
            <?php endif; ?>
            <?php if (!empty($meta['og:image:width'] ?? null)): ?>
                <meta property="og:image:width" content="<?= htmlspecialchars($meta['og:image:width'], ENT_QUOTES) ?>">
            <?php endif; ?>
            <?php if (!empty($meta['og:image:height'] ?? null)): ?>
                <meta property="og:image:height" content="<?= htmlspecialchars($meta['og:image:height'], ENT_QUOTES) ?>">
            <?php endif; ?>
            <?php if (!empty($meta['facebook-domain-verification'] ?? null)): ?>
                <meta name="facebook-domain-verification" content="<?= htmlspecialchars($meta['facebook-domain-verification'], ENT_QUOTES) ?>">
            <?php endif; ?>
            <?php if (!empty($meta['link:shortcut_icon'] ?? null)): ?>
                <link rel="shortcut icon" href="<?= htmlspecialchars($meta['link:shortcut_icon'], ENT_QUOTES) ?>">
            <?php endif; ?>
            {self.head_partial_html or ''}
        """), encoding="utf-8")

        (views_dir / "partials" / "header.php").write_text(self.header_partial_html or "", encoding="utf-8")
        (views_dir / "partials" / "footer.php").write_text(self.footer_partial_html or "", encoding="utf-8")

        # Character detail view
        (views_dir / "characters" / "detail.php").write_text(textwrap.dedent("""\
            <?php
            $pageTitle = $character['name'] ?? ($pageTitle ?? 'Thông tin tướng');
            $meta = array_merge([
                'description' => $character['remote']['description'] ?? ($meta['description'] ?? null),
            ], $meta ?? []);
            $bodyAttributes = $bodyAttributes ?? ($character['body_attributes'] ?? '');
            ?>
            <?= $character['content_html'] ?? '' ?>
        """), encoding="utf-8")

        # Front controller
        public_dir = SRC_B / "public"
        ensure_directory(public_dir)
        (public_dir / "index.php").write_text(textwrap.dedent("""\
            <?php
            declare(strict_types=1);

            spl_autoload_register(function (string $class): void {
                $prefix = 'App\\\\';
                if (str_starts_with($class, $prefix)) {
                    $path = __DIR__ . '/../app/' . str_replace('App\\\\', '', $class) . '.php';
                    $path = str_replace('\\\\', '/', $path);
                    if (is_file($path)) {
                        require_once $path;
                    }
                }
            });

            use App\\Controllers\\HomeController;
            use App\\Controllers\\NewsController;
            use App\\Controllers\\CharacterController;
            use App\\Controllers\\PagesController;

            $uri = trim(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH) ?? '', '/');

            if ($uri === '' || $uri === 'index.html') {
                (new HomeController())->index();
                return;
            }

            if (preg_match('~^tin-tuc(?:/)?$~', $uri)) {
                (new NewsController())->index();
                return;
            }

            if (preg_match('~^tin-tuc/(?P<slug>[^/]+)(?:\\.html)?$~', $uri, $matches)) {
                (new NewsController())->detail($matches['slug'], 'news');
                return;
            }

            if (preg_match('~^su-kien/(?P<slug>[^/]+)(?:\\.html)?$~', $uri, $matches)) {
                (new NewsController())->detail($matches['slug'], 'event');
                return;
            }

            if (preg_match('~^update/(?P<slug>[^/]+)(?:\\.html)?$~', $uri, $matches)) {
                (new NewsController())->detail($matches['slug'], 'update');
                return;
            }

            if ($uri === 'danh-sach-tuong.html' || $uri === 'danh-sach-tuong') {
                (new CharacterController())->index();
                return;
            }

            if (preg_match('~^danh-sach-tuong/(?P<slug>[^/]+)(?:\\.html)?$~', $uri, $matches)) {
                (new CharacterController())->detail($matches['slug']);
                return;
            }

            if (preg_match('~^api/news(?:/)?$~', $uri)) {
                (new NewsController())->apiList();
                return;
            }

            if (preg_match('~^api/news/(?P<slug>[^/]+)$~', $uri, $matches)) {
                (new NewsController())->apiDetail($matches['slug']);
                return;
            }

            if (preg_match('~^api/characters(?:/)?$~', $uri)) {
                (new CharacterController())->apiList();
                return;
            }

            if (preg_match('~^api/characters/(?P<slug>[^/]+)$~', $uri, $matches)) {
                (new CharacterController())->apiDetail($matches['slug']);
                return;
            }

            if ($uri === 'get-hero-detail' && $_SERVER['REQUEST_METHOD'] === 'POST') {
                (new CharacterController())->legacyDetail();
                return;
            }

            (new PagesController())->show($uri);
        """), encoding="utf-8")

        # .htaccess
        (public_dir / ".htaccess").write_text(textwrap.dedent("""\
            RewriteEngine On
            RewriteCond %{REQUEST_FILENAME} !-f
            RewriteCond %{REQUEST_FILENAME} !-d
            RewriteRule ^ index.php [QSA,L]
        """), encoding="utf-8")

    def write_reports(self) -> None:
        reports_dir = SRC_B / "reports"
        ensure_directory(reports_dir)

        (reports_dir / "duplicates.json").write_text(
            json.dumps(self.duplicates_report, ensure_ascii=False, indent=2),
            encoding="utf-8",
        )
        (reports_dir / "alias-map.json").write_text(
            json.dumps(self.asset_alias, ensure_ascii=False, indent=2),
            encoding="utf-8",
        )

        api_spec = {
            "/api/news": {
                "method": "GET",
                "params": {
                    "page": "integer?",
                    "limit": "integer?",
                    "type": "string? (news|event|update)",
                },
                "response": {
                    "data": [
                        {
                            "slug": "string",
                            "title": "string",
                            "summary": "string",
                            "thumbnail": "string",
                            "created_at": "string",
                        }
                    ],
                    "page": "integer",
                    "limit": "integer",
                    "total": "integer",
                    "total_pages": "integer",
                },
            },
            "/api/news/{slug}": {
                "method": "GET",
                "params": {"type": "string? (news|event|update)"},
                "response": {
                    "slug": "string",
                    "title": "string",
                    "created_at": "string",
                    "content_html": "string",
                    "images": ["string"],
                },
            },
            "/api/characters": {
                "method": "GET",
                "params": {"page": "integer?", "limit": "integer?", "rank": "string?"},
                "response": {
                    "data": [
                        {
                            "slug": "string",
                            "name": "string",
                            "rank": "string",
                            "avatar": "string",
                            "particular": "string",
                        }
                    ],
                    "page": "integer",
                    "limit": "integer",
                    "total": "integer",
                    "total_pages": "integer",
                },
            },
            "/api/characters/{slug}": {
                "method": "GET",
                "params": {},
                "response": {
                    "slug": "string",
                    "hero_id": "string",
                    "hero_slug": "string",
                    "content_html": "string",
                    "remote": "object",
                },
            },
            "/get-hero-detail": {
                "method": "POST",
                "params": {"heroId": "integer", "heroSlug": "string"},
                "response": {"...": "object giống API gốc"},
            },
        }
        (reports_dir / "api-spec.json").write_text(
            json.dumps(api_spec, ensure_ascii=False, indent=2),
            encoding="utf-8",
        )

        routes_report = {
            "static": [
                {"path": "/", "controller": "App\\\\Controllers\\\\HomeController@index"},
                {"path": "tin-tuc", "controller": "App\\\\Controllers\\\\NewsController@index"},
                {"path": "danh-sach-tuong", "controller": "App\\\\Controllers\\\\CharacterController@index"},
            ],
            "dynamic": [
                {"pattern": "tin-tuc/{slug}.html", "controller": "App\\\\Controllers\\\\NewsController@detail"},
                {"pattern": "su-kien/{slug}.html", "controller": "App\\\\Controllers\\\\NewsController@detail"},
                {"pattern": "update/{slug}.html", "controller": "App\\\\Controllers\\\\NewsController@detail"},
                {"pattern": "danh-sach-tuong/{slug}.html", "controller": "App\\\\Controllers\\\\CharacterController@detail"},
            ],
        }
        (reports_dir / "routes.json").write_text(
            json.dumps(routes_report, ensure_ascii=False, indent=2),
            encoding="utf-8",
        )

    # endregion ----------------------------------------------------------


def main() -> None:
    parser = argparse.ArgumentParser(description="Chuyển đổi srcA -> srcB (PHP MVC).")
    parser.add_argument("--skip-clean", action="store_true", help="Không xoá srcB trước khi build.")
    parser.add_argument("--skip-remote", action="store_true", help="Không gọi API từ site gốc.")
    args = parser.parse_args()

    converter = MVCConverter(clean=not args.skip_clean, fetch_remote=not args.skip_remote)
    converter.run()


if __name__ == "__main__":
    main()
