# Memory & Specification: Twofold Storytelling ("Fold Experience") Redesign

> **Status**: Section temporarily removed from `src/app/page.js` on user request.
> **Restore Command**: Uncomment `<FoldExperience />` in `src/app/page.js` and implement the detailed editorial redesign below.

---

## 1. Goal Overview
Redesign the existing **“Brand / Manufacturer / Products / Connection”** storytelling section of the Twofold stationery manufacturing website.

- **Scope**: Redesign ONLY this storytelling section (`FoldExperience.js` & `FoldExperience.module.css`).
- **Identity**: Preserve Twofold brand identity, navy/cream palette (`#11172D` / `#F9FAF5`), typography direction (The Youngest Serif display + Gramatika body), content hierarchy, and premium editorial feel.
- **Problem Solved**: Replaces the 4 equal vertical panel grid (`01 / THE BRAND`, `02 / THE MANUFACTURER`, `03 / THE PRODUCTS`, `04 / THE CONNECTION`) with a continuous, asymmetric, Swiss-inspired editorial story.

---

## 2. Chapter Breakdown & Requirements

### Section 01 — THE BRAND
- **Background**: Warm off-white / cream background (`#F9FAF5`).
- **Eyebrow**: `01 / THE BRAND`
- **Editorial Headline**:
  > “Designed to Fold.  
  > Made to Create.”
- **Body Text**:  
  > “Twofold is a modern stationery manufacturer combining practical functionality, thoughtful design, and dependable production to create paper products for everyday use and global markets.”
- **Background Element**: Very large, extremely subtle “01” typographic backdrop (`opacity: 0.04-0.06`).
- **Layout**: Asymmetric layout — Text ~45% width, Visual area ~55% width.
- **Visual Area**: Refined paper/manufacturing image or elegant abstract paper-folding composition.

### Section 02 — THE MANUFACTURER
- **Background & Transition**: Deep navy transition (`#11172D`).
- **Visual Area**: Manufacturing/factory image occupying ~55–60%.
- **Content Side** (40–45%):
  - **Eyebrow**: `02 / THE MANUFACTURER`
  - **Headline**:
    > “Made With Experience.  
    > Built For Scale.”
  - **Stats Ledger** (Horizontal information rows with 1px divider lines):
    - `10+ Years` — Manufacturing & Export
    - `Since 1988` — Family Heritage in Paper
    - `AQL` — Inspected Before Dispatch
    - `JNPT` — Global Shipping Gateway
  - **Background Element**: Subtle oversized “02” ghost numeral.

### Section 03 — THE PRODUCTS
- **Background**: Clean warm off-white background (`#F9FAF5` or `#FFFFFF`).
- **Eyebrow**: `03 / THE PRODUCTS`
- **Headline**:
  > “Paper, Made  
  > With Purpose.”
- **Product Roster**: 6 categories presented as a numbered list with thin dividers (no cards):
  1. `01 Exercise Books`
  2. `02 Spiral Bound`
  3. `03 Double Wire Bound`
  4. `04 Hard Cover Gally Bound`
  5. `05 Centre Stitched`
  6. `06 Glue Bound`
- **Interactions**:
  - Hover highlights selected item, animates arrow `→`, and triggers a smooth side floating image preview.
- **CTA**: `EXPLORE PRODUCTS →` (links to `/products`).

### Section 04 — THE CONNECTION
- **Background**: Deep midnight navy background (`#11172D`).
- **Eyebrow**: `04 / THE CONNECTION`
- **Headline**:
  > “From Our Facility  
  > to the World.”
- **Body Text**:  
  > “From our facility in Palghar, Maharashtra, Twofold exports paper stationery to distributors, wholesalers, importers, and stationery brands across global markets.”
- **Geographic Visual**:
  - Minimal vector/coordinates node visual: `Palghar / Maharashtra / India → Global Markets` (`19.6967° N, 72.7699° E`).
- **CTA**: `REQUEST A QUOTE →` (links to `/contact-us`).

---

## 3. Visual Language & Animation Guidelines
- **Palette**: Warm off-white (`#F9FAF5`), Midnight Navy (`#11172D`), restrained Yellow/Amber accents (`#EDE84D` / `#F7AD23`), Steel Grey (`#637086`).
- **Typography**: Serif display for headlines (`--font-display`), modern sans-serif for body/labels (`--font-body`).
- **Borders & Dividers**: Thin 1px borders, generous whitespace, asymmetric grid structure.
- **Animations**: Subtle GSAP ScrollTrigger reveals, typography fade/translate, number shift on scroll, refined hover preview cards.

---

## 4. Code Location
- **Component**: [`src/components/home/FoldExperience.js`](file:///e:/codes/Paperr/src/components/home/FoldExperience.js)
- **Styles**: [`src/components/home/FoldExperience.module.css`](file:///e:/codes/Paperr/src/components/home/FoldExperience.module.css)
- **Home Page Import**: [`src/app/page.js`](file:///e:/codes/Paperr/src/app/page.js)
