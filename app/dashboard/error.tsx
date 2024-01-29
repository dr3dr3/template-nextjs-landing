'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <div className="mt-8 text-5xl">😣</div>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-primary dark:text-secondary sm:text-5xl">Something went wrong </h1>
        <p className="mt-6 text-base leading-7">We will investigate and apologize 🙏</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            onClick={() => reset()}
            className="rounded-md bg-primary dark:bg-secondary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Try again
          </a>
          <a href="#" className="text-sm font-semibold">
            Contact support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  );
}
