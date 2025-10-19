#!/usr/bin/env python3
import json
import re
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
routes_php = BASE_DIR / "srcB" / "app" / "data" / "routes.php"
report_path = BASE_DIR / "srcB" / "reports" / "routes.json"

static_entries = []
dynamic_entries = [
    {
        "pattern": "tin-tuc/{slug}",
        "controller": "App\\\\Controllers\\\\NewsController@detail",
        "supports_html_extension": True,
    },
    {
        "pattern": "su-kien/{slug}",
        "controller": "App\\\\Controllers\\\\NewsController@detail",
        "supports_html_extension": True,
    },
    {
        "pattern": "update/{slug}",
        "controller": "App\\\\Controllers\\\\NewsController@detail",
        "supports_html_extension": True,
    },
    {
        "pattern": "danh-sach-tuong/{slug}",
        "controller": "App\\\\Controllers\\\\CharacterController@detail",
        "supports_html_extension": True,
    },
]

legacy_static = {}
if routes_php.is_file():
    content = routes_php.read_text(encoding="utf-8")
    for match in re.finditer(r"'([^']+)'\s*=>\s*'([^']+)'", content):
        legacy_static[match.group(1)] = match.group(2)

reserved = {"/", "tin-tuc", "su-kien", "update", "danh-sach-tuong"}

static_entries.append({
    "path": "/",
    "controller": "App\\\\Controllers\\\\HomeController@index",
})

for slug, definition in sorted(legacy_static.items()):
    if slug in reserved:
        continue
    static_entries.append({
        "path": slug,
        "controller": "App\\\\Controllers\\\\PageController@show",
        "definition": definition,
    })

report_path.parent.mkdir(parents=True, exist_ok=True)
report = {
    "generated": True,
    "static": static_entries,
    "dynamic": dynamic_entries,
}

report_path.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
print(f"[routes] Wrote {report_path.relative_to(BASE_DIR)}")
