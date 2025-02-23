import type { Metadata } from 'next';
import { draftMode } from 'next/headers';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArticleHero, ArticleTileGrid } from '@/components/features/article';
import { Container } from '@/components/shared/container';
import { PageBlogPostOrder } from '@/lib/__generated/sdk';
import { client, previewClient } from '@/lib/client';

export async function generateMetadata(): Promise<Metadata> {
  const { isEnabled: preview } = await draftMode();
  // Cast to any to avoid TS errors on missing properties
  const gqlClient = (preview ? previewClient : client) as any;
  const landingPageData = await gqlClient.pageLanding({ preview });
  const page = landingPageData.pageLandingCollection?.items[0];

  const metadata: Metadata = {
    alternates: {
      canonical: '/',
    },
  };

  if (page?.seoFields) {
    metadata.title = page.seoFields.pageTitle;
    metadata.description = page.seoFields.pageDescription;
    metadata.robots = {
      follow: !page.seoFields.nofollow,
      index: !page.seoFields.noindex,
    };
  }

  return metadata;
}

export default async function Page() {
  const { isEnabled: preview } = await draftMode();
  const gqlClient = (preview ? previewClient : client) as any;

  const landingPageData = await gqlClient.pageLanding({ preview });
  const page = landingPageData.pageLandingCollection?.items[0];

  if (!page) {
    notFound();
  }

  const blogPostsData = await gqlClient.pageBlogPostCollection({
    limit: 6,
    order: PageBlogPostOrder.PublishedDateDesc,
    where: {
      slug_not: page?.featuredBlogPost?.slug,
    },
    preview,
  });
  const posts = blogPostsData.pageBlogPostCollection?.items;

  if (!page?.featuredBlogPost || !posts) {
    return;
  }

  return (
    <>
      <Container>
        <Link href={`/news/${page.featuredBlogPost.slug}`}>
          <ArticleHero article={page.featuredBlogPost} />
        </Link>
      </Container>

      {/* Translation feature removed – using a hardcoded title */}
      <Container className="my-8 md:mb-10 lg:mb-16">
        <h2 className="mb-4 text-3xl md:mb-6">Latest News & Events</h2>
        <ArticleTileGrid className="md:grid-cols-2 lg:grid-cols-3" articles={posts} />
      </Container>
    </>
  );
}
