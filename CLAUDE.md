# CLAUDE.md

Guidance to Claude Code (claude.ai/code) for this repo.

## Project Overview

Single-page FIDE chess rating calculator at `chess-elo-rating.vercel.app`. Entire app = single `index.html`. No build, no deps, no framework — vanilla HTML, CSS, JS.

## Development

Open `index.html` in browser. No build, no bundler, no package manager, no tests.

## Architecture

Everything in `index.html`:

- **CSS** — inline `<style>` block, CSS custom properties for theming (light/dark via `prefers-color-scheme`)
- **State** — single `state` object `{ myRating, type, k, games[] }`
- **Core logic** — `calculateExpected(ra, rb, type)` implements FIDE Elo formula with 400-point cap (disabled for Classical players rated 2650+)
- **Rendering** — `render()` single update function, called on every state change; re-renders game list, updates hero card
- **Analytics** — Google Analytics (gtag) fires on `addGame` and when elite 2650+ Classical mode active

## FIDE Business Rules

- K-factor options: 40 (new players), 20 (default), 10 (established)
- Time controls: Classical, Rapid, Blitz
- 400-point cap applies except Classical players rated ≥ 2650 (2026 FIDE regulation)
- Expected score formula: `1 / (1 + 10^(diff/400))`