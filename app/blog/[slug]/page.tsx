import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPostBySlug, getAllPostSlugs } from '@/lib/blog'
import { Calendar, Clock, ArrowLeft, User, ExternalLink, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import type { Metadata } from 'next'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post Not Found | The Blue Ladder Group',
    }
  }

  const url = `https://www.theblueladdergrp.com/blog/${slug}`
  const imageUrl = post.image ? `https://www.theblueladdergrp.com${post.image}` : 'https://www.theblueladdergrp.com/meta-image.jpg'

  return {
    title: `${post.title} | The Blue Ladder Group Blog`,
    description: post.excerpt,
    authors: post.author ? [{ name: post.author }] : undefined,
    keywords: ['CALGreen', 'sustainable building', 'California Green Building Standards', 'EOS', 'construction', 'building compliance', 'green building'],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: url,
      siteName: 'The Blue Ladder Group',
      type: 'article',
      publishedTime: post.date,
      authors: post.author ? [post.author] : undefined,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
      creator: '@theblueladdergrp',
    },
    alternates: {
      canonical: url,
    },
  }
}

// Custom components for MDX
const components = {
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isExternal = props.href?.startsWith('http')
    return (
      <a
        {...props}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className={isExternal ? 'inline-flex items-center gap-1' : undefined}
      >
        {props.children}
        {isExternal && <ExternalLink className="h-4 w-4 inline-block" />}
      </a>
    )
  },
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  // JSON-LD structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.image ? `https://www.theblueladdergrp.com${post.image}` : 'https://www.theblueladdergrp.com/meta-image.jpg',
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author || 'Faith Mackarness',
      url: 'https://www.theblueladdergrp.com/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'The Blue Ladder Group',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.theblueladdergrp.com/theblueladdergroup-logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.theblueladdergrp.com/blog/${slug}`,
    },
  }

  return (
    <>
      {/* Add JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col">
      {/* Featured Image */}
      {post.image && (
        <div className="relative w-full h-[300px] md:h-[450px] lg:h-[500px] bg-muted">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent opacity-60" />
        </div>
      )}

      {/* Article Content */}
      <article className="py-16 lg:py-20 bg-background">
        <div className="container max-w-6xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-8">
              {/* Back Button */}
              <Button variant="link" asChild className="mb-8">
                <Link href="/blog" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
              {/* Article Header */}
              <header className="mb-10">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold architectural-title mb-6 leading-[1.15] tracking-tight">
                  {post.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-5 text-base mb-8">
                  {post.author && (
                    <div className="flex items-center gap-3 text-foreground font-semibold">
                      <div className="h-12 w-12 rounded-full overflow-hidden relative">
                        <Image
                          src="/profile.jpeg"
                          alt={post.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="text-lg">{post.author}</span>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-5 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      <span className="text-base">{new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    
                    {post.readTime && (
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5" />
                        <span className="text-base">{post.readTime}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Excerpt */}
                {post.excerpt && (
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed italic border-l-4 border-primary pl-8 py-4 bg-muted/30 rounded-r-lg">
                    {post.excerpt}
                  </p>
                )}
              </header>

              <div className="h-px bg-gradient-to-r from-primary via-primary/50 to-transparent mb-10" />

              {/* Article Body - Enhanced Styled Markdown */}
              <div className="blog-content">
                <MDXRemote source={post.content} components={components} />
              </div>

              {/* Article Footer Navigation */}
              <div className="mt-16 pt-8">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href="/blog" className="flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    Back to All Posts
                  </Link>
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                {/* Author Card */}
                {post.author && (
                  <Card className="border-2 border-primary/10">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold mb-4 architectural-title">About the Author</h3>
                      <div className="flex items-start gap-4 mb-4">
                        <div className="h-16 w-16 rounded-full overflow-hidden relative flex-shrink-0">
                          <Image
                            src="/profile.jpeg"
                            alt={post.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-bold text-lg">{post.author}</p>
                          <p className="text-sm text-muted-foreground">
                            ICC Certified CALGreen Inspector | EOS Integrator
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Founder of The Blue Ladder Group, bringing over 20 years of construction expertise in CALGreen compliance and operational excellence.
                      </p>
                    </CardContent>
                  </Card>
                )}

                {/* Quick Contact Card */}
                <Card className="bg-gradient-to-br from-primary to-secondary text-white border-0">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 architectural-title">Need Expert Guidance?</h3>
                    <p className="text-white/90 mb-4 text-sm leading-relaxed">
                      Get professional CALGreen inspection and EOS integration services for your project.
                    </p>
                    <Button asChild variant="default" className="w-full">
                      <Link href="/contact">Contact Us Today</Link>
                    </Button>
                    <div className="mt-4 pt-4 border-t border-white/20">
                      <p className="text-sm text-white/80">
                        <a href="tel:4087282287" className="hover:text-white transition-colors">
                          <Phone className="h-4 w-4 inline-block" /> 408.728.2287
                        </a>

                      </p>
                      <p className="mt-2 text-sm text-white/80">
                        <a href="mailto:Faith@TheBlueLadderGrp.com" className="hover:text-white transition-colors">
                          <Mail className="h-4 w-4 inline-block" /> Faith@TheBlueLadderGrp.com
                        </a>
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Related Links Card */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-4 architectural-title">Explore More</h3>
                    <div className="space-y-3">
                      <Link href="/services" className="block text-primary hover:underline text-sm font-medium">
                        → Our Services
                      </Link>
                      <Link href="/about" className="block text-primary hover:underline text-sm font-medium">
                        → About Us
                      </Link>
                      <Link href="/eos-for-contractors" className="block text-primary hover:underline text-sm font-medium">
                        → EOS for Contractors
                      </Link>
                      <Link href="/blog" className="block text-primary hover:underline text-sm font-medium">
                        → All Blog Posts
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* CTA Section - Enhanced */}
      <section className="relative py-20 bg-gradient-to-br from-muted via-muted to-muted/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20 shadow-lg">
              <CardContent className="p-8 md:p-12 text-center">
                <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                  Ready to Get Started?
                </div>
                <h2 className="text-3xl md:text-4xl font-bold architectural-title mb-4">
                  Transform Your Construction Business
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                  Contact us today to schedule a consultation for CALGreen services or EOS solutions. Let&apos;s build a sustainable future together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild className="text-base">
                    <Link href="/contact">Schedule a Consultation</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="text-base">
                    <Link href="/services">View Our Services</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}

