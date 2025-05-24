import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { fonts } from '@/lib/fonts';
import { cn } from '@/lib/utils';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'TeamTrack',
  description: 'TeamTrack | AI powered customer support tool',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={cn(
        fonts,
        'scroll-smooth antialiased touch-manipulation select-none font-openrunde'
      )}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
