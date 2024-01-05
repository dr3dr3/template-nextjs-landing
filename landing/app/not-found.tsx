import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="grid min-h-full place-items-center bg-neutral-100 dark:bg-neutral-900 px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-2xl font-semibold text-neutral-500">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-primary dark:text-secondary sm:text-5xl">Page not found</h1>
        <p className="mt-6 text-base leading-7">Sorry, we couldn’t find the page you’re looking for.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="/">Return Home</Link>
        </div>
      </div>
    </main>
  );
}
