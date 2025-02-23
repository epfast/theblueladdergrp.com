'use client';

import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import { twMerge } from 'tailwind-merge';

import { CtfImage } from '@/components/features/contentful';
import { ComponentRichImage } from '@/lib/__generated/sdk';

interface ArticleImageProps {
  image: ComponentRichImage;
}

export const ArticleImage = ({ image }: ArticleImageProps) => {
  const inspectorProps = useContentfulInspectorMode({ entryId: image.sys.id });
  return image.image ? (
    <figure className="my-4">
      <div className="flex justify-center" {...inspectorProps({ fieldId: 'image' })}>
        <CtfImage
          nextImageProps={{
            className: twMerge(
              'mt-4 mb-0 ',
              image.fullWidth
                ? 'md:w-screen md:max-w-[calc(100vw-40px)] md:shrink-0'
                : 'rounded-lg border border-gray-300',
            ),
          }}
          {...image.image}
        />
      </div>
      {image.caption && (
        <figcaption className="mt-2" {...inspectorProps({ fieldId: 'caption' })}>
          {image.caption}
        </figcaption>
      )}
    </figure>
  ) : null;
};
