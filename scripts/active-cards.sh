#!/usr/bin/env bash
set -euo pipefail
titles="$(gh api --paginate "repos/$GITHUB_REPOSITORY/milestones?state=all&per_page=100" --jq '.[].title')"
cards="$(printf '%s\n' "$titles" | sed -nE 's/.*\[card:([a-z0-9-]+)\].*/\1/p' | sort -u | jq -Rsc 'split("\n") | map(select(length > 0))')"
printf 'cards=%s\n' "$cards" >> "$GITHUB_OUTPUT"
