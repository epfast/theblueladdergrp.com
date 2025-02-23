import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

interface PageHeroProps {
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
  ctaButton?: {
    text: string;
    href: string;
  };
}

export function PageHero({ title, description, image, imageAlt, ctaButton }: PageHeroProps) {
  return (
    <section className="relative flex h-[500px] min-h-[550px] items-center lg:min-h-[650px]">
      <Image src={image} alt={imageAlt} fill className="object-cover" priority />
      <div className="absolute inset-0 bg-opacity-100 bg-gradient-to-r from-green-900/50 to-green-800/50 bg-clip-padding backdrop-blur-sm backdrop-filter" />
      <div className="container relative mx-auto">
        <div className="mx-auto max-w-4xl space-y-8 text-center text-white">
          <h1 className="architectural-title mx-auto text-5xl font-light md:text-6xl">{title}</h1>
          {description && <p className="mx-auto text-xl font-light md:text-2xl">{description}</p>}
          {ctaButton && (
            <Button size="lg" asChild>
              <Link href={ctaButton.href}>{ctaButton.text}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
