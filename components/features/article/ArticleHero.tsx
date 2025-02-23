'use client';

import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from '@contentful/live-preview/react';
import { twMerge } from 'tailwind-merge';

// import { ArticleAuthor } from '@/components/features/article/ArticleAuthor';
// import { ArticleLabel } from '@/components/features/article/ArticleLabel';
import { CtfImage } from '@/components/features/contentful';
import { PageBlogPostFieldsFragment } from '@/lib/__generated/sdk';
import { formatDate } from '@/lib/utils';

interface ArticleHeroProps {
  article: PageBlogPostFieldsFragment;
  isFeatured?: boolean;
  isReversedLayout?: boolean;
  locale?: string;
}

export const ArticleHero = ({
  article,
  // isFeatured,
  isReversedLayout = false,
}: ArticleHeroProps) => {
  const inspectorProps = useContentfulInspectorMode({ entryId: article.sys.id });
  const { title, shortDescription, publishedDate } = useContentfulLiveUpdates(article);

  return (
    <div
      className={twMerge(
        `border-gray300 flex flex-col overflow-hidden rounded-lg border shadow`,
        isReversedLayout ? 'lg:flex-row-reverse' : 'lg:flex-row',
      )}
    >
      <div className="flex-1 basis-1/2" {...inspectorProps({ fieldId: 'featuredImage' })}>
        {article.featuredImage && (
          <CtfImage
            nextImageProps={{ className: 'w-full', priority: true, sizes: undefined }}
            {...article.featuredImage}
          />
        )}
      </div>

      <div className="relative flex flex-1 basis-1/2 flex-col justify-center px-4 py-6 lg:px-16 lg:py-12 xl:px-24">
        <div className="mb-2 flex flex-col flex-wrap items-start">
          {/* <ArticleAuthor article={article} /> */}
          {/* {isFeatured && (
            <ArticleLabel
              className={twMerge(
                'ml-auto pl-2 lg:absolute lg:top-8 xl:top-12',
                isReversedLayout ? 'lg:left-6 xl:left-12' : 'lg:right-6 xl:right-12',
              )}
            >
              Featured
            </ArticleLabel>
          )} */}
          <div
            className={twMerge(
              'text-gray600 block hidden text-xs',
              isReversedLayout ? 'lg:block' : '',
            )}
            {...inspectorProps({ fieldId: 'publishedDate' })}
          >
            <p>{formatDate(publishedDate)}</p>
          </div>
        </div>
        <h1 {...inspectorProps({ fieldId: 'title' })} className="text-2xl lg:text-4xl">
          {title}
        </h1>
        {shortDescription && (
          <p className="mt-2" {...inspectorProps({ fieldId: 'shortDescription' })}>
            {shortDescription}
          </p>
        )}
        <div
          className={twMerge('text-gray600 mt-2 text-xs', isReversedLayout ? 'lg:hidden' : '')}
          {...inspectorProps({ fieldId: 'publishedDate' })}
        >
          <p>{formatDate(publishedDate)}</p>
        </div>
      </div>
    </div>
  );
};
