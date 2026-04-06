# Aufm Schäferhof — aufmschaeferhof.de

## Tech Stack
- Next.js 16 + React 19 + TypeScript + Tailwind CSS 4 + Framer Motion
- Static Export (output: 'export') → deployed via FTP to BioHost

## Testing
- **Playwright:** 80 Smoke Tests across 4 browsers (Desktop Chrome, Mobile Chrome, Mobile Safari, Desktop Safari)
- **Lighthouse CI:** Performance/A11y/SEO/Best-Practices with score thresholds
- **Pre-push hook:** Tests run automatically before every `git push` (husky)
- **CI:** GitHub Actions runs tests before deploy — deploy only on green

### Commands
- `npm test` — run all Playwright tests
- `npm run test:ui` — visual test dashboard
- `npm run test:lighthouse` — Lighthouse audit

### Adding tests
- Tests live in `tests/smoke.spec.ts`
- Update `routes` array when adding new pages
- Update `sections` array when adding new homepage sections

## Deploy
- **Live:** BioHost via FTP (auto on push to main, after tests pass)
- **Preview:** GitHub Pages (manual trigger)
- SMTP password injected during build via GitHub Secret

## Contact Form
- PHPMailer + SMTP (mail.biohost.de:587)
- Honeypot spam protection
- Rate limiting + origin check
