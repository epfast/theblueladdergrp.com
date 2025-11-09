# Quick Deployment Guide

## 🚀 Deploy to Production in 3 Steps

### Step 1: Build & Test
```bash
# Install dependencies (if needed)
npm install

# Build for production
npm run build

# Test production build locally
npm start
```

Visit http://localhost:3000 and test thoroughly.

---

### Step 2: Deploy

#### Option A: Vercel (Recommended)
```bash
# Install Vercel CLI (if not installed)
npm i -g vercel

# Deploy to production
vercel --prod
```

#### Option B: Git Push (if auto-deploy is configured)
```bash
git add .
git commit -m "Blog system ready for production"
git push origin main
```

---

### Step 3: Verify

Visit your live site and check:
- ✅ Homepage loads
- ✅ `/blog` page works
- ✅ Individual blog post opens
- ✅ Navigation menu works
- ✅ Images display correctly
- ✅ External links open in new tabs

---

## 📋 Post-Deployment Tasks

### Submit to Search Engines
1. Visit [Google Search Console](https://search.google.com/search-console)
2. Add your property (website)
3. Verify ownership
4. Submit sitemap: `https://www.theblueladdergrp.com/sitemap.xml`

### Verify SEO
- Test social sharing preview: https://www.opengraph.xyz/
- Check structured data: https://search.google.com/test/rich-results
- Test mobile: https://search.google.com/test/mobile-friendly
- Check speed: https://pagespeed.web.dev/

---

## ✍️ Add New Blog Posts

1. Create new `.md` file in `content/blog/`
2. Copy template from `content/blog/_TEMPLATE.md`
3. Add frontmatter and content
4. Save file
5. Rebuild and redeploy (or auto-deploy)

Example:
```bash
cp content/blog/_TEMPLATE.md content/blog/my-new-post.md
# Edit the file
npm run build
vercel --prod
```

---

## 🔧 Useful Commands

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm start           # Run production server
npm run lint        # Check for errors

# Deployment
vercel --prod       # Deploy to Vercel production
```

---

## 📚 Documentation

- **Full Checklist:** `PRODUCTION_DEPLOYMENT_CHECKLIST.md`
- **SEO Details:** `SEO_IMPLEMENTATION_SUMMARY.md`
- **Blog Guide:** `QUICK_START_GUIDE.md`
- **Technical:** `BLOG_SYSTEM_OVERVIEW.md`

---

## ✅ SEO Features Included

✅ XML Sitemap (`/sitemap.xml`)
✅ robots.txt (`/robots.txt`)
✅ OpenGraph tags for social sharing
✅ Twitter cards
✅ JSON-LD structured data
✅ Canonical URLs
✅ Optimized meta tags
✅ Mobile responsive
✅ Fast loading (static generation)
✅ Image optimization

---

**Your blog is production-ready!** 🎉

Run `npm run build` and deploy!

