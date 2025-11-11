# Image Optimization Guide

Complete guide for image optimization in this Next.js project.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Optimize Images
```bash
npm run optimize-images
```

This will:
- Convert PNG/JPG to WebP
- Compress to max 200KB per image
- Save to `public/images/optimized/`

## 📦 What's Included

### 1. Image Optimization Script
**File:** `scripts/optimize-images.js`

**Features:**
- ✅ Converts PNG/JPG/JPEG to WebP
- ✅ Target max 200KB per image
- ✅ Automatically adjusts quality (80% → 60%)
- ✅ Resizes if needed to meet target size
- ✅ Color-coded console output
- ✅ Detailed optimization report

**Usage:**
```bash
# Run optimization
npm run optimize-images

# Or directly
node scripts/optimize-images.js
```

### 2. GitHub Action
**File:** `.github/workflows/optimize-images.yml`

**Triggers:**
- Push to `main` branch with changes in `public/images/`
- Manual trigger via GitHub Actions tab

**What it does:**
1. Checks out code
2. Installs dependencies
3. Runs image optimization
4. Commits optimized images back to repo
5. Generates optimization report

### 3. Optimized Image Component
**File:** `components/ui/OptimizedImage.tsx`

**Features:**
- ✅ Automatic WebP detection
- ✅ Lazy loading built-in
- ✅ Blur placeholder
- ✅ Error handling with fallback
- ✅ Loading skeleton
- ✅ Tries optimized version first

**Usage:**
```tsx
import OptimizedImage from '@/components/ui/OptimizedImage'

// Basic usage
<OptimizedImage
  src="/images/photo.png"
  alt="Description"
  width={800}
  height={600}
/>

// With fallback
<OptimizedImage
  src="/images/photo.png"
  alt="Description"
  width={800}
  height={600}
  fallbackSrc="/images/fallback.jpg"
/>
```

### 4. Lazy Section Component
**File:** `components/ui/LazySection.tsx`

**Features:**
- ✅ Intersection Observer API
- ✅ Only renders when in viewport
- ✅ Configurable threshold & root margin
- ✅ Custom fallback/skeleton
- ✅ Automatic cleanup

**Usage:**
```tsx
import LazySection from '@/components/ui/LazySection'

// Wrap heavy sections
<LazySection threshold={0.1} rootMargin="200px">
  <HeavyComponent />
</LazySection>

// With custom skeleton
<LazySection
  fallback={<div className="h-96 bg-gray-100 animate-pulse" />}
>
  <GallerySection />
</LazySection>
```

### 5. Optimized Next.js Config
**File:** `next.config.ts`

**Performance Features:**
- ✅ AVIF + WebP image formats
- ✅ Aggressive caching (1 year for static assets)
- ✅ Code splitting (vendor, common, framer-motion chunks)
- ✅ Package import optimization
- ✅ Console removal in production
- ✅ Security headers
- ✅ Compression enabled

## 🎯 Best Practices

### Image Optimization Strategy

1. **Source Images:**
   - Place original high-quality images in `public/images/`
   - Keep originals for future re-optimization

2. **Run Optimization:**
   ```bash
   npm run optimize-images
   ```

3. **Use Optimized Components:**
   ```tsx
   // ✅ Good - Uses optimized component
   <OptimizedImage src="/images/photo.png" alt="..." width={800} height={600} />

   // ❌ Avoid - Direct img tag
   <img src="/images/photo.png" alt="..." />
   ```

4. **Lazy Load Sections:**
   ```tsx
   // ✅ Good - Lazy load below-fold content
   <LazySection>
     <TeamSection />
   </LazySection>

   // ❌ Avoid - Loading everything upfront
   <TeamSection />
   ```

### File Organization

```
public/images/
├── original-photo.png          # Original (keep for re-optimization)
└── optimized/
    └── original-photo.webp     # Optimized version (auto-generated)
```

## 📊 Performance Metrics

### Before Optimization
- Total image size: ~17MB
- Format: PNG/JPG
- Page load: Slow

### After Optimization
- Total image size: < 2MB (target)
- Format: WebP (with fallback)
- Page load: Fast
- Lazy loading: Only loads visible content

## 🔄 Workflow

### Manual Workflow
1. Add new image to `public/images/`
2. Run `npm run optimize-images`
3. Use `OptimizedImage` component
4. Commit both original and optimized

### Automatic Workflow (GitHub Actions)
1. Add new image to `public/images/`
2. Commit and push to `main`
3. GitHub Action automatically:
   - Detects new/changed images
   - Runs optimization
   - Commits optimized versions
4. Vercel deploys with optimized images

## 🛠️ Troubleshooting

### Images not optimizing
```bash
# Check Sharp installation
npm list sharp

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### GitHub Action not running
1. Check `.github/workflows/optimize-images.yml` exists
2. Verify changes are in `public/images/` path
3. Check GitHub Actions tab for errors

### OptimizedImage showing error icon
- Verify image exists in `public/images/`
- Check browser console for errors
- Ensure fallbackSrc is provided for critical images

### WebP not loading in browser
- Component automatically falls back to original format
- Check browser DevTools Network tab
- Modern browsers support WebP (Chrome, Firefox, Safari 14+)

## 📈 Optimization Report Example

```
═══════════════════════════════════════
  Summary
═══════════════════════════════════════

  Processed: 12 images
  Total original size: 17,234.50 KB
  Total optimized size: 1,842.32 KB
  Total savings: 89.3% (15,392.18 KB)
  Images resized: 3

  Output directory: public/images/optimized/
```

## 🔍 Configuration

### Adjust Target File Size

Edit `scripts/optimize-images.js`:
```js
const CONFIG = {
  maxFileSizeKB: 200,  // Change to 150, 250, etc.
  webpQuality: 80,     // Starting quality
  minQuality: 60,      // Minimum quality
};
```

### Change Lazy Loading Threshold

```tsx
<LazySection
  threshold={0.5}      // 50% visible before loading (default: 0.1)
  rootMargin="500px"   // Start loading 500px before viewport (default: 200px)
>
  <Content />
</LazySection>
```

## 🎨 Next Steps

1. **Run initial optimization:**
   ```bash
   npm run optimize-images
   ```

2. **Update existing components:**
   - Replace `<img>` with `<OptimizedImage>`
   - Replace Next.js `<Image>` with `<OptimizedImage>` for better error handling

3. **Add lazy loading:**
   - Wrap below-fold sections with `<LazySection>`
   - Especially: Team, Testimonials, CaseStudy, FAQ sections

4. **Test on GTmetrix:**
   - Check image sizes
   - Verify WebP usage
   - Confirm lazy loading

5. **Monitor performance:**
   - Lighthouse scores
   - Core Web Vitals
   - Time to Interactive (TTI)

## 📚 Resources

- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [WebP Format](https://developers.google.com/speed/webp)
- [Sharp Documentation](https://sharp.pixelplumbing.com/)
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

---

**Last Updated:** 2025-11-11
**Project:** asightsolutions
**Stack:** Next.js 14 + React + TypeScript
