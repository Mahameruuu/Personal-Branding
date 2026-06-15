# Personal Portfolio — Data Scientist | AI Engineer

A modern, premium personal-branding website. Built as a **static frontend
foundation** (no backend, no database, no CMS) that is ready to be filled with
real content in the next phase.

## Tech Stack

| Concern        | Choice                          |
| -------------- | ------------------------------- |
| Framework      | Next.js 15 (App Router)         |
| Language       | TypeScript (strict)             |
| Styling        | Tailwind CSS v4                 |
| UI primitives  | shadcn/ui (new-york) + Radix    |
| Icons          | lucide-react                    |
| i18n           | next-intl (EN / ID)             |
| Theming        | next-themes (light/dark/system) |
| Animation      | Framer Motion (restrained)      |
| Fonts          | Inter (via `next/font`)         |

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000  → redirects to /en
```

Other scripts:

```bash
npm run build      # production build (statically prerenders /en and /id)
npm run start      # serve the production build
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
```

## Architecture

```
messages/                 # ALL copy lives here — never hardcode text
  en.json
  id.json
src/
  app/
    [locale]/
      layout.tsx          # html/body, fonts, providers, navbar+footer, metadata
      page.tsx            # composes the homepage sections
      not-found.tsx       # localized 404
    not-found.tsx         # root fallback 404
    globals.css           # design tokens (oklch), light/dark, utilities
  components/
    layout/               # navbar, footer
    sections/             # hero, about, experience, skills, projects, research, contact
    shared/               # container, section, reveal, stagger, coming-soon
    ui/                   # shadcn primitives (button, badge, card, dropdown-menu)
    theme-provider.tsx
    theme-toggle.tsx
    language-switcher.tsx
  hooks/                  # use-active-section (scroll-spy), use-mounted
  i18n/                   # routing, navigation, request config
  lib/                    # utils, motion variants, navigation, site-config, data/
  types/                  # shared TypeScript types
  middleware.ts           # locale negotiation + redirects
```

### Key principles

- **No hardcoded text.** Every visible string is a key in `messages/*.json`.
- **Single sources of truth.** Nav items: `src/lib/navigation.ts`. Non-localized
  data (email, social URLs): `src/lib/site-config.ts`. Section data:
  `src/lib/data/`.
- **Reusable, content-ready components.** Sections render polished placeholders
  ("Coming soon") today; swap in real content without touching layout.
- **Mobile-first & responsive** across mobile → ultrawide.
- **Accessible:** skip link, semantic landmarks, focus states, `prefers-reduced-motion`.

## Filling in content (phase 2)

| What            | Where                                                            |
| --------------- | --------------------------------------------------------------- |
| Name, title, bio, all copy | `messages/en.json` + `messages/id.json`              |
| Email & socials | `src/lib/site-config.ts`                                        |
| Experience      | `messages/*.json → experience.items` (+ `src/components/sections/experience.tsx`) |
| Skill categories| `src/lib/data/skills.ts` (+ `skills.categories` copy)           |
| Projects        | Replace placeholders in `src/components/sections/projects.tsx` with real `ProjectCard` props |
| Research        | `messages/*.json → research.types`                              |

## Customizing the design

Design tokens are CSS variables in `src/app/globals.css` (`:root` and `.dark`),
authored in `oklch`. Adjust there to retheme the whole site at once.
