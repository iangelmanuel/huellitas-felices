# Changelog

Todos los cambios relevantes de este proyecto se documentan en este archivo.

El formato sigue [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/) y las versiones siguen [Semantic Versioning](https://semver.org/lang/es/).

## [Unreleased]

## [0.2.0] — 2026-11-09

Migración a Astro 7 y Tailwind CSS 4, con Node.js 26 (LTS) y dependencias exactas. El sitio mantiene sus páginas, diseño y animaciones.

### Changed

- **Node.js 26.13.0** (LTS) en `engines`, `.nvmrc` y CI; **pnpm 12.18.0** como `packageManager`.
- **Astro 7.4.7** y **@astrojs/react 7.1.4** (antes Astro 4.5.5 y @astrojs/react 3).
- **Tailwind CSS 4.3.5** con `@tailwindcss/vite`. La integración `@astrojs/tailwind` está obsoleta y se retira. La configuración pasa a `src/styles/global.css` (`@theme` para los colores `hf` y `hf-1`, y `@plugin 'tailwindcss-animated'`); se elimina `tailwind.config.mjs`.
- **View transitions**: `<ViewTransitions />` se sustituye por `<ClientRouter />` (`astro/components/ClientRouter.astro`). Los atributos `transition:name` se mantienen.
- **React 19.3.1** (antes React 18.2).
- **Dependencias** a su versión exacta más reciente, incluidos TypeScript 6.0.3, `@astrojs/check` 0.9.12 y `tailwindcss-animated` 2.1.0.
- **Calidad**: ESLint 10.14.0 con `eslint-plugin-astro` y `typescript-eslint`. Scripts `check`, `sync`, `eslint`, `eslint:fix`, `prettier` y `prettier:check`. CI con `check`, `eslint`, `prettier:check` y `build`.
- **Formato**: `.prettierrc` estándar del equipo (sustituye al de comillas simples).

### Fixed

- `tsconfig.json` tenía un `baseUrl` absoluto de otro equipo; se elimina (no hace falta con `paths`).
- `HamburgerContent` no usaba `isOpen`; se quita del desestructurado (la prop sigue en el tipo).
- `@emnapi/core` y `@emnapi/runtime` fijados a `1.11.3` mediante `overrides` en `pnpm-workspace.yaml`.

## [0.0.1]

Versión inicial.
