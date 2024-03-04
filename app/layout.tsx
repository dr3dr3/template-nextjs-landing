import '@/style/globals.css';
import { display } from '@/style/fonts';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Providers } from '@/app/providers';

export const metadata: Metadata = {
  title: 'DevOps Demo',
  description: 'Demonstrating the value of DevOps practices.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${display.className} antialiased bg-neutral-100 dark:bg-neutral-900 text-primary-900 dark:text-primary-100`}>
        <Providers>{children}</Providers>
        <Script src="darkmode-toggle.js" type="application/javascript" />
        <div className="absolute top-3 left-3">
          <button id="theme-toggle" type="button" className="hover:bg-neutral-200 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-300 dark:focus:ring-neutral-700 rounded-lg text-sm p-2.5">
            <svg id="theme-toggle-dark-icon" className="hidden w-4 h-4 fill-primary" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
            <svg id="theme-toggle-light-icon" className="hidden w-4 h-4 fill-secondary" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"></path>
            </svg>
          </button>
        </div>
      </body>
    </html>
  );
}
