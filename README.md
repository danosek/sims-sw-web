# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:9210`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `./replace_svg.sh`        | Replace Lucide icons stroke to CSS variable      |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## SIMS SW

### Ikony

Používá se sada [Lucide](https://lucide.dev). V projektu jsou jsou tři složky

- `lucide-origin`: Originální sada, SVG dědí barvu
- `lucide`: Barva se nastavuje pomocí CSS proměnné `--varIconColor`
- `lucide-white`: Barva je bílá, nepoužívá se nikde, ale kdyby náhodou…

Kdyby bylo potřeba balík Lucide updatovat, stačí jej nakopírovat do složky `lucide-origin` a spustit `./replace_svg.sh`, který vytvoří složky `lucide` a `lucide-white` s potřebnými úpravami v `.svg` souborech.

### Styly `spectro-theme-[*].css`

Jedná se design systém [Spectro](https://teaf.tescosw.cz/mw/design/system/tokens/), který jsem vytvořil. CSS se generuje se v nástroji [Motivo](https://teaf.tescosw.cz/mw/design/tool/motivo/), jehož jsem taky autorem. Lze si navolit branding, tzv. primární a sekundární barvu. Používá se jak pro globální téma, tak pro témata jednotlivých produktů. Nastavení daného tématu jde vidět přímo na začátku CSS souboru, např.

```css
/*
    
Version
-------
Spectro: 1.2
TEAF:    24.01, 24.02

Selected options
----------------
Brand
Primary:   Blue
Secondary: Teal

Neutral Surfaces Chroma
Intensity: III
Based on:  Blue

Contrast
Level: High (AA)

*/
```

Jak používat jednotivé tokeny a barvy je pospáno v dokumentaci [Spectra](https://teaf.tescosw.cz/mw/design/system/tokens/).
