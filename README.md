# Tom Fynes — Portfolio & Blog

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen?logo=github)](https://tom-fynes.github.io/)
[![Built with Docusaurus](https://img.shields.io/badge/Built%20with-Docusaurus-3ECC5F?logo=docusaurus&logoColor=white)](https://docusaurus.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v3-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D18.0-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

My personal portfolio site, hosted on GitHub Pages. Built with [Docusaurus](https://docusaurus.io/), [Tailwind CSS](https://tailwindcss.com/), and a few custom components.

The site includes:

- **Blog** — posts on data engineering, SQL, Python, tooling, and occasional experiments with AI agents
- **Courses** — free beginner-friendly guides on SQL, Git, and Python
- **Projects** — write-ups of side projects including a VS Code theme and a SQL query optimiser
- **Resources** — cheat sheets and downloadable learning materials

🌐 **Live site:** [tom-fynes.github.io](https://tom-fynes.github.io/)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Docusaurus v3](https://docusaurus.io/) |
| Styling | [Tailwind CSS v3](https://tailwindcss.com/) + custom CSS |
| Typography | [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Diagrams | [Mermaid](https://mermaid.js.org/) |
| Hosting | [GitHub Pages](https://pages.github.com/) |

---

## Getting Started

**Prerequisites:** Node.js ≥ 18

```bash
# Install dependencies
npm install

# Start local dev server
npm start

# Build for production
npm run build

# Serve the production build locally
npm run serve
```

The dev server runs at `http://localhost:3000` with hot reload enabled.

---

## Project Structure

```
├── blog/           # Blog posts (organised by year)
│   ├── authors.yml # Author profiles
│   └── tags.yml    # Tag definitions
├── docs/           # SQL 101 course content
├── git_101/        # Git 101 course content
├── python_101/     # Python 101 course content
├── projects/       # Project write-ups
├── src/
│   ├── components/ # React components
│   ├── css/        # Global styles
│   └── pages/      # Top-level pages (home, skills, etc.)
├── static/         # Static assets (images, downloads)
└── docusaurus.config.js
```

---

## Contributing

This is a personal portfolio, but if you spot a typo or a broken link feel free to open a PR.

