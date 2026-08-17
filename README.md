# UI Theme Selection Assignment - Tailwind CSS

This version uses **Tailwind CSS** with Vite.

## Requirements implemented

- SettingsContext using React Context + useContext
- theme: "light" / "dark"
- language: "en" / "th"
- setTheme(theme)
- setLanguage(language)
- resetSettings()
- Load settings from localStorage key: app-settings
- Save settings with JSON.stringify()
- Default: light + en
- SettingsPanel
- Header
- PreviewCard
- Whole UI updates instantly
- Settings remain after refresh
- Tailwind CSS styling

## Run locally

```bash
npm install
npm run dev
```

Open the exact URL shown by Vite, normally:

```text
http://localhost:5173/ui-theme-selection/
```

## GitHub Pages

Create a repository named:

```text
ui-theme-selection
```

Then deploy:

```bash
npm run deploy
```

Use GitHub Pages:
- Source: Deploy from a branch
- Branch: gh-pages
- Folder: / (root)

Expected page:

```text
https://YOUR-USERNAME.github.io/ui-theme-selection/
```
