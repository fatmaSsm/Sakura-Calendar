# Sakura Calendar || 🌸

A calm and cozy personal calendar & daily planner with Sakura-inspired Dusk and Night themes.

<p align="center">
  <img src="screenshots/sakura-calendar.gif" width="900">
</p>

## Features

- Responsive month and year calendar views
- Multi-year navigation and a live date/clock
- Daily notes and time blocks
- Colored date markers
- Freehand drawing, eraser, brush colors and sizes
- Draggable and removable lifestyle stickers
- Quick Notes with auto-save
- Daily motivational quotes and Daily Care reminders
- Focus mode
- Dusk / Night backgrounds and falling sakura petals
- Persistent browser storage with `localStorage`
- JSON backup export and import
- No framework, build process, account, backend, CDN, or database required

## Privacy

Sakura Calendar stores your calendar data locally in your browser using `localStorage`.

Each visitor has their own private calendar data. Notes, plans, drawings, markers, stickers, and settings are not shared with other users and are not stored in the GitHub repository.

Sakura Calendar does not send your calendar data to a server.

For important plans, use **Settings → Export backup** occasionally. Clearing browser site data may remove your locally stored calendar data.

## Browser storage

Calendar data is stored separately for each browser and device.

```text
Chrome
   └── its own localStorage

Firefox
   └── its own localStorage

Another device
   └── its own localStorage
```

This means your calendar data does not automatically sync between browsers or devices.

To move your calendar data, use **Settings → Export backup** and **Import backup**.

## Getting Started

Sakura Calendar runs entirely in your browser — no installation or backend is required.

### 🌸 Option 1 — Open directly

The easiest way to use Sakura Calendar:

1. Download or clone the repository.
2. Open the project folder.
3. Double-click `index.html`.

That's it! Sakura Calendar will open directly in your browser.

### 🖥️ Option 2 — Run with a local server

For a stable local development environment, you can run Sakura Calendar using Python:

```bash
python -m http.server 8080
```

Then open:

`http://localhost:8080`

You can also use the VS Code **Live Server** extension if you prefer.

### 🌐 Option 3 — GitHub Pages

Try Sakura Calendar directly in your browser:

**[Open Sakura Calendar 🌸](https://fatmassm.github.io/Sakura-Calendar/)**

> Your calendar data is stored locally in your browser using `localStorage`. Different URLs or browser profiles have separate storage, so data created by opening `index.html` directly will not automatically appear on the GitHub Pages version.

## Project structure

```text
Sakura_Calendar/
├─ index.html
├─ styles.css
├─ app.js
├─ README.md
├─ TESTING.md
└─ assets/
   ├─ bg-dusk.webp
   ├─ bg-night.webp
   ├─ favicon.png
   └─ favicon_1.png
└─ screenshots/
   └─ sakura-calendar.gif
```
---

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Browser `localStorage`

--- 

## 📬 Contact 

Fatma Susam 

[![GitHub](https://img.shields.io/badge/GitHub-fatmaSsm-181717?style=for-the-badge&logo=github)](https://github.com/fatmaSsm)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/fatma-susam/)

---
