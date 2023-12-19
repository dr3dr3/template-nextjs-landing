import type { Metadata } from 'next';
import '@/style/globals.css';
import { display } from '@/style/fonts';
import { Providers } from '@/app/providers';

export const metadata: Metadata = {
  title: 'DevOps Demo',
  description: 'Demonstrating the value of DevOps practices.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={`${display.className} antialiased bg-neutral-100 dark:bg-neutral-900 text-primary-900 dark:text-primary-100`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
};
