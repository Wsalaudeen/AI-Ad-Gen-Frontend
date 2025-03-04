import clsx from 'clsx';
import type { Metadata } from 'next';

import { Manrope } from 'next/font/google';

import { TopProgressBarProvider } from '@/lib/nprogress/top-progress-bar-provider';
import QueryProvider from '@/lib/react-query/query-provider';

import { SonnerToaster } from '@/components/sonner-toaster';
import './globals.css';


const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'AI Adgen',
  description: 'AI Adgen',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(manrope.variable)}>
      <body className="dark font-manrope">
        <SonnerToaster />
        <QueryProvider>
          <TopProgressBarProvider>{children}</TopProgressBarProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
