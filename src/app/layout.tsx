import type { ChildrenProps } from 'react';
import type { Metadata } from 'next';

import { Footer, Header } from '@/components';

import '@/styles/globals.css';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'true') {
  import('../../mocks');
}

export const metadata: Metadata = {
  title: 'Next.js Tailwind Template',
  themeColor: 'purple',
  colorScheme: 'dark',
  icons: {
    icon: '/vercel.svg',
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html className="h-full" lang="en">
      <body className="flex h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
