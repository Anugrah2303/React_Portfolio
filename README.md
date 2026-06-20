# Portfolio

A personal portfolio site built with React 19, TypeScript, and Vite — engineered around smooth, scroll-driven motion rather than static page loads.

## Highlights

- **Custom animation layer** — Thin, typed wrappers around GSAP (`fade`, `triggerFade`) instead of scattering raw GSAP calls across components. `triggerFade` ties elements to `ScrollTrigger` with configurable start/end/scrub and returns its own cleanup function, so every animation is properly torn down on unmount.
- **Buttery scrolling** — [Lenis](https://github.com/darkroomengineering/lenis) smooth-scroll is wired directly into GSAP's `ScrollTrigger`, so scroll position and animations stay perfectly in sync instead of drifting apart (a common bug when these two libraries are used independently).
- **Preview/Portfolio split** — The app renders a `Preview` (loading/intro) and `Portfolio` (main content) as separate routed concerns, allowing an intro sequence without blocking the rest of the app.
- **Type-safe motion config** — Animation props (direction, distance, duration, stagger, timeline position) are fully typed, so any animation call is validated at compile time, not discovered at runtime.

## Sections

- **Home** — Hero intro
- **About** — Bio, vertical timeline, description card
- **Skills** — Skills grid
- **Project** — Project listing + detailed project view
- **Contact** — Contact form (EmailJS) with toast feedback

Page transitions are handled by a dedicated `transitions/` layer (`ChildTransition`, `SliderTransition`), and a `Slider` layout component coordinates section-to-section movement via React context (`SliderProvider`).

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | React 19 + TypeScript |
| Build tool | Vite 8 |
| Styling | Tailwind CSS 4 |
| Animation | GSAP 3 (+ ScrollTrigger) |
| Smooth scroll | Lenis |
| Routing | React Router 7 |
| Contact form | EmailJS |
| Feedback UI | react-hot-toast |
| Icons | react-icons |

## Project Structure

```
src/
├── animations/      # Reusable, typed GSAP animation utilities
│   ├── fade.ts          # Timeline-aware fade-in, direction + distance configurable
│   └── triggerFade.ts   # Scroll-triggered fade with auto cleanup
├── components/
│   ├── about/            # About section — bio, timeline, intro card
│   ├── common/            # Shared UI primitives — buttons, headings, icons, inputs
│   ├── contact/           # Contact form + contact card
│   ├── home/              # Hero section
│   ├── project/           # Project cards, detail view, mini buttons
│   ├── skills/            # Skills cards/grid
│   └── transitions/       # Page/slide transition components
├── context/         # React context (slider state)
├── data/            # Static content/data source
├── errors/          # 404 / not found page
├── hooks/           # Custom hooks (GSAP headings, scroll-to-top, slider)
├── layouts/         # Header, Footer, Slider shell
├── lib/             # Library setup (gsap, lenis configuration)
├── pages/           # Route-level pages — Home, AboutMe, Skills, Project, Contact
├── routes/          # Top-level views (Preview, Portfolio)
├── types/           # Shared TypeScript types
├── style/           # Global styles
├── App.tsx          # App shell — wires Lenis to ScrollTrigger lifecycle
└── main.tsx         # Entry point
```

## Getting Started

```bash
npm install
npm run dev
```

| Command | Description |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Type-check and build for production |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview the production build locally |

## Why it's built this way

Most portfolio sites either skip animation entirely or hardcode one-off GSAP calls per component. This project treats motion as a small internal API: `fade` and `triggerFade` are reusable, typed, and self-cleaning, which means new sections can adopt consistent motion without re-deriving animation logic — and without leaking GSAP timelines or ScrollTriggers on unmount.