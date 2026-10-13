# Maha Mirmohammadi — Portfolio Website

A personal, English-language portfolio built with RISHEH Prototype Factory principles. This website is distinct from the GitHub profile README, which remains intact.

## Preview locally

```bash
cd docs
python3 -m http.server 8080
# open http://localhost:8080
```

No build dependencies, accounts, secrets, or API services are required.

## Publishing with GitHub Pages

After approving and merging the PR, open **Settings → Pages**, select **Deploy from a branch**, choose `main` and **/docs**, then save. Verify the address reported by GitHub Pages. No deployment is performed by this PR.

## Product journeys

1. Visitor lands on editorial hero, understands role and positioning, and explores selected work.
2. Visitor filters project categories, reads accurate summaries, and can open public source links.
3. Visitor reviews expertise and experience, then navigates to GitHub or Risheh website.

## Design directions considered

- **Forest Editorial (selected):** warm-white canvas, rich forest green, architectural graphic, editorial typography
- Midnight Operations: high-contrast dark system / technical terminal cues
- Warm Atelier: tactile typography and warmer creative studio character

Selected Forest Editorial because it aligns with Maha's personal style and Risheh identity. Selection is a design assumption, pending visual approval.

## Structure

- `docs/index.html`: semantic document and sections
- `docs/styles.css`: responsive tokens and layouts
- `docs/app.js`: typed effect, navigation and filtering
- `docs/favicon.svg`: original lettermark

## Content policy

Claims use supplied career history and available project context. 4 years and 60+ engagements are user-supplied. No invented revenue, customer outcomes, calendar dates, technologies beyond documented skills, or fake case-study screenshots. Private projects do not link to inaccessible repositories. No form silently collects user data.

## Accessibility and operations

Semantic sections, skip link, visible focus, mobile menu aria-expanded, filter aria-pressed, reduced motion support, descriptive SVG accessible name, external links with rel noopener noreferrer.

Google Fonts are used as optional web fonts with local fallbacks. If blocked, the site remains usable. No third-party analytics.

## Limitations

Portfolio is static and editorial; case-study deep dives and documented KPIs can follow once verified. Contact links route to real public destinations instead of claiming an email address. Browser screenshots, visual baseline approval, and deployment checks are still pending.
