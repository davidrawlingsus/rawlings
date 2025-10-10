# Bar Chart Safari iOS Debugging Log

## Problem Statement
The bar chart in the Impact section (`ImpactChart.tsx`) is not visible at all in Safari on iPhone, but works fine in desktop browser emulation.

## Testing Environment
- **Device:** iPhone (Safari browser)
- **Working:** Desktop browsers (including Safari desktop in mobile emulation mode)
- **Not Working:** Safari on actual iPhone

## Root Cause Analysis Completed

### Issues Identified:
1. **`scaleY` transforms** - Safari iOS has poor support for `scaleY` transforms on SVG `<rect>` elements
2. **Negative y coordinate** - One bar had `y="-5"` which is outside viewBox bounds `"0 0 614 287"`
3. **Transform-origin on SVG** - Safari iOS doesn't handle `transform-origin` well via inline styles
4. **Framer Motion + SVG** - Potential compatibility issues with Framer Motion applying transforms to SVG elements on mobile Safari

### Technical Details:
- Chart uses Framer Motion for animations
- 26 total bars (18 baseline in gray, 8 highlight in green)
- Animation: bars grow from bottom using `scaleY: 0` → `scaleY: 1`
- ViewBox: `"0 0 614 287"`

## Attempted Fixes

### Attempt #1: CSS transform-origin with transform-box
**Date:** Initial attempt
**Approach:** 
- Added CSS class `.chart-bar` with `transform-origin: center bottom` and `transform-box: fill-box`
- Applied class to all `motion.rect` elements
- Removed inline `style={{ transformOrigin: "bottom" }}`

**Result:** ❌ Did not fix the issue
**Why it failed:** The core problem is likely not transform-origin but the `scaleY` transform itself or how Framer Motion applies it to SVG on Safari iOS

**Reverted:** Yes

### Attempt #2: Replace scaleY with height/y animation
**Date:** Second attempt
**Approach:**
- Changed animation from `scaleY` transform to direct `height` and `y` attribute animation
- Modified `createBarVariants` to animate height from 0 to final value and y from bottom to final position
- Removed y/height attributes from JSX (now controlled by animation)
- Fixed negative y coordinate (changed to y=0)

**Result:** ❌ Did not fix the issue
**Why it failed:** Unknown - possibly Framer Motion still not compatible with Safari iOS for SVG animations

**Reverted:** Yes

## Current Test in Progress

### Attempt #3: Plain SVG bars without animation
**Date:** Current
**Approach:**
- Converted 5 bars to plain SVG `<rect>` elements (no Framer Motion)
- 3 gray baseline bars + 2 green highlight bars
- All other bars remain animated for comparison
- This tests if the issue is rendering vs animation-specific

**Testing:** Please check on Safari iOS if you can see these 5 static bars:
- Gray bar at x=0
- Gray bar at x=24
- Gray bar at x=48
- Green bar at x=456
- Green bar at x=480

**Commit:** `ba90836`

## Next Steps to Investigate

1. **Check if bars are rendering at all** (opacity issue vs missing entirely) - IN PROGRESS
2. **Test without Framer Motion** - Use plain SVG to see if it renders - IN PROGRESS
3. **Check viewport intersection observer** - `whileInView` may not trigger on iOS
4. **Verify SVG viewBox scaling** - Container scaling with `md:scale-[1.8]` on mobile
5. **Test with CSS animations** instead of Framer Motion
6. **Check for JavaScript errors** in Safari iOS console
7. **Simplify animation** - Remove animation entirely to see if bars appear - IN PROGRESS
8. **Check initial state** - Bars may be stuck in "hidden" state

## Resources
- [Framer Motion SVG Support](https://www.framer.com/motion/component/#svg)
- [Safari iOS SVG Rendering Issues](https://caniuse.com/svg)
