import { cn } from '@/lib/utils';
import localFont from 'next/font/local';
import { Inter } from 'next/font/google';
import { Geist_Mono } from 'next/font/google';

const openRunde = localFont({
  src: [
    {
      path: './fonts/OpenRunde-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/OpenRunde-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/OpenRunde-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/OpenRunde-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-openrunde',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist-mono',
});

export const fonts = cn(inter.variable, openRunde.variable, geistMono.variable);
