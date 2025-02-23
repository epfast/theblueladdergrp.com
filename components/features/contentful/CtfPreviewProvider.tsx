'use client';

import { ContentfulLivePreview, ContentfulLivePreviewInitConfig } from '@contentful/live-preview';
import { ContentfulLivePreviewProvider } from '@contentful/live-preview/react';
import { PropsWithChildren } from 'react';

export const ContentfulPreviewProvider = ({
  children,
  ...props
}: PropsWithChildren<ContentfulLivePreviewInitConfig>) => {
  return <ContentfulLivePreviewProvider {...props}>{children}</ContentfulLivePreviewProvider>;
};

ContentfulLivePreview.init({ locale: 'en-US' });
