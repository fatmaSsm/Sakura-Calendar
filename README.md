# Sakura Calendar || 🌸

A calm and cozy personal calendar & daily planner with Sakura-inspired Dusk and Night themes.

<p align="center">
  <img src="screenshots/sakura-calendar.gif" width="900">
</p>

---

## Features

- Responsive month and year calendar views
- Multi-year navigation with a live date and clock
- Daily planning with notes and time blocks
- Colored date markers
- Freehand drawing with customizable brush colors and sizes
- Eraser tool for calendar drawings
- Draggable and removable lifestyle stickers
- Auto-saved Quick Notes
- Daily motivational quotes and Daily Care reminders
- Focus mode
- Dusk and Night themes with falling sakura petals
- Persistent browser storage with `localStorage`
- JSON backup export and import
- No frameworks, build tools, accounts, backend, CDN, or database required

---

## 🔒 Privacy & Data Storage

Sakura Calendar stores your calendar data locally in your browser using `localStorage`.

```text
Sakura Calendar
      ↓
Browser localStorage
      ↓
Your device
```

Your notes, plans, drawings, markers, stickers, and settings are not sent to a server or shared with other visitors.

Storage is specific to each browser, device, and site origin. This means your calendar does not automatically sync between browsers or devices.

To transfer or protect your data, use **Settings → Export backup** and **Import backup**.

> **Important:** Clearing your browser's site data may remove your calendar data. Export a backup periodically if you want to keep important plans safe.

---

## Getting Started

### 🌸 Option 1 — Open directly

1. Download or clone the repository.
2. Open the project folder.
3. Double-click `index.html`.

Sakura Calendar will open directly in your browser.

### 🖥️ Option 2 — Run with a local server

For local development, start a simple HTTP server:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080` in your browser.

Alternatively, you can use the VS Code **Live Server** extension.

### 🌐 Option 3 — GitHub Pages

Try Sakura Calendar directly in your browser:

**[Open Sakura Calendar 🌸](https://fatmassm.github.io/Sakura-Calendar/)**

> Data is stored separately for each site origin. Calendar data created by opening `index.html` directly will not automatically appear in the GitHub Pages version.

---

## Project Structure 

```text
Sakura-Calendar/
├─ index.html
├─ styles.css
├─ app.js
├─ README.md
├─ TESTING.md
├─ assets/
│  ├─ bg-dusk.webp
│  ├─ bg-night.webp
│  └─ favicon.png
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
