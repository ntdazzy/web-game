#!/usr/bin/env python3
"""
Scan the project to detect unused assets and remaining hardcoded domains.

Outputs:
  __reports__/unused-assets.json
  __reports__/unused-php-js-css.json
  __reports__/hardcoded-domain-found.json
"""

from __future__ import annotations

import json
import os
import re
from pathlib import Path
from typing import Dict, List, Tuple
from urllib.parse import quote


BASE_DIR = Path(__file__).resolve().parent.parent
SRCB_DIR = BASE_DIR / "srcB"
PUBLIC_DIR = SRCB_DIR / "public"

TEXT_EXTS = {
    ".php",
    ".js",
    ".css",
    ".html",
    ".htm",
    ".json",
    ".txt",
    ".md",
    ".xml",
    ".ini",
}

ASSET_MEDIA_EXTS = {
    ".png",
    ".jpg",
    ".jpeg",
    ".gif",
    ".webp",
    ".svg",
    ".ico",
    ".bmp",
    ".mp3",
    ".mp4",
    ".wav",
    ".ogg",
    ".webm",
    ".mov",
    ".ttf",
    ".otf",
    ".woff",
    ".woff2",
    ".eot",
    ".mpg",
    ".mpeg",
}

JS_CSS_EXTS = {".js", ".css"}


def collect_text_corpus() -> Dict[Path, str]:
    corpus: Dict[Path, str] = {}
    for path in SRCB_DIR.rglob("*"):
        if not path.is_file():
            continue
        try:
            rel = path.relative_to(SRCB_DIR)
        except ValueError:
            continue
        if "hts-cache" in rel.parts:
            continue

        if path.suffix.lower() not in TEXT_EXTS:
            continue
        if "vendor" in path.parts or "node_modules" in path.parts:
            continue

        try:
            text = path.read_text(encoding="utf-8")
        except UnicodeDecodeError:
            text = path.read_text(encoding="latin-1", errors="ignore")

        corpus[path] = text
    return corpus


def collect_assets() -> List[Tuple[Path, Path]]:
    assets: List[Tuple[Path, Path]] = []
    for path in PUBLIC_DIR.rglob("*"):
        if not path.is_file():
            continue
        rel = path.relative_to(PUBLIC_DIR)
        if rel.parts[0] in {"hts-cache"}:
            continue
        if path.suffix.lower() in {".php", ".htaccess"}:
            continue
        assets.append((rel, path))
    return assets


def referenced_patterns(rel: Path) -> List[str]:
    rel_posix = rel.as_posix()
    rel_encoded = quote(rel_posix, safe="/")
    patterns = {
        rel_posix,
        "/" + rel_posix,
        "../" + rel_posix,
        "./" + rel_posix,
    }
    # Additional heuristic for assets referenced via ../../public/...
    patterns.add("public/" + rel_posix)
    if rel_encoded != rel_posix:
        patterns.update({
            rel_encoded,
            "/" + rel_encoded,
            "../" + rel_encoded,
            "./" + rel_encoded,
        })
    return list(patterns)


def find_references(corpus: Dict[Path, str], rel: Path) -> List[str]:
    patterns = referenced_patterns(rel)
    matches: List[str] = []
    for file_path, content in corpus.items():
        if any(pattern in content for pattern in patterns):
            matches.append(str(file_path.relative_to(SRCB_DIR)))
    return matches


def scan_hardcoded_domains(corpus: Dict[Path, str]) -> List[Dict[str, object]]:
    pattern = re.compile(r"https?://haitacmanhnhat\.vn", re.IGNORECASE)
    results: List[Dict[str, object]] = []
    for file_path, content in corpus.items():
        lines = content.splitlines()
        hits = []
        for idx, line in enumerate(lines, start=1):
            if pattern.search(line):
                hits.append({"line": idx, "content": line.strip()})
        if hits:
            results.append({
                "file": str(file_path.relative_to(SRCB_DIR)),
                "occurrences": hits,
            })
    return results


def main() -> None:
    corpus = collect_text_corpus()
    assets = collect_assets()

    unused_assets: List[Dict[str, object]] = []
    unused_js_css: List[Dict[str, object]] = []

    for rel, full_path in assets:
        references = find_references(corpus, rel)
        record = {
            "path": "/" + rel.as_posix(),
            "size": full_path.stat().st_size,
            "references": references,
        }
        ext = rel.suffix.lower()
        if ext in ASSET_MEDIA_EXTS and not references:
            unused_assets.append(record)
        elif ext in JS_CSS_EXTS and not references:
            unused_js_css.append(record)

    reports_dir = BASE_DIR / "__reports__"
    reports_dir.mkdir(parents=True, exist_ok=True)

    (reports_dir / "unused-assets.json").write_text(
        json.dumps(unused_assets, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )
    (reports_dir / "unused-php-js-css.json").write_text(
        json.dumps(unused_js_css, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )

    hardcoded = scan_hardcoded_domains(corpus)
    (reports_dir / "hardcoded-domain-found.json").write_text(
        json.dumps(hardcoded, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )


if __name__ == "__main__":
    main()
