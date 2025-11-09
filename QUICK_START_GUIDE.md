# Blog System Quick Start Guide

## 🎉 Your Blog is Ready!

The blog system has been successfully integrated into your website with a design that perfectly matches your existing theme.

---

## 📍 Where to Find Your Blog

- **Blog Listing**: Visit `/blog` to see all blog posts
- **Navigation**: Blog link added to your header menu
- **Sample Post**: One example post is already live to demonstrate the system

---

## ✍️ Adding a New Blog Post (Super Easy!)

### Step 1: Copy the Template
```bash
cd content/blog
cp _TEMPLATE.md my-new-post-title.md
```

### Step 2: Edit the Frontmatter
Open your new file and update the metadata at the top:

```yaml
---
title: Your Amazing Blog Post Title
date: 2024-11-08
excerpt: A compelling description that makes people want to read more. Keep it to 1-2 sentences.
author: Faith Mackarness
image: /blog-image.jpg
readTime: 5 min read
---
```

### Step 3: Write Your Content
Use markdown to write your content below the frontmatter:

```markdown
## Introduction

Your content here...

## Main Points

- Bullet point one
- Bullet point two

## Conclusion

Wrap it up!
```

### Step 4: Add Images (Optional)
1. Place image files in `/public` directory
2. Reference them: `![Description](/image-name.jpg)`

### Step 5: Save and Done! ✅
Your blog post is now live! The URL will be `/blog/my-new-post-title`

---

## 📸 Adding Images

### For Hero Images
1. Add image to `/public/` directory
2. Reference in frontmatter: `image: /your-image.jpg`
3. Recommended size: 1200x600px (2:1 ratio)

### For Inline Images
```markdown
![Image description](/image-name.jpg)
```

---

## 🎨 Styling Your Content

### Headings
```markdown
## Main Section (H2)
### Subsection (H3)
#### Detail Section (H4)
```

### Emphasis
```markdown
**Bold text** for strong emphasis
*Italic text* for subtle emphasis
```

### Lists
```markdown
Bullet list:
- Point one
- Point two

Numbered list:
1. First step
2. Second step
```

### Links
```markdown
[Link text](/contact)
[External link](https://example.com)
```

### Blockquotes
```markdown
> This is an important callout or quote
```

### Code
```markdown
Inline code: `code here`

Code block:
```javascript
const example = "code";
```
```

---

## 🔍 Tips for Great Blog Posts

### 1. Write Compelling Titles
✅ Good: "5 Ways to Reduce CALGreen Compliance Costs"
❌ Avoid: "CALGreen Post"

### 2. Create Strong Excerpts
Your excerpt appears in:
- Blog listing cards
- Search engine results
- Social media shares

Make it count!

### 3. Use Images
Posts with images get more engagement. Use:
- Hero images for visual appeal
- Inline images to break up text
- Diagrams to explain concepts

### 4. Structure with Headings
Break content into scannable sections with H2 and H3 headings.

### 5. Include CTAs
End posts with a call-to-action:
```markdown
**Ready to get started?** [Contact us today](/contact) for a consultation.
```

---

## 📋 Content Ideas

### CALGreen Topics
- Code updates and changes
- Common compliance challenges
- Cost-saving strategies
- Case studies

### EOS Topics
- Implementation tips
- Success stories
- Leadership insights
- Process improvements

### Sustainable Building
- Green building trends
- Material selection
- Energy efficiency
- Water conservation

### Industry Insights
- Construction best practices
- Regulatory changes
- Technology adoption
- Project management

---

## 🚀 Publishing Workflow

### Local Development
1. Create/edit blog post in `/content/blog/`
2. Run `npm run dev`
3. Visit `http://localhost:3000/blog` to preview
4. Review and refine

### Production Deployment
1. Commit your new blog post
2. Push to your repository
3. Deploy automatically (or manually)
4. Your post is live!

---

## 📁 File Organization

```
content/blog/
├── _TEMPLATE.md                    ← Copy this to start new posts
├── README.md                        ← Detailed documentation
├── understanding-calgreen-2022.md  ← Example post
└── your-new-post.md                ← Your posts go here!
```

**Note**: Files starting with `_` (underscore) won't appear on the blog. This keeps templates and drafts hidden.

---

## 🎯 SEO Best Practices

### Meta Information
Your frontmatter automatically creates:
- Page title: `{post.title} | The Blue Ladder Group Blog`
- Meta description: Your excerpt
- Open Graph tags for social sharing

### Optimize Your Content
- Use descriptive headings (H2, H3)
- Include relevant keywords naturally
- Add alt text to images
- Link to related pages/posts
- Keep URLs clean (they're based on filename)

---

## ❓ Common Questions

### Q: How do I edit an existing post?
**A:** Just edit the `.md` file in `/content/blog/` and save. Changes appear immediately in development, after deployment in production.

### Q: Can I schedule posts for future dates?
**A:** While posts with future dates will display that date, they'll be visible immediately. Consider keeping draft posts outside the `/content/blog/` directory until you're ready to publish.

### Q: How do I delete a post?
**A:** Simply delete the `.md` file from `/content/blog/`. It will be removed from the blog on the next build.

### Q: Can I use HTML in markdown?
**A:** Yes! Markdown supports inline HTML if you need advanced formatting.

### Q: What about drafts?
**A:** Name draft files starting with underscore (e.g., `_draft-post.md`) and they won't appear on the blog.

---

## 🎨 Design Details

Your blog uses:
- **Colors**: Your existing green palette
- **Typography**: Nunito Sans (same as site)
- **Components**: Card, Button, PageHero
- **Layout**: Responsive grid (1/2/3 columns)

Everything matches your existing design perfectly!

---

## 🆘 Need Help?

Reference these files:
- `content/blog/README.md` - Detailed documentation
- `content/blog/_TEMPLATE.md` - Template for new posts
- `BLOG_SYSTEM_OVERVIEW.md` - Technical overview

---

## 🎊 You're All Set!

Your blog system is production-ready. Just add markdown files and you're publishing! 

**Start with the sample post** to see how everything works, then create your own using the template.

Happy blogging! 📝

