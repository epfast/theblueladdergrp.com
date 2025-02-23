import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito-sans',
});

export const metadata: Metadata = {
  title: 'CALGreen Expert & EOS Solutions | The Blue Ladder Group',
  description:
    'Expert CALGreen inspections and EOS solutions for construction businesses. Streamline operations and achieve sustainability with The Blue Ladder Group.',
  metadataBase: new URL('https://www.theblueladdergrp.com'),
  openGraph: {
    title: 'CALGreen Expert & EOS Solutions | The Blue Ladder Group',
    description:
      'Expert CALGreen inspections and EOS solutions for construction businesses. Streamline operations and achieve sustainability with The Blue Ladder Group.',
    images: [
      {
        url: '/meta-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Blue Ladder Group - CALGreen Expert & EOS Solutions',
      },
    ],
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={nunitoSans.variable}>
      <body className="font-sans">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
