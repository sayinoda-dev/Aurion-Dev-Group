# Aurion — Web Development Studio

The official website for **Aurion Web Developers Group**, a small team building premium websites, web applications, and digital experiences for businesses.

This is a plain HTML/CSS/JavaScript site — no build step required. The codebase is organized for easy maintenance and AI-assisted development.

---

## Quick Start

Open the site locally with any static file server:

```bash
# Python
python3 -m http.server 8080

# Node (if npx is available)
npx serve .
```

Then visit [http://localhost:8080](http://localhost:8080).

You can also open `index.html` directly in a browser, but a local server is recommended for consistent behavior.

---

## Project Structure

```text
├── index.html              # Page structure and section shells
├── css/
│   ├── variables.css       # Colors, fonts, spacing, design tokens
│   ├── base.css            # Reset, typography, global styles
│   ├── layout.css          # Header, nav, footer, section layout
│   ├── components.css      # Buttons, cards, tags, forms, toast
│   ├── sections.css        # Hero, about, services, projects, etc.
│   └── responsive.css      # Tablet and mobile breakpoints
├── js/
│   ├── main.js             # Initializes all modules
│   ├── render.js           # Renders content from data files
│   ├── navigation.js       # Mobile menu and scroll spy
│   ├── animations.js       # Scroll reveal animations
│   └── contact.js          # Contact form handling
├── data/
│   ├── site.js             # Site config, stats, nav, contact info
│   ├── services.js         # Service cards
│   ├── projects.js         # Portfolio / work items
│   ├── team.js             # Team members
│   └── process.js          # Process steps
└── assets/                 # Images, icons, logos (future use)
```

---

## Where to Edit What

| What you want to change | File |
|---|---|
| Brand colors, fonts, spacing | `css/variables.css` |
| Hero layout or section styling | `css/sections.css` |
| Buttons, cards, forms | `css/components.css` |
| Mobile/tablet layout | `css/responsive.css` |
| Add a service | `data/services.js` |
| Add a project | `data/projects.js` |
| Add a team member | `data/team.js` |
| Edit process steps | `data/process.js` |
| Hero text, about copy, contact emails | `data/site.js` |
| Navigation links | `data/site.js` → `NAV_LINKS` |
| Stats (15+ developers, etc.) | `data/site.js` → `STATS` |
| Mobile menu / nav behavior | `js/navigation.js` |
| Scroll animations | `js/animations.js` |
| Contact form logic | `js/contact.js` |

---

## Adding a New Project

Open `data/projects.js` and add an entry:

```js
{
  category: "05 / BUSINESS",
  title: "Client Name",
  description: "Brief description of the project.",
  tags: ["Web Design", "Frontend"],
}
```

The project card appears automatically in the Work section.

---

## Adding a New Service

Open `data/services.js` and add an entry:

```js
{
  number: "07 / CATEGORY",
  title: "Service Name",
  description: "What this service includes.",
  tags: ["Tag1", "Tag2"],
}
```

---

## Changing Brand Colors

Edit the tokens in `css/variables.css`:

```css
:root {
  --color-accent: #d9ff52;   /* Primary brand color */
  --color-background: #08090c;
  /* ... */
}
```

All components reference these variables, so a single change updates the whole site.

---

## Deployment

This is a static site. Deploy by uploading the project folder to any static host:

- GitHub Pages
- Netlify
- Vercel
- Any web server (Apache, Nginx, etc.)

No build step is needed. Ensure all paths remain relative (they are by default).

---

## Dependencies

- **Google Fonts** — DM Sans and Space Grotesk (loaded via CDN in `css/variables.css`)
- No JavaScript frameworks or build tools

---

## Future React Migration

The site is already organized into clear conceptual sections that map directly to future React components:

- `Navbar` ← `js/navigation.js` + header in `index.html`
- `Hero` ← hero section + `css/sections.css`
- `About` ← about section + `STATS` in `data/site.js`
- `Services` ← `data/services.js`
- `Projects` ← `data/projects.js`
- `Process` ← `data/process.js`
- `Team` ← `data/team.js`
- `Contact` ← `js/contact.js` + contact section
- `Footer` ← footer in `index.html`

Data files can become JSON imports or a CMS later with minimal restructuring.

---

## Git Safety

Before making major changes, create a commit or branch:

```bash
git checkout -b feature/my-change
git add .
git commit -m "Describe your change"
```

This makes it easy to roll back if something breaks.

---

## License

© Aurion Web Developers Group
