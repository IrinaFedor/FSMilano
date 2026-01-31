# Figure Skating — Milano Cortina 2026

A public information website about figure skaters and the figure skating program at the **Olympic Winter Games Milano Cortina 2026** (February 6–22, 2026).

## What’s included

- **Home** — Description of the site and links to all sections
- **Participants by discipline** — Men’s, Women’s, Pairs, Ice Dance, Team Event with links to ISU bios
- **Schedule** — Competition dates and times (Milano CET) with timezone conversion
- **Athletes** — Notable athletes and countries
- **Participants by country** — Full list of participants
- **Starting orders** — Short program and rhythm dance starting orders (Women, Men, Pairs, Ice Dance) with links to ISU bios

All content is based on publicly available information. Rosters and schedule are subject to official qualification and updates.

## How to run locally

1. Open the project folder in your editor.
2. Open `index.html` in a browser (double-click or “Open with” your browser), or use a simple local server:
   - **Python**: `python3 -m http.server 8000` then visit `http://localhost:8000`
   - **Node**: `npx serve` then visit the URL shown

No build step or dependencies required.

## Files

- `index.html` — Home page with site description and links
- `participants-by-discipline.html` — Participants by discipline (Men’s, Women’s, Pairs, Ice Dance, Team Event)
- `schedule.html` — Competition schedule with timezone conversion
- `athletes.html` — Notable athletes
- `participants.html` — Participants by country
- `starting-order-*.html` — Starting orders for short program and rhythm dance
- `styles.css` — Layout and winter/ice theme
- `docs/thesportsdb-api-test.md` — TheSportsDB API test notes

## Hosting on GitHub Pages

This site can be hosted for free on [GitHub Pages](https://pages.github.com/):

1. Create a new repository on GitHub (e.g. `milano-cortina-2026-figure-skating`).
2. Push this project to the repo (see “Publishing to GitHub” below).
3. In the repo: **Settings → Pages** → Source: **Deploy from a branch** → Branch: **main** (or **master**), folder: **/ (root)** → Save.
4. Your site will be at `https://<your-username>.github.io/<repo-name>/`.

Use **relative links** in your HTML (e.g. `schedule.html`); they already are, so the site works both locally and on GitHub Pages.

## Publishing to GitHub

If you haven’t initialized Git yet:

```bash
cd "/Users/irina.fedorchuk/Documents/Cursor Web Project"
git init
git add .
git commit -m "Initial commit: Milano Cortina 2026 figure skating site"
```

Then create the repository on GitHub (via the website), add it as remote, and push:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your GitHub username and repository name.

## Disclaimer

This site is not affiliated with the International Olympic Committee (IOC) or Milano Cortina 2026. For official schedule and results, see [olympics.com/milano-cortina-2026](https://www.olympics.com/en/milano-cortina-2026).
