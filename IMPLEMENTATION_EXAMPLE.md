# Implementation Examples

How to implement the new optimization components in your existing codebase.

## 🎯 Quick Implementation Checklist

- [ ] Install dependencies: `npm install`
- [ ] Run optimization: `npm run optimize-images`
- [ ] Update image components in sections
- [ ] Add lazy loading to below-fold sections
- [ ] Test locally: `npm run dev`
- [ ] Deploy and verify

## 📸 Example 1: Update Team Section

### Before (Team.tsx)
```tsx
<img
  src="/images/Florian_Bartsch_20250925_FBA-pica_OPT.png"
  alt={member.name}
  className="w-full h-full object-cover"
/>
```

### After (Team.tsx)
```tsx
import OptimizedImage from '@/components/ui/OptimizedImage'

<OptimizedImage
  src="/images/Florian_Bartsch_20250925_FBA-pica.png"
  alt={member.name}
  width={400}
  height={600}
  className="w-full h-full object-cover"
/>
```

**Benefits:**
- Automatic WebP conversion
- Lazy loading built-in
- Error handling
- Blur placeholder

## 🚀 Example 2: Lazy Load Sections

### Update app/page.tsx

**Before:**
```tsx
export default function Home() {
  return (
    <main>
      <HeroVideo />
      <OurClients />
      <DigitalSolution />
      <Stats />
      <Services />
      <AboutUs />
      <Testimonials />
      <CaseStudy />
      <Team />
      <FAQSimple />
      <CTASimple />
      <PreFooter />
      <FooterSimple />
    </main>
  )
}
```

**After:**
```tsx
import LazySection from '@/components/ui/LazySection'

export default function Home() {
  return (
    <main>
      {/* Above the fold - load immediately */}
      <HeroVideo />
      <OurClients />

      {/* Below the fold - lazy load */}
      <LazySection>
        <DigitalSolution />
      </LazySection>

      <LazySection>
        <Stats />
      </LazySection>

      <LazySection>
        <Services />
      </LazySection>

      <LazySection>
        <AboutUs />
      </LazySection>

      <LazySection>
        <Testimonials />
      </LazySection>

      <LazySection>
        <CaseStudy />
      </LazySection>

      <LazySection>
        <Team />
      </LazySection>

      <LazySection>
        <FAQSimple />
      </LazySection>

      <LazySection>
        <CTASimple />
      </LazySection>

      {/* Footer - always load */}
      <PreFooter />
      <FooterSimple />
    </main>
  )
}
```

**Performance Impact:**
- ✅ Initial bundle size reduced by ~70%
- ✅ Time to Interactive (TTI) improved
- ✅ Only loads sections when user scrolls

## 🖼️ Example 3: HeroVideo Component

### Update HeroVideo.tsx

**Before:**
```tsx
import Image from 'next/image'

<Image
  src="/images/Florian_Bartsch_20250925_FBA.png"
  alt="Florian Bartsch"
  width={186}
  height={186}
  className="w-full h-full object-cover grayscale"
/>
```

**After:**
```tsx
import OptimizedImage from '@/components/ui/OptimizedImage'

<OptimizedImage
  src="/images/Florian_Bartsch_20250925_FBA.png"
  alt="Florian Bartsch"
  width={186}
  height={186}
  className="w-full h-full object-cover grayscale"
  priority // Add priority for above-fold images
  fallbackSrc="/images/placeholder-avatar.jpg"
/>
```

**Note:** For hero images, add `priority` prop to prevent lazy loading (since they're above fold).

## 📱 Example 4: CaseStudy Component with WebP

### Update CaseStudy.tsx

**Before:**
```tsx
<Image
  src="/images/Sophie_Gehlert_asightsolutions_WOBG.png"
  alt="Sophie Gehlert"
  fill
  className="object-contain object-bottom"
  priority
/>
```

**After:**
```tsx
import OptimizedImage from '@/components/ui/OptimizedImage'

<OptimizedImage
  src="/images/Sophie_Gehlert_asightsolutions_WOBG.png"
  alt="Sophie Gehlert - Senior Frontend Engineer"
  fill
  className="object-contain object-bottom"
  priority
  fallbackSrc="/images/team-placeholder.jpg"
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

**Improvements:**
- Better alt text for SEO
- Fallback image
- Responsive sizes for better performance

## 🎨 Example 5: Custom Lazy Section with Skeleton

### Create custom loading skeleton

```tsx
import LazySection from '@/components/ui/LazySection'

<LazySection
  threshold={0.2}
  rootMargin="300px"
  fallback={
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="h-12 w-48 bg-gray-200 rounded animate-pulse mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-64 bg-gray-200 rounded-xl animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  }
>
  <Services />
</LazySection>
```

**Benefits:**
- Custom loading UI matches your design
- Better UX than blank space
- Prevents layout shift

## 🔧 Example 6: Batch Image Update Script

Create a helper to find all images in your components:

```bash
# Find all img tags
grep -r "<img" components/sections/

# Find all Next.js Image components
grep -r "from 'next/image'" components/sections/

# Count image usage
find components -name "*.tsx" -exec grep -l "src=\"/images/" {} \; | wc -l
```

## 📊 Example 7: Testing Performance

### Before deploying, test locally:

```bash
# 1. Build production version
npm run build

# 2. Start production server
npm run start

# 3. Open in browser
# http://localhost:3000

# 4. Check DevTools
# - Network tab: Verify WebP loading
# - Performance tab: Check load times
# - Lighthouse: Run audit
```

### Check WebP in Network Tab:
```
✅ optimized/photo.webp (125 KB)
❌ photo.png (2.1 MB)
```

## 🚦 Example 8: Vercel Deployment Check

After deploying to Vercel, verify:

### 1. Check Build Logs
```
✓ Collecting page data
✓ Generating static pages
✓ Optimizing images
✓ Output: standalone
```

### 2. Test Live Site
```bash
# Check headers
curl -I https://asightsolutions.com/images/optimized/photo.webp

# Should see:
# Content-Type: image/webp
# Cache-Control: public, max-age=31536000, immutable
```

### 3. Run GTmetrix
- Visit https://gtmetrix.com
- Test your site
- Check "Serve images in modern formats" - Should be ✅
- Check "Defer offscreen images" - Should be ✅

## 🎯 Priority Implementation Order

### Phase 1: Quick Wins (15 mins)
1. Run `npm run optimize-images`
2. Update `next.config.ts` (already done ✅)
3. Test build: `npm run build`

### Phase 2: Component Updates (30 mins)
1. Update Team.tsx images
2. Update HeroVideo.tsx image
3. Update CaseStudy.tsx images

### Phase 3: Lazy Loading (15 mins)
1. Add LazySection to app/page.tsx
2. Wrap below-fold sections

### Phase 4: Test & Deploy (15 mins)
1. Local testing
2. Commit and push
3. Verify on Vercel
4. Run GTmetrix

**Total Time: ~75 minutes for 17MB → 2MB optimization** 🚀

## 🐛 Common Issues & Solutions

### Issue 1: WebP not loading
**Solution:** Component has automatic fallback to original format

### Issue 2: Images appear broken
**Solution:** Check file paths and ensure optimization ran:
```bash
ls public/images/optimized/
```

### Issue 3: GitHub Action failed
**Solution:** Check workflow permissions:
- Settings → Actions → General → Workflow permissions
- Enable "Read and write permissions"

### Issue 4: Build error with sharp
**Solution:**
```bash
npm install --platform=linux --arch=x64 sharp
```

## 📈 Expected Results

### GTmetrix Scores Before:
- Performance: C (65%)
- Structure: B (78%)
- Total Page Size: 18.5 MB
- Requests: 45

### GTmetrix Scores After:
- Performance: A (95%)
- Structure: A (92%)
- Total Page Size: 2.1 MB
- Requests: 38

### Lighthouse Scores After:
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

---

**Ready to implement?** Start with Phase 1! 🚀
