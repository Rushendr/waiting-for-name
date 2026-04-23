# Design Brief

**Category**: Productivity Tool (Invoice Management) | **Aesthetic**: Minimal Business/Editorial (SaaS-grade)

## Tone & Differentiation

Refined restraint. Zero decoration. Professional trust through typography, scale, and spatial hierarchy. Single unified sans-serif system. Information density over visual noise.

## Color Palette

| Role | OKLCH | Purpose |
|------|-------|---------|
| Background | `0.98 0 0` | Light, clean workspace |
| Foreground | `0.12 0.02 280` | Deep charcoal, professional text |
| Card | `1.0 0 0` | Elevated surfaces, containers |
| Primary | `0.38 0.12 260` | Deep slate-blue, CTAs, highlights |
| Accent | `0.68 0.15 60` | Warm amber, secondary emphasis |
| Destructive | `0.55 0.22 25` | Alert red, destructive actions |
| Border | `0.92 0.01 0` | Subtle dividers, subtle structure |
| Muted | `0.92 0.01 0` | Secondary backgrounds, disabled states |

Dark mode: L values shifted (~0.13–0.92 range), hue preserved, saturation maintained for readability. Charcoal backgrounds (`L:0.13`), white-near text (`L:0.92`).

## Typography

| Tier | Font | Size | Weight | Usage |
|------|------|------|--------|-------|
| Display | DM Sans | 24–32px | 600 | Page titles, section heads |
| Body | DM Sans | 14–16px | 400 | Form labels, body text |
| Code/Mono | Geist Mono | 12–13px | 400 | Data, amounts, code blocks |

Single font family (DM Sans) ensures cohesion. Hierarchy via size and weight, not typeface switching.

## Structural Zones

| Zone | Background | Border | Shadow | Purpose |
|------|-----------|--------|--------|---------|
| Header | `bg-card` | `border-b` | subtle | Navigation, branding |
| Top Banner | `bg-card` | `border` | `shadow-sm` | Ad placement (960x200px) |
| Content | `bg-background` | none | none | Main form/invoice area |
| Bottom Banner | `bg-card` | `border` | `shadow-sm` | Ad placement (960x200px) |
| Footer | `bg-card` | `border-t` | none | Navigation, legal, copyright |

## Banner Strategy

Ad banners load via external URLs (`https://adsection.tigoy.com/001.png`, `002.png`). Responsive container with 960px max-width centered on desktop. Styled as clean white cards with subtle borders—professional, not intrusive. Maintained aspect ratio (960:200 = 4.8:1).

## Spacing & Rhythm

- **Base unit**: 4px (Tailwind default).
- **Header/footer padding**: `py-4` (16px vertical).
- **Content padding**: `px-4 py-6` (16px horizontal, 24px vertical).
- **Card gap**: `gap-4` between sections.
- **Form fields**: `mb-4` between inputs.

Tight, functional density. No generous whitespace.

## Motion

Default: `transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`. Applied to hover states on buttons, links, cards. No entrance animations or scroll triggers—focus on responsiveness.

## Elevation & Depth

**Shadows**:
- Banners: `shadow-sm` (0 1px 2px).
- No layered shadows; flat card treatment emphasizes content over depth.

**Borders**: All structural divisions use `border-border` (0.92 0.01 0) at 1px. No heavy outlines.

## Constraints

- ✓ No inline colors, all tokens via CSS variables.
- ✓ No gradients (flat, modern).
- ✓ No decorative patterns or textures.
- ✓ Max 2 font families (DM Sans primary, Geist Mono for data).
- ✓ Responsive mobile-first: `sm:`, `md:`, `lg:` breakpoints for layout.
- ✓ Banner containers maintain 960px max-width on desktop, full-width on mobile with horizontal padding.

## Signature Detail

Deep slate-blue primary (`0.38 0.12 260`) paired with warm amber accent (`0.68 0.15 60`)—unusual combination that signals "trusted, warm professionalism" vs. generic corporate blue. Professional without being sterile.
