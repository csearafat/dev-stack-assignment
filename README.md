# Dev Stack — Build Your Ideal Development Stack

Dev Stack is a browser-based tool for developers who are choosing technologies for
their next project. It lists frontend, backend, database, language, styling, and
DevOps options side by side so you can compare them and assemble a personal stack
before you write a single line of code.

## Built with

- **React** (Vite) for the component-driven UI
- **Tailwind CSS v4** for styling, with a single shared gradient token that themes
  the brand name, hero heading, and primary buttons
- **React-Toastify** for add/remove/duplicate notifications
- **JSON** as the technology data source, loaded at runtime with `fetch`

## Features

1. **Curated technology catalog** — fifteen technologies across seven categories
   (Frontend, Backend, Database, Language, Styling, DevOps, Tools), each with a
   rating, difficulty level, and badge, rendered from a local JSON file rather
   than hardcoded data.
2. **Live stack builder** — add technologies to "Your Stack" with one click,
   remove individual items or clear everything at once, with duplicate-add
   protection and toast feedback for every action.
3. **Fully responsive layout** — a sticky navbar that collapses into a hamburger
   menu on mobile, and a technology grid that reflows from one column on phones
   to three on desktop.

## Getting started

```bash
npm install
npm run dev
```

## Project structure

```
src/
  components/   Navbar, Hero, TechnologyCard, TechnologiesSection, YourStack, Footer
  App.jsx        App state: fetches data, manages the stack, wires up toasts
public/
  data/technologies.json   Technology dataset
```
