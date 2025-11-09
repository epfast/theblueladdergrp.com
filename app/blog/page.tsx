import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { PageHero } from "@/components/page-hero"
import { getAllPosts } from "@/lib/blog"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | The Blue Ladder Group',
  description: 'Insights on CALGreen, sustainable building practices, EOS implementation, and construction industry expertise from The Blue Ladder Group.',
  keywords: ['CALGreen blog', 'sustainable building tips', 'EOS implementation', 'construction expertise', 'green building standards', 'California building codes'],
  openGraph: {
    title: 'Blog | The Blue Ladder Group',
    description: 'Insights on CALGreen, sustainable building practices, EOS implementation, and construction industry expertise.',
    url: 'https://www.theblueladdergrp.com/blog',
    siteName: 'The Blue Ladder Group',
    type: 'website',
    images: [
      {
        url: 'https://www.theblueladdergrp.com/meta-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Blue Ladder Group Blog',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | The Blue Ladder Group',
    description: 'Insights on CALGreen, sustainable building practices, and EOS implementation.',
    images: ['https://www.theblueladdergrp.com/meta-image.jpg'],
    creator: '@theblueladdergrp',
  },
  alternates: {
    canonical: 'https://www.theblueladdergrp.com/blog',
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="flex flex-col">
      <PageHero
        title="Our Blog"
        description="Insights on sustainable building, CALGreen compliance, and operational excellence in construction"
        image="/services.jpg"
        imageAlt="Blog"
      />

      <section className="py-20">
        <div className="container">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No blog posts yet. Check back soon for insights on CALGreen, sustainable building, and EOS implementation!
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                  <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 hover:border-primary/20">
                    {post.image && (
                      <div className="relative h-56 overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent opacity-60" />
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                            CALGreen Insights
                          </span>
                        </div>

                        {/* Read Time Badge */}
                        {post.readTime && (
                          <div className="absolute top-4 right-4">
                            <div className="flex items-center gap-1 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium">
                              <Clock className="h-3 w-3" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                    
                    <CardContent className="p-6 flex flex-col bg-gradient-to-b from-background to-muted/20">
                      {/* Author */}
                      {post.author && (
                        <div className="flex items-center gap-2 mb-4">
                          <div className="h-8 w-8 rounded-full overflow-hidden relative flex-shrink-0 ring-2 ring-primary/20">
                            <Image
                              src="/profile.jpeg"
                              alt={post.author}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="text-sm">
                            <p className="font-semibold text-foreground">{post.author}</p>
                            <p className="text-xs text-muted-foreground">{new Date(post.date).toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric',
                              year: 'numeric' 
                            })}</p>
                          </div>
                        </div>
                      )}

                      {/* Title */}
                      <h2 className="text-xl font-bold mb-3 architectural-title group-hover:text-primary transition-colors leading-tight line-clamp-2">
                        {post.title}
                      </h2>
                      
                      {/* Excerpt */}
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3 flex-grow">
                        {post.excerpt}
                      </p>

                      {/* Read More Link */}
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <span className="text-sm font-semibold text-primary group-hover:gap-2 flex items-center gap-1 transition-all">
                          Read More 
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(post.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            year: 'numeric' 
                          })}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

