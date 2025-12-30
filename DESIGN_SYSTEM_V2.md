# Training Platform Design System V2.0
**"Savona - Clean & Modern Learning Platform"**

---

## 🎯 Design Philosophy

### Core Principles
1. **Clean & Minimal** - Remove visual noise, focus on content
2. **Modern & Professional** - Contemporary SaaS aesthetic with warmth
3. **Transparent & Airy** - Use transparency and space effectively
4. **Purposeful Motion** - Subtle animations that enhance, not distract

### Brand Personality
**Savona** is a modern AI-powered learning platform that balances professional credibility with approachable warmth. We favor clean lines, generous whitespace, and subtle interactions over heavy decoration.

---

## 🎨 Color System

### The "Sunrise Learning" Palette

#### Primary Colors

```css
/* Warm, energetic oranges - replacing cold corporate blue */
--primary: 14 100% 64%;              /* #FF8C5A - Sunset Orange */
--primary-hover: 14 100% 58%;        /* #FF7A42 - Deeper on hover */
--primary-foreground: 0 0% 100%;     /* White text */

/* Deep amber for secondary actions */
--secondary: 32 100% 64%;            /* #FFB347 - Honey Amber */
--secondary-hover: 32 100% 58%;
--secondary-foreground: 0 0% 10%;    /* Dark text */

/* Energetic teal for success/progress */
--accent-teal: 165 94% 44%;          /* #06D6A0 */
--accent-teal-light: 165 94% 94%;    /* Light teal bg */

/* Soft coral for playful moments */
--accent-coral: 8 100% 78%;          /* #FF9A8D */
--accent-coral-light: 8 100% 95%;    /* Light coral bg */

/* Warm peach for highlights */
--accent-peach: 24 100% 85%;         /* #FFD4B8 */
```

#### Neutral Colors (Warm Grays)

```css
/* Light Theme - Warm neutrals with 15° hue shift */
--background: 30 15% 99%;            /* Warm white */
--foreground: 25 8% 15%;             /* Warm dark */

--card: 30 15% 99%;
--card-foreground: 25 8% 15%;

--muted: 30 15% 96%;                 /* Warm light gray */
--muted-foreground: 25 6% 45%;       /* Warm medium gray */

--border: 30 12% 88%;                /* Warm border */
--input: 30 10% 82%;                 /* Warm input border */
```

#### Dark Theme

```css
.dark {
  --background: 25 8% 6%;            /* Warm near-black */
  --foreground: 30 5% 98%;           /* Warm white */

  --card: 25 8% 12%;                 /* Warm dark card */
  --card-foreground: 30 5% 98%;

  --muted: 25 8% 18%;
  --muted-foreground: 30 5% 65%;

  --border: 25 8% 20%;
  --input: 25 8% 24%;
}
```

#### Status Colors

```css
--success: 165 94% 44%;              /* Teal - energetic success */
--success-bg: 165 94% 94%;

--warning: 38 92% 58%;               /* Warm yellow */
--warning-bg: 38 92% 95%;

--error: 8 88% 62%;                  /* Warm red */
--error-bg: 8 88% 95%;

--info: 200 88% 58%;                 /* Soft blue */
--info-bg: 200 88% 95%;
```

#### Gradients

```css
/* Sunset Gradient - Primary CTAs */
background: linear-gradient(135deg, #FF6B4A 0%, #FF8C5A 50%, #FFB347 100%);

/* Text Gradient - Hero headings */
background: linear-gradient(to right, from-primary via-primary to-secondary);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;

/* Warm Glow - Backgrounds */
background: radial-gradient(circle at 50% 50%, #FFD4B8 0%, transparent 70%);

/* Hero Background - Clean gradient blend */
background: linear-gradient(to bottom right, from-accent-peach/20 via-background to-accent-coral/10);
```

### Color Usage Guidelines

**Primary (Sunset Orange):**
- Main CTAs when filled
- Active navigation states
- Important badges and labels
- Focus states and selections

**Outline Buttons:**
- Preferred button style for landing page
- Clean, minimal aesthetic
- Uses `variant="outline"` with border
- Hover transitions to subtle background

**Background Blobs (Fixed):**
- Layered colored orbs for ambient atmosphere
- Fixed position, stays while content scrolls
- Uses primary, secondary, teal, coral, peach colors at low opacity
- Blur effects (blur-2xl, blur-3xl) for soft edges
- Subtle pulse animations with staggered delays

---

## ✍️ Typography System

### Font Families

```css
/* Primary UI Font - Warm, friendly, readable */
--font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Display/Headings - Geometric with personality */
--font-display: 'Space Grotesk', 'Cabinet Grotesk', system-ui, sans-serif;

/* Monospace - Code */
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

### Type Scale & Styles

| Element | Font | Size | Weight | Line Height | Letter Spacing |
|---------|------|------|--------|-------------|----------------|
| **Hero Display** | Display | 56-72px (5xl-7xl) | 700 | tight | tight |
| **H1** | Display | 40-48px | 700 | 1.2 | tight |
| **H2** | Display | 32-40px (4xl-5xl) | 600-700 | 1.3 | tight |
| **H3** | Display | 24-28px (2xl-3xl) | 600-700 | 1.4 | 0 |
| **H4** | Sans | 18-20px | 600 | 1.4 | 0 |
| **Body Large** | Sans | 18-20px (xl) | 400 | relaxed (1.6) | 0 |
| **Body** | Sans | 15-16px | 400 | relaxed | 0 |
| **Body Small** | Sans | 13-14px (sm) | 500 | 1.5 | 0 |
| **Label** | Sans | 11-13px | 600 | 1.4 | 0.02em |

### Typography Guidelines

**Landing Page Hero:**
- Large display font (text-5xl to text-7xl)
- Bold weight (font-bold = 700)
- Tight tracking (tracking-tight)
- Gradient text for emphasis using `.text-gradient` class
- Block display for multi-line headlines

**Section Headers:**
- Display font for H2-H3
- Font sizes: text-4xl to text-6xl for major sections
- Bold to semibold weights

**Body Text:**
- Sans font
- text-xl for hero subheadings
- text-lg for section descriptions
- text-muted-foreground for lower hierarchy
- leading-relaxed for comfortable reading

**Navigation:**
- text-muted-foreground by default
- hover:text-foreground on interaction
- transition-colors for smooth state changes

**Brand Name:**
- font-display for logo/brand
- text-xl for header
- font-bold for emphasis

---

## 📐 Spacing & Layout

### Header

```tsx
// Absolute positioned, transparent background
<header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    <div className="flex items-center justify-between relative">
      {/* Logo - Left aligned */}
      <div className="font-display text-xl font-bold">Savona</div>

      {/* Nav - Absolutely centered */}
      <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
        <a href="#section" className="text-muted-foreground hover:text-foreground transition-colors">
          Link Text
        </a>
      </nav>

      {/* CTA - Right aligned */}
      <Button variant="outline" size="sm">Contact Sales</Button>
    </div>
  </div>
</header>
```

**Key Pattern:**
- Absolute positioning for overlay effect
- Transparent background (no backdrop blur)
- Logo on left, CTA button on right
- Navigation absolutely centered using `left-1/2 -translate-x-1/2`
- max-w-7xl container for consistency
- py-6 vertical padding

### Container Widths

```css
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-2xl: 1440px;

/* Standard: max-w-7xl (1280px) for most sections */
/* Wide: max-w-6xl for pricing/cards */
/* Narrow: max-w-4xl for centered content */
/* Text: max-w-2xl for readable paragraphs */
```

### Border Radius

```css
--radius-sm: 8px;       /* Small elements */
--radius-md: 12px;      /* Inputs */
--radius-lg: 16px;      /* Default cards */
--radius-xl: 20px;      /* Large cards */
--radius-2xl: 24px;     /* Feature cards, modals */
--radius-3xl: 32px;     /* Extra large */
--radius-pill: 9999px;  /* Full pill - NOT used for primary buttons */
```

**Card Radius:** rounded-2xl (24px) for feature cards

### Shadows

```css
/* Warm-tinted shadows */
--shadow-xs: 0 1px 2px rgba(255, 107, 74, 0.06);
--shadow-sm: 0 2px 4px rgba(255, 107, 74, 0.08);
--shadow-md: 0 4px 8px rgba(255, 107, 74, 0.1);
--shadow-lg: 0 8px 16px rgba(255, 107, 74, 0.12);
--shadow-xl: 0 12px 24px rgba(255, 107, 74, 0.15);

/* Colored emphasis shadows */
--shadow-primary: 0 8px 20px rgba(255, 140, 90, 0.3);
--shadow-teal: 0 8px 20px rgba(6, 214, 160, 0.25);
```

---

## 🎨 Component Library

### 1. Buttons

#### Outline Button (Landing Page Primary)

```tsx
// Small (Header CTA)
<Button asChild variant="outline" size="sm">
  <a href="#">Contact Sales</a>
</Button>

// Large (Hero CTA)
<Button asChild variant="outline" size="lg" className="text-lg">
  <Link href="#">Create a Course</Link>
</Button>
```

**Characteristics:**
- Clean outline style, not filled
- Subtle background on hover
- Standard border radius (not pill)
- Consistent with shadcn/ui Button component
- Variant: "outline"
- Sizes: "sm" for header, "lg" for hero CTAs

#### Gradient Button (When needed for emphasis)

```tsx
<Button asChild size="lg" className="text-lg">
  <Link href="#">Get Started</Link>
</Button>
```

### 2. Cards

#### Feature Card

```tsx
<Card className="group">
  <CardHeader>
    {/* Gradient icon box with emoji */}
    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 text-2xl shadow-primary transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
      🤖
    </div>
    <CardTitle>Feature Title</CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-muted-foreground leading-relaxed">
      Feature description with comfortable line height.
    </p>
  </CardContent>
</Card>
```

**Key Features:**
- Group hover interactions
- Gradient background for icon containers (from-primary to-secondary)
- rounded-2xl for icon box
- Emoji icons (currently) - can be replaced with icon library
- Transform animations on hover (scale-110, rotate-3)
- shadow-primary for colored emphasis
- text-2xl for emoji size
- mb-4 spacing between icon and title

#### Pricing/Solution Card

```tsx
<Card className="text-center">
  <CardHeader>
    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-teal to-accent-coral flex items-center justify-center mb-4 text-3xl mx-auto">
      👥
    </div>
    <CardTitle className="text-2xl">Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-muted-foreground leading-relaxed">
      Card description text.
    </p>
  </CardContent>
</Card>
```

**Variations:**
- Larger icon box (w-16 h-16) for pricing cards
- mx-auto for center alignment
- text-3xl for larger emoji
- Different gradient combinations per card

### 3. Badges

#### Simple Badge (No animation dot)

```tsx
<Badge variant="default" className="mb-8 gap-2 text-sm px-4 py-2">
  Savona - AI-Powered Learning
</Badge>
```

**Characteristics:**
- Clean, simple design
- No pulsing dot decoration
- Standard padding (px-4 py-2)
- gap-2 if using icons
- text-sm sizing

### 4. Navigation

#### Header Navigation Links

```tsx
<nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
  <a href="#section" className="text-muted-foreground hover:text-foreground transition-colors">
    Link Text
  </a>
</nav>
```

**Pattern:**
- Plain text links (no buttons or pills)
- gap-8 between links
- text-muted-foreground default state
- hover:text-foreground for interaction
- transition-colors for smooth state change
- hidden md:flex for responsive visibility
- Absolutely centered using transform

---

## 🎨 Background Pattern System

### Fixed Ambient Blobs

```tsx
{/* Fixed background lights - stay in place while content scrolls */}
<div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
  <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
  <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-teal/5 rounded-full blur-3xl"></div>
  <div className="absolute top-40 left-20 w-32 h-32 bg-accent-coral/20 rounded-full blur-2xl"></div>
  <div className="absolute bottom-40 right-20 w-40 h-40 bg-accent-peach/20 rounded-full blur-2xl"></div>
</div>
```

**Characteristics:**
- Fixed positioning (stays while content scrolls)
- -z-10 to place behind all content
- pointer-events-none to prevent interaction
- Varied sizes (w-32 to w-[600px])
- Low opacity colors (/5 to /20)
- Heavy blur (blur-2xl, blur-3xl)
- Some with animate-pulse
- Staggered animation delays
- Various positioning (top, bottom, left, right, centered)

### Section Background Patterns

#### Hero Section

```tsx
<div className="relative min-h-screen flex items-center overflow-hidden">
  {/* Gradient background */}
  <div className="absolute inset-0 bg-gradient-to-br from-accent-peach/20 via-background to-accent-coral/10"></div>

  {/* Dot pattern overlay */}
  <div className="absolute inset-0 pattern-dots"></div>

  {/* Content */}
  <div className="relative w-full">...</div>
</div>
```

**Pattern:**
- Layered backgrounds (gradient + dots)
- gradient-to-br for diagonal flow
- Low opacity accent colors
- pattern-dots class for subtle texture
- relative positioning for content on top

#### Solid Background Sections

```tsx
<div className="relative bg-[hsl(var(--background))] border-y border-border/30">
  {/* Warm gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-accent-peach/12 via-accent-coral/8 to-accent-peach/12"></div>

  <div className="relative">
    {/* Content */}
  </div>
</div>
```

**Pattern:**
- Solid background color
- Subtle border top/bottom
- Gradient overlay for warmth
- Very low opacity (/8 to /12)

---

## ✨ Animations & Interactions

### Animation Duration Scale

```css
--duration-fast: 200ms;      /* Color transitions */
--duration-normal: 300ms;    /* Standard transforms */
--duration-slow: 500ms;      /* Emphasis */
```

### Card Hover Interactions

```tsx
// Group-based hover (icon transforms while card is hovered)
<Card className="group">
  <div className="... transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
    {/* Icon */}
  </div>
</Card>
```

### Navigation Transitions

```tsx
className="text-muted-foreground hover:text-foreground transition-colors"
```

**Keep animations:**
- Subtle and purposeful
- Quick (200-300ms)
- Smooth easing (default or ease-out)

---

## 📱 Layout Sections

### Landing Page Structure

1. **Hero Section**
   - Full viewport height (min-h-screen)
   - Centered content (flex items-center)
   - Large display heading (text-5xl to text-7xl)
   - Gradient text effect on key words
   - Single CTA button (outline variant)
   - Badge above heading
   - max-w-7xl container

2. **Features Section**
   - Solid background with gradient overlay
   - border-y for separation
   - Grid layout (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
   - gap-8 between cards
   - Centered section header
   - py-20 vertical padding

3. **How It Works Section**
   - Hero-style background (gradient + dots)
   - Grid layout for steps (md:grid-cols-3)
   - Numbered circles or icons
   - Centered layout

4. **Pricing Section**
   - Hero-style background
   - Grid layout (md:grid-cols-3)
   - Feature cards with icons
   - Centered CTA below cards
   - py-32 for generous spacing

### Section ID Anchors

```tsx
// For navigation links to work
<div id="features">...</div>
<div id="how-it-works">...</div>
<div id="pricing">...</div>
```

---

## 🌗 Dark Mode

Currently uses system theme preference via ThemeProvider.

**Key considerations:**
- Warm-tinted backgrounds (not pure black)
- Adjust blob opacity for dark mode
- Maintain warm color palette
- Ensure sufficient contrast for text

---

## ♿ Accessibility

### Focus States

```tsx
className="focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
```

### Semantic HTML

- Use proper heading hierarchy
- Navigation wrapped in `<nav>`
- Links use `<a>` tags with href
- Interactive elements keyboard accessible

### Color Contrast

- Ensure text meets WCAG AA (4.5:1)
- muted-foreground maintains readability
- Test gradient text for sufficient contrast

---

## 💡 Design Principles

### 1. Clean & Minimal First
- Favor whitespace over decoration
- Remove unnecessary visual elements
- Let content breathe

### 2. Consistent Spacing
- Use max-w-7xl for most sections
- py-20 to py-32 for section padding
- gap-8 for card grids
- mb-8 to mb-16 for section element spacing

### 3. Subtle Interactions
- Quick, smooth transitions (200-300ms)
- Purposeful hover states
- No excessive motion

### 4. Transparent Overlays
- Headers with transparent backgrounds
- Layered gradient overlays at low opacity
- Ambient blob decorations that don't interfere

### 5. Typography Hierarchy
- Display font for major headings
- Sans font for body text
- Clear size differentiation
- Consistent use of text-gradient for emphasis

### 6. Button Consistency
- Outline variant for landing page CTAs
- Consistent sizing (sm for header, lg for hero)
- No pill shapes on landing page
- Clean, modern aesthetic

### 7. Icon Containers
- Gradient backgrounds (from-primary to-secondary)
- rounded-2xl for softness
- Hover interactions (scale + rotate)
- Emoji or icon library
- Drop shadows for depth (shadow-primary)

---

## 📋 Component Checklist

### Landing Page Essentials

- [ ] **Header**: Absolute, transparent, centered nav, outline CTA button
- [ ] **Hero**: Full height, gradient background + dots, large display text, text-gradient accent, outline CTA
- [ ] **Badge**: Simple badge, no animated dot
- [ ] **Fixed Blobs**: Ambient background orbs with blur and pulse
- [ ] **Feature Cards**: Icon boxes with gradients, group hover effects
- [ ] **Section Backgrounds**: Alternating hero-style and solid with overlays
- [ ] **Navigation Links**: Plain text with color transitions
- [ ] **Pricing Cards**: Centered layout with icon boxes
- [ ] **Typography**: Display font for headings, sans for body, proper hierarchy
- [ ] **Buttons**: Outline variant for CTAs, no pills
- [ ] **Spacing**: Consistent max-w containers, generous padding

---

**Version:** 2.0 (Updated for Savona Landing Page)
**Last Updated:** November 2025
**Style:** Clean, minimal, modern with warm accents

This design system captures the refined, professional aesthetic of the Savona landing page with its transparent header, ambient blob backgrounds, clean outline buttons, and centered navigation pattern.
