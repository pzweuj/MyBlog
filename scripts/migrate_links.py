"""
Update internal post links from the old slug format (/posts/<slug>)
to the new dated slug format (/posts/<YYYY-MM-DD-<slug>>).

Usage:
  python scripts/migrate_links.py
"""

from __future__ import annotations

import re
from pathlib import Path
from typing import Dict

ROOT = Path(__file__).resolve().parents[1]
POSTS_DIR = ROOT / "content" / "posts"
CONTENT_DIR = ROOT / "content"


def build_slug_map() -> Dict[str, str]:
    """Return mapping of legacy slug -> dated slug derived from filenames."""
    slug_map: Dict[str, str] = {}
    pattern = re.compile(r"^(\d{4}-\d{2}-\d{2})-(.+)\.md$")

    for md_file in POSTS_DIR.glob("*.md"):
        match = pattern.match(md_file.name)
        if not match:
            continue
        date, slug = match.groups()
        slug_map[slug] = f"{date}-{slug}"

    return slug_map


def rewrite_links(text: str, slug_map: Dict[str, str]) -> str:
    """Rewrite /posts/<slug> to /posts/<dated-slug>."""
    def replace(match: re.Match[str]) -> str:
        prefix = match.group(1)
        old_slug = match.group(2)
        new_slug = slug_map.get(old_slug)
        return f"{prefix}{new_slug}" if new_slug else match.group(0)

    pattern = re.compile(r"(?P<prefix>/posts/)(?P<slug>[A-Za-z0-9._-]+)(?=[/#\s)\"'`]|$)")
    return pattern.sub(replace, text)


def process_markdown_files(slug_map: Dict[str, str]) -> None:
    changed_files = []

    for md_file in CONTENT_DIR.rglob("*.md"):
        original = md_file.read_text(encoding="utf-8")
        updated = rewrite_links(original, slug_map)
        if updated != original:
            md_file.write_text(updated, encoding="utf-8")
            changed_files.append(md_file.relative_to(ROOT))

    print(f"Updated {len(changed_files)} file(s).")
    for path in changed_files:
        print(f"  - {path}")


def main() -> None:
    slug_map = build_slug_map()
    if not slug_map:
        print("No posts found; nothing to update.")
        return

    print("Slug map:")
    for old, new in slug_map.items():
        print(f"  {old} -> {new}")

    process_markdown_files(slug_map)


if __name__ == "__main__":
    main()
