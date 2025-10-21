# Deployment Information

## Last Successful Deployments

### Mobile Hero Optimization (2025-10-20)
**Commits:**
- `bee2fdf` - Fix: Reduce card transparency to prevent "wild" look on Edge
- `f1aa5ef` - Feat: Add swipe gestures + subtler 3D with dramatic depth
- `2d472f6` - Feat: DRAMATIC horizontal 3D carousel with perspective
- `5271d07` - Feat: Add 3D carousel option with animated stacked cards
- `43db9ee` - Feat: Add two mobile hero layout options with toggle
- `ed3e011` - Feat: Optimize mobile hero spacing and prominence
- `1d87391` - Fix: Remove Azure/OpenAI badge and increase mobile logo size
- `a14b426` - Feat: Modern swipeable service cards for mobile hero section

**What changed:**
- Mobile hero: Swipeable glassmorphism service cards
- 3D carousel with horizontal stacking
- Manual swipe gestures (left/right)
- Larger asight® logo on mobile (100px min)
- Removed "powered by Azure/OpenAI" badge

### Mobile CaseStudy Section (2025-10-20)
**Commits:**
- `81a28d6` - Feat: Instagram Story-style vertical scroll for mobile CaseStudy
- `828118b` - Trigger: Force Vercel redeploy

**What changed:**
- Sticky photo at bottom (Sophie grows while scrolling)
- Scroll-triggered animations for stats
- Glassmorphism cards floating over photo
- Instagram Story-like vertical scroll experience

## Git Configuration
**Repository:** https://github.com/daflosen/asightsolutions-website.git
**Branch:** main
**Remote:** origin

## Deployment Platform
**Platform:** Vercel
**Domain:** asightsolutions.com
**Auto-deploy:** Enabled (triggers on push to main)

## Troubleshooting Failed Deploys

If Vercel doesn't deploy after push:

1. **Check Vercel Dashboard** for build errors
2. **Trigger manual deploy:**
   ```bash
   echo "# Trigger - $(date)" >> .vercel-trigger
   git add .vercel-trigger
   git commit -m "Trigger: Force Vercel redeploy"
   git push origin main
   ```

3. **Clear browser cache:**
   - Hard reload: `Ctrl + Shift + R` (Windows/Linux)
   - Or use Incognito mode

4. **Check git status:**
   ```bash
   git status
   git log --oneline -5
   ```

## Last Updated
2025-10-20 - Mobile optimizations for Hero and CaseStudy sections
