import type { Metadata } from 'next';
import { display } from '@/style/fonts';
import '@/style/globals.css';


export const metadata: Metadata = {
  title: 'DevOps Demo',
  description: 'Demonstrating the value of DevOps practices.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${display.className} antialiased bg-neutral-100 dark:bg-neutral-900 text-primary-900 dark:text-primary-100`}>{children}</body>
    </html>
  )
}
