import type { Metadata } from 'next';
import { inter } from '@/style/fonts';
import '@/style/globals.css';

export const metadata: Metadata = {
  title: 'DevOps Demo',
  description: 'Demonstrating the value of DevOps practices.',
}

export default function TestLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-neutral-50 dark:bg-neutral-950 text-primary-900 dark:text-primary-100`}>
        {children}
      </body>
    </html>
  )
}
