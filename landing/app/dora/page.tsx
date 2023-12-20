//import KpiGrid from '@/interfaces/kpi-grid';
import TrackerCD from '@/components/async/observe-tracker';

export default function Test() {
  return (
    <>
      <div className="px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-lg text-neutral-900 dark:text-neutral-100">
          <TrackerCD />
        </div>
      </div>
    </>
  )
};

