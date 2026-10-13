# QA Report — Portfolio website

**Release status: PREVIEW_ONLY / needs visual QA and approval.**

| Check | Result | Evidence |
|---|---|---|
| Source files created in separate GitHub branch | PASS | `docs/index.html`, `docs/styles.css`, `docs/app.js`, `docs/favicon.svg` |
| Preservation of profile README | PASS | No README replacement in this change |
| Security-oriented source review | PASS (static review) | No stored tokens, backend calls, HTML from user inputs or forms |
| Accessibility source checklist | PARTIAL | Skip link, landmarks, focus states, reduced motion, ARIA toggles implemented |
| Desktop/mobile screenshot review | BLOCKED | Browser execution not available in this GitHub-only editing flow |
| Browser console error audit | BLOCKED | No browser was run |
| Cross-browser rendering | BLOCKED | No browser was run |
| Lighthouse / axe audits | BLOCKED | Not executed |
| Deployment to GitHub Pages | NOT STARTED | Requires PR merge and repository Pages configuration |
| Final design sign-off | NEEDS APPROVAL | Forest Editorial selected as working direction |

## Acceptance checklist for reviewer

1. Serve `docs/` with a static web server.
2. Verify viewport sizes 390×844 and 1440×900, no horizontal overflow.
3. Check all navigation anchors, mobile menu open/close and project filter buttons.
4. Check working external links and missing resource errors.
5. Check keyboard focus and screen-reader labels.
6. Use reduced-motion OS setting and verify animation is disabled.
7. Capture both home and selected-work screens as visual baselines.
8. Check live Pages URL only after publishing.

This report does **not** assert an unrun build, test, or deployment.
