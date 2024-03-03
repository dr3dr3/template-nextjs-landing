import { Suspense } from 'react';
import { clsx } from 'clsx';
import LoadingSpinner from '@/components/ui/loading-spinner';
import { Blip } from '@/components/ui/tech-radar-blip';
import data from '@/lib/static-data/cms.json';

export default async function Page() {
  const quadrants: IQuadrants[] = [
    { q: 'top-left', title: 'Tools' },
    { q: 'top-right', title: 'Techniques' },
    { q: 'bottom-left', title: 'Platforms' },
    { q: 'bottom-right', title: 'Frameworks' },
  ];

  const rings: IRings[] = [
    { r: 1, label: 'Adopt' },
    { r: 2, label: 'Trial' },
    { r: 3, label: 'Assess' },
    { r: 4, label: 'Hold' },
  ];

  const blips = data.filter((i) => Boolean(i.technologyRadar));
  let blip = 0;

  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <div className="px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-neutral-900 dark:text-neutral-100">
            <div className="grid grid-cols-2 gap-2">
              {quadrants.map((q) => (
                <Quadrant key={q.q} title={q.title} quadrant={q.q}>
                  {rings.map((r) => (
                    <Ring key={r.r} quadrant={q.q} ring={r.r} label={r.label}>
                      {blips
                        .filter((i) => i.technologyRadar!![0].context === 'DevOps Demo')
                        .filter((i) => i.technologyRadar!![0].quadrant === q.title.toLowerCase())
                        .filter((i) => i.technologyRadar!![0].rating === r.label.toLowerCase())
                        .map((i) => {
                          blip = blip + 1;
                          return <Blip key={i._id} blip={blip} label={i.technology || i.technique || 'empty'} quadrant={q.q} />;
                        })}
                    </Ring>
                  ))}
                </Quadrant>
              ))}
            </div>
          </div>
        </div>
      </Suspense>
    </>
  );
}

function Quadrant(props: IQuadrant) {
  const { children, quadrant, title } = props;
  return (
    <div
      className={clsx('flex border-2 border-neutral-200 dark:border-neutral-800 rounded-md overflow-hidden', {
        'flex-col-reverse': quadrant.includes('top'),
        'flex-col': quadrant.includes('bottom'),
      })}>
      {children}
      <div
        className={clsx('flex-none text-2xl font-bold px-4 py-4', {
          'text-left': quadrant.includes('left'),
          'text-right': quadrant.includes('right'),
        })}>
        {title}
      </div>
    </div>
  );
}

interface IQuadrant {
  children: React.ReactNode;
  quadrant: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  title: string;
}

interface IQuadrants {
  q: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  title: string;
}

function Ring(props: IRing) {
  const { children, quadrant, ring, label } = props;
  return (
    <div
      className={clsx('flex-none h-14', {
        'bg-gradient-to-l': quadrant.includes('left'),
        'bg-gradient-to-r': quadrant.includes('right'),
        'from-neutral-400 dark:from-neutral-600': ring === 1,
        'from-neutral-300 dark:from-neutral-700': ring === 2,
        'from-neutral-200 dark:from-neutral-800': ring === 3,
        'from-neutral-100 dark:from-neutral-900': ring === 4,
      })}>
      <div
        className={clsx('p-2 flex', {
          'flex-row-reverse': quadrant.includes('left'),
          'flex-row': quadrant.includes('right'),
        })}>
        {children}
        <div
          className={clsx('flex-grow text-sm pt-2 px-2', {
            'text-left': quadrant.includes('left'),
            'text-right': quadrant.includes('right'),
          })}>
          {label}
        </div>
      </div>
    </div>
  );
}

interface IRing {
  children?: React.ReactNode;
  quadrant: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  ring: number;
  label: string;
}

interface IRings {
  r: 1 | 2 | 3 | 4;
  label: string;
}
