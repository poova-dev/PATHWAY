---
name: Pathway Professional
colors:
  surface: '#f4fcee'
  surface-dim: '#d5dcd0'
  surface-bright: '#f4fcee'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eef6e9'
  surface-container: '#e9f0e3'
  surface-container-high: '#e3ebdd'
  surface-container-highest: '#dde5d8'
  on-surface: '#171d15'
  on-surface-variant: '#3e4a3c'
  inverse-surface: '#2b322a'
  inverse-on-surface: '#ecf3e6'
  outline: '#6e7b6b'
  outline-variant: '#bdcab8'
  surface-tint: '#006e21'
  primary: '#006e21'
  on-primary: '#ffffff'
  primary-container: '#2eaf45'
  on-primary-container: '#003a0d'
  inverse-primary: '#63df6e'
  secondary: '#2658c1'
  on-secondary: '#ffffff'
  secondary-container: '#6792fd'
  on-secondary-container: '#002970'
  tertiary: '#ae2957'
  on-tertiary: '#ffffff'
  tertiary-container: '#fa6590'
  on-tertiary-container: '#67002b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#80fd87'
  primary-fixed-dim: '#63df6e'
  on-primary-fixed: '#002105'
  on-primary-fixed-variant: '#005317'
  secondary-fixed: '#dae2ff'
  secondary-fixed-dim: '#b2c5ff'
  on-secondary-fixed: '#001848'
  on-secondary-fixed-variant: '#0040a2'
  tertiary-fixed: '#ffd9df'
  tertiary-fixed-dim: '#ffb1c2'
  on-tertiary-fixed: '#3f0018'
  on-tertiary-fixed-variant: '#8d0a40'
  background: '#f4fcee'
  on-background: '#171d15'
  surface-variant: '#dde5d8'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

This design system establishes a premium, authoritative, yet aspirational aesthetic for the immigration and study abroad sector. The brand personality is rooted in "Guided Success"—combining the institutional trust of a law firm with the high-velocity innovation of a Silicon Valley unicorn. 

The design narrative merges the precision of **Stripe’s** information density with **Apple’s** airy, expansive use of whitespace. The emotional response is one of calm confidence; users should feel that their complex international journey is being simplified through a sophisticated, high-end platform. 

The style is **Modern Corporate**, utilizing subtle glassmorphism for overlays and high-end tactile depth to separate the platform from traditional, dated government or agency portals.

## Colors

The palette is anchored by **Deep Green**, representing growth and successful "green-lit" applications. **Royal Blue** provides a secondary anchor of stability and international professionalism. 

To prevent the design from feeling overly stiff, **Instagram-inspired gradients** are used sparingly as accent flourishes—specifically for progress indicators, high-priority CTAs, or "New" feature badges. Surfaces primarily use **Pure White**, with **#F8F9FA (Off-White)** serving as a structural tool to define distinct content sections and secondary containers without using heavy borders.

## Typography

The typography system uses **Plus Jakarta Sans** (a modern alternative to Poppins with better screen legibility) for headings to provide a friendly yet bold structural skeleton. **Manrope** is utilized for all body copy and UI labels, chosen for its exceptional geometric clarity and professional "SaaS" feel.

- **Headings:** Use tight letter-spacing (-0.02em) for larger display sizes to maintain a premium, editorial look.
- **Body:** Maintain generous line heights (1.6) to ensure complex immigration details remain readable and approachable.
- **Labels:** Use uppercase for small metadata tags to differentiate from interactive body text.

## Layout & Spacing

The layout follows a **Fixed-Fluid hybrid grid**. Content is contained within a 1280px max-width wrapper on desktop to ensure optimal line lengths for reading. 

A strict **8px spacing scale** governs the vertical rhythm.
- **Desktop:** 12-column grid with 24px gutters.
- **Mobile:** Single column with 20px side margins.
- **Sectioning:** Use large vertical padding (80px to 120px) between major landing page sections to reinforce the premium, unhurried brand feeling.

## Elevation & Depth

Hierarchy is established through a combination of **Ambient Shadows** and **Glassmorphism**.

1.  **Low Elevation (Cards):** Use a very soft, diffused shadow: `0px 4px 20px rgba(0, 0, 0, 0.04)`.
2.  **High Elevation (Modals/Dropdowns):** Use a more pronounced "floating" shadow: `0px 20px 40px rgba(0, 0, 0, 0.08)`.
3.  **Glassmorphism:** Navigation bars and secondary overlays (like search filters) should use a `12px` backdrop blur with a `white/80%` opacity background. This maintains a sense of place within the application.

## Shapes

The design system uses a generous **24px (1.5rem)** corner radius for primary cards and large containers to evoke a modern, "App-like" feel. 

- **Primary Radius:** 24px (Containers, Country Cards, Search Widgets).
- **Secondary Radius:** 12px (Buttons, Input Fields).
- **Tertiary Radius:** 8px (Small badges, Tooltips).

## Components

### Buttons
- **Primary:** Deep Green background with a subtle top-to-bottom light gradient. White text. 12px border radius.
- **Secondary:** Royal Blue text with a transparent background and a 1.5px Royal Blue border.
- **Interactive:** Apply a slight scale-down effect (0.98) on click/active states.

### Country Cards
High-impact components featuring a 24px radius, a subtle 1px border (`#EEEEEE`), and a background image with a gradient overlay (bottom-to-top) to ensure white typography is legible over the image.

### Search Widgets
The "Global Search" bar should feel like a floating object. Use a 48px height, 24px border radius, and a deep ambient shadow. On focus, the border should transition to Royal Blue.

### Input Fields
Soft gray backgrounds (`#F8F9FA`) with no borders in their default state. Upon focus, they transition to a white background with a 2px Royal Blue ring.

### Chips/Tags
Used for visa types or status updates. Use a soft-tinted background (e.g., 10% opacity of the primary color) with high-contrast text.