#!/usr/bin/env python3
import json
import os
import re
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
DEFINITIONS_DIR = BASE_DIR / "srcB" / "app" / "Views" / "definitions" / "danh-sach-tuong"
CONTENT_DIR = BASE_DIR / "srcB" / "app" / "Views" / "pages" / "danh-sach-tuong"
OUTPUT_DIR = BASE_DIR / "srcB" / "app" / "data" / "characters"

OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

if not DEFINITIONS_DIR.exists():
    print("[characters] Definition directory not found; skipping regeneration.")
    raise SystemExit(0)

index = []

definition_pattern = {
    "slug": re.compile(r"'slug'\s*=>\s*'([^']+)'"),
    "title": re.compile(r"'title'\s*=>\s*'([^']*)'"),
    "body_class": re.compile(r"'body_class'\s*=>\s*'([^']*)'"),
    "nav_active": re.compile(r"'nav_active'\s*=>\s*'([^']*)'"),
    "login_widget_script": re.compile(r"'login_widget_script'\s*=>\s*'([^']*)'"),
    "content": re.compile(r"\$content\s*=\s*'([^']+)';"),
};

for definition_file in sorted(DEFINITIONS_DIR.glob("*.php")):
    definition_text = definition_file.read_text(encoding="utf-8")
    data = {}
    for key, pattern in definition_pattern.items():
        match = pattern.search(definition_text)
        if match:
            data[key] = match.group(1)

    slug_full = data.get("slug", "").strip("/")
    if not slug_full.startswith("danh-sach-tuong/"):
        continue

    slug = slug_full.split("/", 1)[1]
    content_ref = data.get("content", "")
    content_file = (CONTENT_DIR / f"{slug}.php")
    if content_ref:
        ref_candidate = CONTENT_DIR.parent / content_ref.replace("pages/", "")
        if ref_candidate.is_file():
            content_file = ref_candidate

    if not content_file.is_file():
        raise FileNotFoundError(f"Missing character content for {slug}: {content_file}")

    content_html = content_file.read_text(encoding="utf-8")

    entry = {
        "slug": slug,
        "url": slug_full,
        "title": data.get("title", ""),
        "body_class": data.get("body_class", ""),
        "nav_active": data.get("nav_active", "hero"),
        "login_widget_script": data.get("login_widget_script"),
        "content_html": content_html,
    }

    output_path = OUTPUT_DIR / f"{slug}.json"
    with output_path.open("w", encoding="utf-8") as handle:
        json.dump(entry, handle, ensure_ascii=False, indent=2)

    index.append({"slug": slug, "title": entry["title"], "file": output_path.name})

index_path = OUTPUT_DIR / "index.json"
with index_path.open("w", encoding="utf-8") as handle:
    json.dump(index, handle, ensure_ascii=False, indent=2)

print(f"[characters] Exported {len(index)} character entries to {OUTPUT_DIR}")
