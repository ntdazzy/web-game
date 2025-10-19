#!/usr/bin/env python3
"""
Deduplicate CSS/JS assets under srcB/public/st-ms and update references.

Actions:
    * Compute SHA256 for every *.css / *.js file under public/st-ms.
    * Remove duplicate files, keeping the first instance encountered.
    * Update references inside srcB (PHP/JS/CSS/HTML/JSON) to point to the
      surviving canonical file.
    * Write reports:
        - reports/duplicates-cleanup.json : details of merged assets.
        - reports/refactor-summary.json  : high level summary.
"""

from __future__ import annotations

import hashlib
import json
import os
from dataclasses import dataclass, asdict
from datetime import datetime, timezone
from pathlib import Path
from typing import Dict, Iterable, List, Sequence, Tuple


BASE_DIR = Path(__file__).resolve().parent.parent
SRCB_DIR = BASE_DIR / "srcB"
ST_MS_DIR = SRCB_DIR / "public" / "st-ms"
REPORTS_DIR = SRCB_DIR / "reports"

TEXT_EXTENSIONS = {
    ".php",
    ".js",
    ".css",
    ".html",
    ".htm",
    ".json",
    ".txt",
    ".md",
}


@dataclass
class DuplicateEntry:
    hash: str
    canonical: str
    removed: List[str]


def iter_asset_files(root: Path) -> Iterable[Path]:
    for path in root.rglob("*"):
        if not path.is_file():
            continue
        if path.suffix.lower() not in {".css", ".js"}:
            continue
        yield path


def sha256(path: Path) -> str:
    h = hashlib.sha256()
    with path.open("rb") as handle:
        for chunk in iter(lambda: handle.read(1024 * 1024), b""):
            h.update(chunk)
    return h.hexdigest()


def update_references(
    files: Sequence[Path],
    replacements: Dict[str, str],
) -> Dict[str, int]:
    stats: Dict[str, int] = {}
    for file_path in files:
        if file_path.suffix.lower() not in TEXT_EXTENSIONS:
            continue
        try:
            text = file_path.read_text(encoding="utf-8")
        except UnicodeDecodeError:
            continue

        original = text
        for old, new in replacements.items():
            text = text.replace(old, new)

        if text != original:
            file_path.write_text(text, encoding="utf-8")
            stats[str(file_path.relative_to(SRCB_DIR))] = stats.get(
                str(file_path.relative_to(SRCB_DIR)), 0
            ) + 1
    return stats


def main() -> None:
    if not ST_MS_DIR.exists():
        raise SystemExit(f"Cannot locate st-ms directory at {ST_MS_DIR}")

    hash_to_canonical: Dict[str, Path] = {}
    duplicates_by_hash: Dict[str, List[Path]] = {}

    for asset_path in iter_asset_files(ST_MS_DIR):
        file_hash = sha256(asset_path)
        if file_hash not in hash_to_canonical:
            hash_to_canonical[file_hash] = asset_path
            duplicates_by_hash.setdefault(file_hash, [])
        else:
            duplicates_by_hash.setdefault(file_hash, []).append(asset_path)

    duplicate_entries: List[DuplicateEntry] = []
    replacements: Dict[str, str] = {}

    for file_hash, dup_list in duplicates_by_hash.items():
        if not dup_list:
            continue
        canonical_path = hash_to_canonical[file_hash]
        canonical_rel = canonical_path.relative_to(ST_MS_DIR).as_posix()
        removed_rel_paths = []

        for duplicate_path in dup_list:
            duplicate_rel = duplicate_path.relative_to(ST_MS_DIR).as_posix()
            removed_rel_paths.append(duplicate_rel)

            try:
                duplicate_path.unlink()
            except FileNotFoundError:
                pass

            replacements[f"/st-ms/{duplicate_rel}"] = f"/st-ms/{canonical_rel}"
            replacements[f"st-ms/{duplicate_rel}"] = f"st-ms/{canonical_rel}"

        duplicate_entries.append(
            DuplicateEntry(
                hash=file_hash,
                canonical=f"/st-ms/{canonical_rel}",
                removed=[f"/st-ms/{rel}" for rel in removed_rel_paths],
            )
        )

    # Update references across srcB to use canonical paths.
    target_files = [
        path
        for path in SRCB_DIR.rglob("*")
        if path.is_file() and ".git" not in path.parts
    ]
    reference_stats = update_references(target_files, replacements)

    REPORTS_DIR.mkdir(parents=True, exist_ok=True)

    cleanup_report_path = REPORTS_DIR / "duplicates-cleanup.json"
    cleanup_report = {
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "deduplicated": [asdict(entry) for entry in duplicate_entries],
        "reference_updates": reference_stats,
    }
    cleanup_report_path.write_text(
        json.dumps(cleanup_report, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )

    # Produce high-level summary
    refactor_summary_path = REPORTS_DIR / "refactor-summary.json"
    partials_new = [
        str(path.relative_to(SRCB_DIR))
        for path in sorted(
            (SRCB_DIR / "app" / "Views" / "partials").glob("*.php"),
            key=lambda p: p.name,
        )
        if path.name
        in {
            "analytics-head.php",
            "analytics-inline.php",
            "global-config-script.php",
            "gtm-noscript.php",
            "menu-fixed.php",
            "page-slider.php",
            "top-nav-mobile.php",
        }
    ]
    views_refactored = [
        "app/Views/pages/tin-tuc.php",
        "app/Views/pages/su-kien.php",
        "app/Views/pages/update.php",
        "app/Views/pages/news/detail.php",
        "app/Views/pages/events/detail.php",
        "app/Views/pages/updates/detail.php",
        "app/Views/pages/trai-ac-quy.php",
        "app/Views/pages/trai-dung-hop.php",
    ]
    summary = {
        "generated_at": cleanup_report["generated_at"],
        "partials": partials_new,
        "views_refactored": views_refactored,
        "duplicates_removed": len(duplicate_entries),
    }
    refactor_summary_path.write_text(
        json.dumps(summary, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )


if __name__ == "__main__":
    main()
