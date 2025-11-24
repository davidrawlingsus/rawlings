# Implementation Guide - Using Marketably Style Guide Across Domains

This guide shows you how to implement the Marketably.ai design system in different scenarios and platforms.

---

## Table of Contents

1. [Quick Start](#quick-start)
2. [Scenario 1: New Static Website](#scenario-1-new-static-website)
3. [Scenario 2: WordPress Site](#scenario-2-wordpress-site)
4. [Scenario 3: React/Next.js Application](#scenario-3-reactnextjs-application)
5. [Scenario 4: Email Templates](#scenario-4-email-templates)
6. [Scenario 5: Landing Pages](#scenario-5-landing-pages)
7. [Platform-Specific Tips](#platform-specific-tips)
8. [Testing Checklist](#testing-checklist)

---

## Quick Start

### Step 1: Copy Core Files

Copy these files to your new project:
- `portable-design-tokens.css` - All design variables
- `STYLE_GUIDE_QUICK_REF.md` - Quick reference
- `VISUAL_ASSETS_REFERENCE.md` - Asset URLs and usage

### Step 2: Load Font

Add to your HTML `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet">
```

### Step 3: Import Design Tokens

In your main CSS file:

```css
@import url('./portable-design-tokens.css');

/* Or link in HTML */
<link rel="stylesheet" href="portable-design-tokens.css">
```

### Step 4: Apply Base Styles

```css
body {
  font-family: var(--marketably-font-primary);
  font-size: var(--marketably-text-base);
  line-height: var(--marketably-leading-normal);
  color: var(--marketably-text-primary);
  background-color: var(--marketably-bg-white);
}
```

---

## Scenario 1: New Static Website

**Tech Stack:** HTML, CSS, vanilla JavaScript

### Directory Structure

```
project/
├── index.html
├── css/
│   ├── portable-design-tokens.css
│   └── main.css
├── js/
│   └── main.js
└── images/
    └── (your images)
```

### HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Title</title>
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet">
  
  <!-- Stylesheets -->
  <link rel="stylesheet" href="css/portable-design-tokens.css">
  <link rel="stylesheet" href="css/main.css">
</head>
<body>
  <!-- Header -->
  <header class="header">
    <nav class="nav-container">
      <div class="logo">
        <span class="logo-main">market</span><span class="logo-accent">ably</span>
      </div>
      <div class="nav-links">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
      <button class="marketably-btn-primary">Get Started</button>
    </nav>
  </header>
  
  <!-- Main Content -->
  <main>
    <!-- Your content here -->
  </main>
  
  <!-- Footer -->
  <footer class="footer">
    <p>&copy; 2025 Your Company</p>
  </footer>
</body>
</html>
```

### Main CSS File

```css
/* Import design tokens */
@import url('./portable-design-tokens.css');

/* Base styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--marketably-font-primary);
  font-size: var(--marketably-text-base);
  line-height: var(--marketably-leading-normal);
  color: var(--marketably-text-primary);
}

/* Header */
.header {
  position: sticky;
  top: 0;
  z-index: var(--marketably-z-sticky);
  background-color: var(--marketably-bg-black);
  border-bottom: 1px solid var(--marketably-border-dark);
  padding: var(--marketably-spacing-4) var(--marketably-spacing-6);
}

.nav-container {
  max-width: var(--marketably-max-width-content);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: var(--marketably-text-3xl);
  font-weight: var(--marketably-font-bold);
}

.logo-main {
  color: var(--marketably-text-white);
}

.logo-accent {
  color: var(--marketably-brand-lime);
}

.nav-links {
  display: flex;
  gap: var(--marketably-spacing-8);
}

.nav-links a {
  color: var(--marketably-text-white);
  text-decoration: none;
  transition: color var(--marketably-transition-base) var(--marketably-ease-out);
}

.nav-links a:hover {
  color: var(--marketably-brand-lime);
}

/* Footer */
.footer {
  background-color: var(--marketably-bg-black);
  color: var(--marketably-text-white);
  padding: var(--marketably-spacing-12) var(--marketably-spacing-6);
  text-align: center;
}
```

---

## Scenario 2: WordPress Site

**Tech Stack:** WordPress with custom theme or child theme

### Method 1: Custom CSS (Easiest)

1. Go to **Appearance → Customize → Additional CSS**
2. Paste the contents of `portable-design-tokens.css`
3. Add your custom styles

```css
/* Copy entire portable-design-tokens.css here */

/* Then add your overrides */
.site-header {
  background-color: var(--marketably-bg-black);
}

.site-title {
  font-family: var(--marketably-font-primary);
  font-weight: var(--marketably-font-bold);
  color: var(--marketably-text-white);
}

/* Style "ably" part of logo */
.site-title span {
  color: var(--marketably-brand-lime);
}

.menu-item a {
  color: var(--marketably-text-white);
  transition: color var(--marketably-transition-base);
}

.menu-item a:hover {
  color: var(--marketably-brand-lime);
}

/* Primary button styling */
.wp-block-button__link,
.btn-primary {
  background-color: var(--marketably-brand-lime) !important;
  color: var(--marketably-bg-black) !important;
  padding: var(--marketably-spacing-3) var(--marketably-spacing-6) !important;
  border-radius: var(--marketably-radius-base) !important;
  font-weight: var(--marketably-font-semibold) !important;
}
```

### Method 2: Child Theme (More Control)

1. Create child theme directory: `/wp-content/themes/yourtheme-child/`

2. Create `style.css`:

```css
/*
Theme Name: Your Theme Child - Marketably Style
Template: yourtheme
*/

@import url('../yourtheme/style.css');
@import url('design-tokens.css');

/* Your custom styles */
```

3. Create `design-tokens.css` (copy from portable-design-tokens.css)

4. Enqueue in `functions.php`:

```php
<?php
function child_theme_enqueue_styles() {
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');
    wp_enqueue_style('design-tokens', get_stylesheet_directory_uri() . '/design-tokens.css');
    wp_enqueue_style('child-style', get_stylesheet_directory_uri() . '/style.css', array('design-tokens'));
}
add_action('wp_enqueue_scripts', 'child_theme_enqueue_styles');

// Load Lato font
function load_lato_font() {
    echo '<link rel="preconnect" href="https://fonts.googleapis.com">';
    echo '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>';
    echo '<link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet">';
}
add_action('wp_head', 'load_lato_font');
?>
```

---

## Scenario 3: React/Next.js Application

**Tech Stack:** React, Next.js, Tailwind CSS (or CSS Modules)

### With Tailwind CSS

1. Install Tailwind: `npm install -D tailwindcss`

2. Update `tailwind.config.js`:

```js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'marketably-lime': '#B9F040',
        'marketably-lime-hover': '#a0d636',
        'marketably-navy': '#1A2B3C',
        'marketably-navy-dark': '#0F1B28',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
      spacing: {
        // Add custom spacing based on design tokens
      },
      borderRadius: {
        'marketably': '0.625rem',
      },
    },
  },
}
```

3. In `_app.js` or `layout.tsx`:

```tsx
import { Lato } from 'next/font/google'
import './globals.css'

const lato = Lato({ 
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-lato'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        {children}
      </body>
    </html>
  )
}
```

4. Use in components:

```tsx
export default function Button({ children }) {
  return (
    <button className="bg-marketably-lime text-black px-6 py-3 rounded-lg font-semibold text-sm uppercase hover:bg-marketably-lime-hover transition-colors">
      {children}
    </button>
  )
}
```

### With CSS Modules

1. Create `styles/design-tokens.module.css` (copy from portable-design-tokens.css)

2. Import in components:

```tsx
import styles from './Button.module.css'

export default function Button({ children }) {
  return (
    <button className={styles.btnPrimary}>
      {children}
    </button>
  )
}
```

3. `Button.module.css`:

```css
@import '../design-tokens.module.css';

.btnPrimary {
  background-color: var(--marketably-brand-lime);
  color: var(--marketably-bg-black);
  padding: var(--marketably-spacing-3) var(--marketably-spacing-6);
  border-radius: var(--marketably-radius-base);
  font-weight: var(--marketably-font-semibold);
  font-size: var(--marketably-text-sm);
  text-transform: uppercase;
  transition: background-color var(--marketably-transition-base);
}

.btnPrimary:hover {
  background-color: var(--marketably-brand-lime-hover);
}
```

---

## Scenario 4: Email Templates

**Tech Stack:** HTML email templates

### Important Considerations

- Use inline styles (most email clients don't support external CSS)
- Use tables for layout
- Test extensively (Litmus, Email on Acid)
- Avoid CSS variables (not supported in email)

### Email Template Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Email Subject</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f7f7f7;">
  <!-- Wrapper Table -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td align="center" style="padding: 40px 0;">
        
        <!-- Content Table -->
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden;">
          
          <!-- Header -->
          <tr>
            <td style="background-color: #000000; padding: 24px; text-align: center;">
              <h1 style="margin: 0; font-size: 32px; font-weight: 700; color: #ffffff;">
                market<span style="color: #B9F040;">ably</span>
              </h1>
              <p style="margin: 8px 0 0 0; font-size: 12px; color: #B9F040; text-transform: uppercase; letter-spacing: 1px;">
                Feedback-Fueled Marketing
              </p>
            </td>
          </tr>
          
          <!-- Body -->
          <tr>
            <td style="padding: 40px;">
              <h2 style="margin: 0 0 16px 0; font-size: 24px; font-weight: 700; color: #0F0F0F;">
                Email Headline
              </h2>
              <p style="margin: 0 0 16px 0; font-size: 16px; line-height: 1.5; color: #525252;">
                Email body text goes here. Keep paragraphs short and scannable.
              </p>
              
              <!-- Button -->
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="border-radius: 8px; background-color: #B9F040;">
                    <a href="#" style="display: inline-block; padding: 12px 24px; font-size: 14px; font-weight: 600; color: #000000; text-decoration: none; text-transform: uppercase; letter-spacing: 0.5px;">
                      CLICK HERE
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #000000; padding: 24px; text-align: center;">
              <p style="margin: 0; font-size: 14px; color: #A3A3A3;">
                © 2025 Your Company. All rights reserved.
              </p>
            </td>
          </tr>
          
        </table>
        
      </td>
    </tr>
  </table>
</body>
</html>
```

### Email-Safe Colors

Since CSS variables don't work in email, use these hex codes directly:

```
Primary Lime: #B9F040
Black: #000000
White: #FFFFFF
Navy: #1A2B3C
Text Gray: #525252
Border Gray: #E5E5E5
```

---

## Scenario 5: Landing Pages

**Tech Stack:** Unbounce, Instapage, or similar landing page builder

### General Approach

1. **Add Custom CSS Section**
   - Most builders have a "Custom CSS" or "CSS Editor" section
   - Paste simplified version of design tokens

2. **Simplified Design Tokens for Landing Pages**

```css
/* Paste this in Custom CSS section */

/* Colors */
:root {
  --brand-lime: #B9F040;
  --brand-lime-hover: #a0d636;
  --bg-black: #000000;
  --bg-navy: #1A2B3C;
  --text-white: #FFFFFF;
  --text-primary: #0F0F0F;
}

/* Typography */
body, p, div, span {
  font-family: 'Lato', sans-serif;
}

h1, h2, h3, h4 {
  font-weight: 700;
}

/* Override builder's primary button */
.lp-pom-button,
.ub-button-primary,
.primary-btn {
  background-color: var(--brand-lime) !important;
  color: var(--bg-black) !important;
  border: none !important;
  border-radius: 8px !important;
  padding: 12px 24px !important;
  font-weight: 600 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.5px !important;
  transition: background-color 200ms !important;
}

.lp-pom-button:hover,
.ub-button-primary:hover,
.primary-btn:hover {
  background-color: var(--brand-lime-hover) !important;
}

/* Header styling */
.lp-pom-root .header,
#header {
  background-color: var(--bg-black) !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
}
```

3. **Load Lato Font**
   - In "Head Code" or "Custom HTML" section:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet">
```

### Platform-Specific Tips

**Unbounce:**
- Use Custom CSS section (bottom of page editor)
- Target elements with `.lp-pom-` prefix
- Test mobile view extensively

**Instapage:**
- Use CSS Editor (Settings → Custom Code → CSS)
- Target with specific Instapage classes
- Use !important to override defaults

**Leadpages:**
- Limited CSS customization
- Focus on color overrides in theme settings
- Use custom HTML widgets for complex elements

---

## Platform-Specific Tips

### Webflow

```css
/* Add to Site Settings → Custom Code → Head Code */
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet">

<style>
  /* Copy portable-design-tokens.css here */
</style>
```

Then use combo classes in Webflow:
- Create `.marketably-btn-primary` class
- Apply to button elements

### Shopify

1. Edit theme files (Online Store → Themes → Edit Code)
2. Add `design-tokens.css` to Assets folder
3. Include in `theme.liquid`:

```liquid
{{ 'design-tokens.css' | asset_url | stylesheet_tag }}
```

### Squarespace

1. Design → Custom CSS
2. Paste design tokens
3. Target Squarespace-specific selectors:

```css
/* Header */
.Header {
  background-color: var(--marketably-bg-black);
}

/* Buttons */
.sqs-block-button-element {
  background-color: var(--marketably-brand-lime) !important;
  color: var(--marketably-bg-black) !important;
}
```

---

## Testing Checklist

### Visual Testing

- [ ] Logo appears correctly (white/black + lime)
- [ ] Primary color (#B9F040) used consistently
- [ ] Lato font loads and displays
- [ ] Buttons have correct styling
- [ ] Hover states work on interactive elements
- [ ] Form inputs match design
- [ ] Cards and containers have proper spacing
- [ ] Correct border radius (8-12px typical)

### Responsive Testing

- [ ] Test on mobile (375px width)
- [ ] Test on tablet (768px width)
- [ ] Test on desktop (1280px+ width)
- [ ] Touch targets are minimum 44x44px
- [ ] Text is readable at all sizes
- [ ] Images scale appropriately
- [ ] Navigation works on mobile

### Accessibility Testing

- [ ] Color contrast meets WCAG AA (4.5:1 for text)
- [ ] All interactive elements keyboard accessible
- [ ] Focus states are visible
- [ ] Images have alt text
- [ ] Headings follow proper hierarchy (h1 → h2 → h3)
- [ ] Forms have proper labels
- [ ] Reduced motion is respected

### Cross-Browser Testing

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Performance Testing

- [ ] Fonts load quickly (preconnect)
- [ ] Images are optimized
- [ ] CSS file size is reasonable
- [ ] No render-blocking resources
- [ ] Mobile page speed is good

---

## Common Issues & Solutions

### Issue: Font Not Loading

**Solution:**
```html
<!-- Make sure you have both preconnect links -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet">
```

### Issue: CSS Variables Not Working

**Solution:** Check browser support. If supporting IE11, use fallbacks:

```css
.element {
  background-color: #B9F040; /* Fallback */
  background-color: var(--marketably-brand-lime); /* Modern browsers */
}
```

### Issue: Colors Look Different

**Solution:** Ensure color profile is sRGB and monitor is calibrated. Use exact hex codes:
- Primary Lime: `#B9F040` (not #B9F03F or similar)

### Issue: Buttons Don't Match

**Solution:** Use `!important` to override platform defaults:

```css
.button {
  background-color: var(--marketably-brand-lime) !important;
  padding: 12px 24px !important;
}
```

---

## Quick Copy-Paste Snippets

### Primary Button

```html
<button style="background-color: #B9F040; color: #000000; padding: 12px 24px; border: none; border-radius: 8px; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; cursor: pointer; transition: background-color 200ms;">
  BUTTON TEXT
</button>
```

### Header with Logo

```html
<header style="background-color: #000000; padding: 16px 24px; border-bottom: 1px solid rgba(255,255,255,0.1);">
  <div style="max-width: 1280px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center;">
    <div style="font-size: 32px; font-weight: 700;">
      <span style="color: #FFFFFF;">market</span><span style="color: #B9F040;">ably</span>
    </div>
  </div>
</header>
```

### Section Container

```html
<section style="max-width: 1280px; margin: 0 auto; padding: 64px 24px;">
  <!-- Content here -->
</section>
```

---

## Support & Resources

**Full Documentation:**
- `STYLE_GUIDE.md` - Complete style guide
- `STYLE_GUIDE_QUICK_REF.md` - Quick reference
- `VISUAL_ASSETS_REFERENCE.md` - Image and asset guide
- `portable-design-tokens.css` - All CSS variables

**Tools:**
- Color contrast checker: https://webaim.org/resources/contrastchecker/
- Responsive testing: https://responsively.app/
- Accessibility testing: https://wave.webaim.org/

**Contact:**
- Email: david@rawlings.us
- Project: Marketably.ai

---

*Last Updated: November 23, 2025*

