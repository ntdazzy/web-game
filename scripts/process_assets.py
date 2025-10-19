#!/usr/bin/env python3
"""
Asset processing utility for haitacmanhnhat project.

Steps:
1. Scan srcA HTML to discover CSS/JS usage order.
2. Compute SHA256 hashes to deduplicate assets and emit reports.
3. Build consolidated vendor/app bundles for CSS and JS in srcB/public/assets.
4. Produce alias map describing the new asset mapping.
"""

from __future__ import annotations

import json
import os
import sys
import hashlib
from collections import OrderedDict, defaultdict
from dataclasses import dataclass
from html.parser import HTMLParser
from pathlib import Path
from typing import Dict, Iterable, List, Optional, Set, Tuple


BASE_DIR = Path(__file__).resolve().parent.parent
SRC_A = BASE_DIR / "srcA"
SRC_B = BASE_DIR / "srcB"
REPORT_DIR = SRC_B / "reports"
CSS_OUT_DIR = SRC_B / "public" / "assets" / "css"
JS_OUT_DIR = SRC_B / "public" / "assets" / "js"


def die(message: str) -> None:
    print(f"[process_assets] {message}", file=sys.stderr)
    sys.exit(1)


if not SRC_A.exists():
    die(f"Cannot locate srcA directory at {SRC_A}")


class AssetParser(HTMLParser):
    """Collect link/script references for a HTML document."""

    def __init__(self, html_path: Path) -> None:
        super().__init__(convert_charrefs=True)
        self.html_path = html_path
        self.links: List[str] = []
        self.scripts: List[str] = []

    def handle_starttag(self, tag: str, attrs: List[Tuple[str, Optional[str]]]) -> None:
        attr_map = {name.lower(): (value or "") for name, value in attrs}
        if tag.lower() == "link":
            rel = attr_map.get("rel", "")
            rel_tokens = {token.strip().lower() for token in rel.split()}
            if "stylesheet" in rel_tokens:
                href = attr_map.get("href", "")
                if href:
                    self.links.append(href.strip())
        elif tag.lower() == "script":
            src = attr_map.get("src", "")
            if src:
                self.scripts.append(src.strip())


@dataclass
class AssetReference:
    raw: str
    html: Path
    resolved: Optional[Path]


def sanitize_url(url: str) -> str:
    """Remove query strings and fragments for canonical lookup."""
    no_fragment = url.split("#", 1)[0]
    return no_fragment.split("?", 1)[0]


def resolve_local_asset(html_file: Path, url: str, root: Path) -> Optional[Path]:
    """Resolve a relative asset reference to a path under srcA."""
    url = url.strip()
    if not url:
        return None
    lowered = url.lower()
    if lowered.startswith(("http://", "https://", "//", "data:")):
        return None

    canonical = sanitize_url(url)
    html_dir = html_file.parent.resolve()
    root_resolved = root.resolve()

    def safe_relative(candidate: Path) -> Optional[Path]:
        try:
            rel = candidate.relative_to(root_resolved)
        except ValueError:
            return None
        return rel if candidate.exists() else None

    if canonical.startswith("/"):
        # Prefer domain root when available, then project root.
        try:
            html_rel = html_file.resolve().relative_to(root_resolved)
            domain_root = root_resolved / html_rel.parts[0]
        except Exception:
            domain_root = root_resolved

        candidate = (domain_root / canonical.lstrip("/")).resolve(strict=False)
        rel = safe_relative(candidate)
        if rel:
            return rel

        candidate = (root_resolved / canonical.lstrip("/")).resolve(strict=False)
        rel = safe_relative(candidate)
        if rel:
            return rel
        return None

    # Relative path from current HTML directory.
    candidate = (html_dir / canonical).resolve(strict=False)
    rel = safe_relative(candidate)
    if rel:
        return rel

    # Fallback to domain root join.
    try:
        html_rel = html_file.resolve().relative_to(root_resolved)
        domain_root = root_resolved / html_rel.parts[0]
    except Exception:
        domain_root = root_resolved

    candidate = (domain_root / canonical).resolve(strict=False)
    rel = safe_relative(candidate)
    if rel:
        return rel

    return None


def compute_hash(path: Path) -> str:
    h = hashlib.sha256()
    with path.open("rb") as handle:
        for chunk in iter(lambda: handle.read(1024 * 1024), b""):
            h.update(chunk)
    return h.hexdigest()


def categorize_asset(path: Path, asset_type: str) -> str:
    name = path.name.lower()
    vendor_keywords = {
        "bootstrap",
        "jquery",
        "slick",
        "select2",
        "moment",
        "daterangepicker",
        "letmescroll",
        "loadingoverlay",
        "sweetalert",
        "aos",
        "font",
        "fa-",
        "vendor",
        "owl",
        "swiper",
        "gsap",
        "anime",
        "wow",
        "lottie",
        "chart",
    }
    app_hints_css = {
        "style",
        "responsive",
        "global",
        "custom",
        "page",
        "home",
        "tin",
        "su-kien",
        "giftcode",
        "nap",
        "list",
        "detail",
    }
    app_hints_js = {
        "custom",
        "global",
        "widget",
        "app",
        "page",
        "home",
        "tin",
        "su-kien",
        "giftcode",
        "nap",
        "character",
    }

    if asset_type == "css":
        if any(keyword in name for keyword in vendor_keywords):
            return "vendor"
        if name.endswith(".min.css") and not any(hint in name for hint in app_hints_css):
            return "vendor"
        return "app"

    # JS
    if any(keyword in name for keyword in vendor_keywords):
        return "vendor"
    if name.endswith(".min.js") and not any(hint in name for hint in app_hints_js):
        return "vendor"
    return "app"


def ordered_html_files(root: Path) -> List[Path]:
    files = [path for path in root.rglob("*.html")]
    files.sort()
    return files


def gather_assets() -> Tuple[
    OrderedDict[Path, Set[str]],
    OrderedDict[Path, Set[str]],
    Dict[str, Dict[str, str]],
]:
    css_map: OrderedDict[Path, Set[str]] = OrderedDict()
    js_map: OrderedDict[Path, Set[str]] = OrderedDict()
    external_alias: Dict[str, Dict[str, str]] = {"css": {}, "js": {}}

    for html_file in ordered_html_files(SRC_A):
        parser = AssetParser(html_file)
        try:
            with html_file.open("r", encoding="utf-8", errors="ignore") as handle:
                parser.feed(handle.read())
        except Exception as exc:
            print(f"[process_assets] Failed parsing {html_file}: {exc}", file=sys.stderr)
            continue

        for href in parser.links:
            resolved = resolve_local_asset(html_file, href, SRC_A)
            if resolved is None:
                key = href.strip()
                external_alias["css"][key] = {
                    "bundle": "external",
                    "target": key,
                    "html": str(html_file.relative_to(SRC_A)).replace(os.sep, "/"),
                }
                continue
            css_map.setdefault(resolved, set()).add(href.strip())

        for src in parser.scripts:
            resolved = resolve_local_asset(html_file, src, SRC_A)
            if resolved is None:
                key = src.strip()
                external_alias["js"][key] = {
                    "bundle": "external",
                    "target": key,
                    "html": str(html_file.relative_to(SRC_A)).replace(os.sep, "/"),
                }
                continue
            js_map.setdefault(resolved, set()).add(src.strip())

    return css_map, js_map, external_alias


def build_reports_and_bundles() -> None:
    css_refs, js_refs, external_alias = gather_assets()

    REPORT_DIR.mkdir(parents=True, exist_ok=True)
    CSS_OUT_DIR.mkdir(parents=True, exist_ok=True)
    JS_OUT_DIR.mkdir(parents=True, exist_ok=True)

    duplicates_report = {"css": [], "js": []}
    alias_map = {"css": {}, "js": {}}
    alias_map["css"].update(external_alias["css"])
    alias_map["js"].update(external_alias["js"])

    # Hash tracking
    css_hash_to_paths: Dict[str, List[str]] = defaultdict(list)
    js_hash_to_paths: Dict[str, List[str]] = defaultdict(list)

    css_hash_order: OrderedDict[str, Path] = OrderedDict()
    js_hash_order: OrderedDict[str, Path] = OrderedDict()

    css_hash_bundle: Dict[str, str] = {}
    js_hash_bundle: Dict[str, str] = {}

    css_vendor_list: List[Path] = []
    css_app_list: List[Path] = []
    js_vendor_list: List[Path] = []
    js_app_list: List[Path] = []

    root_resolved = SRC_A.resolve()

    def record_alias(
        bucket: Dict[str, Dict[str, str]],
        original: str,
        target: str,
        bundle: str,
        source: str,
        file_hash: str,
    ) -> None:
        key = original.strip()
        bucket[key] = {
            "bundle": bundle,
            "target": target,
            "source": source,
            "hash": file_hash,
        }
        sanitized = sanitize_url(key)
        if sanitized != key:
            bucket[sanitized] = {
                "bundle": bundle,
                "target": target,
                "source": source,
                "hash": file_hash,
            }

    # CSS handling
    for rel_path, raw_refs in css_refs.items():
        full_path = (root_resolved / rel_path).resolve()
        if not full_path.exists():
            print(f"[process_assets] Missing CSS asset: {rel_path}", file=sys.stderr)
            continue
        file_hash = compute_hash(full_path)
        css_hash_to_paths[file_hash].append(str(rel_path).replace(os.sep, "/"))

        if file_hash not in css_hash_order:
            css_hash_order[file_hash] = rel_path
            category = categorize_asset(rel_path, "css")
            css_hash_bundle[file_hash] = category
            if category == "vendor":
                css_vendor_list.append(rel_path)
            else:
                css_app_list.append(rel_path)

        bundle = css_hash_bundle[file_hash]
        target_href = "/assets/css/vendor.css" if bundle == "vendor" else "/assets/css/app.css"
        source_path = str(rel_path).replace(os.sep, "/")
        for original in raw_refs:
            record_alias(alias_map["css"], original, target_href, bundle, source_path, file_hash)

    # JS handling
    for rel_path, raw_refs in js_refs.items():
        full_path = (root_resolved / rel_path).resolve()
        if not full_path.exists():
            print(f"[process_assets] Missing JS asset: {rel_path}", file=sys.stderr)
            continue
        file_hash = compute_hash(full_path)
        js_hash_to_paths[file_hash].append(str(rel_path).replace(os.sep, "/"))

        if file_hash not in js_hash_order:
            js_hash_order[file_hash] = rel_path
            category = categorize_asset(rel_path, "js")
            js_hash_bundle[file_hash] = category
            if category == "vendor":
                js_vendor_list.append(rel_path)
            else:
                js_app_list.append(rel_path)

        bundle = js_hash_bundle[file_hash]
        target_src = "/assets/js/vendor.js" if bundle == "vendor" else "/assets/js/app.js"
        source_path = str(rel_path).replace(os.sep, "/")
        for original in raw_refs:
            record_alias(alias_map["js"], original, target_src, bundle, source_path, file_hash)

    # Build duplicates report
    for file_hash, paths in css_hash_to_paths.items():
        if len(paths) > 1:
            duplicates_report["css"].append(
                {
                    "hash": file_hash,
                    "canonical": paths[0],
                    "duplicates": paths[1:],
                }
            )
    for file_hash, paths in js_hash_to_paths.items():
        if len(paths) > 1:
            duplicates_report["js"].append(
                {
                    "hash": file_hash,
                    "canonical": paths[0],
                    "duplicates": paths[1:],
                }
            )

    duplicates_report["css"].sort(key=lambda item: item["canonical"])
    duplicates_report["js"].sort(key=lambda item: item["canonical"])

    # Write bundles (binary to preserve content)
    def write_bundle(output_path: Path, items: Iterable[Path]) -> None:
        output_path.parent.mkdir(parents=True, exist_ok=True)
        data = bytearray()
        for index, rel_path in enumerate(items):
            full_path = (root_resolved / rel_path).resolve()
            if not full_path.exists():
                print(f"[process_assets] Skip missing asset for bundle: {rel_path}", file=sys.stderr)
                continue
            content = full_path.read_bytes()
            if index:
                data.extend(b"\n")
            data.extend(content)
        output_path.write_bytes(bytes(data))

    write_bundle(CSS_OUT_DIR / "vendor.css", css_vendor_list)
    write_bundle(CSS_OUT_DIR / "app.css", css_app_list)
    write_bundle(JS_OUT_DIR / "vendor.js", js_vendor_list)
    write_bundle(JS_OUT_DIR / "app.js", js_app_list)

    # Persist reports
    duplicates_path = REPORT_DIR / "duplicates.json"
    alias_map_path = REPORT_DIR / "alias-map.json"
    with duplicates_path.open("w", encoding="utf-8") as handle:
        json.dump(duplicates_report, handle, indent=2, ensure_ascii=False)
    with alias_map_path.open("w", encoding="utf-8") as handle:
        json.dump(alias_map, handle, indent=2, ensure_ascii=False)

    print(f"[process_assets] Wrote {duplicates_path.relative_to(BASE_DIR)}")
    print(f"[process_assets] Wrote {alias_map_path.relative_to(BASE_DIR)}")
    print("[process_assets] CSS vendor files:", len(css_vendor_list))
    print("[process_assets] CSS app files:", len(css_app_list))
    print("[process_assets] JS vendor files:", len(js_vendor_list))
    print("[process_assets] JS app files:", len(js_app_list))


if __name__ == "__main__":
    build_reports_and_bundles()
