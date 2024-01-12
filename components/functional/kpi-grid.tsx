import clsx from 'clsx';
import { display } from '@/style/fonts';
import { StarIcon, HandThumbUpIcon, FaceFrownIcon, HandThumbDownIcon } from '@heroicons/react/16/solid';
import { getDeploymentFrequency, getChangeFailureRate, getMeanTimeToRecover, getLeadTimeToChange } from '@/lib/api/ssg-at-build/github';

export default async function KpiGrid() {
  const df = await getDeploymentFrequency();
  const cfr = await getChangeFailureRate();
  const mttr = await getMeanTimeToRecover();
  const lttc = await getLeadTimeToChange();

  let dfObj = { stat: df.toFixed(1), frame: 'per day', performance: 'elite' };
  if (df < 1.0) dfObj = { stat: (df * 20).toFixed(1), frame: 'per month', performance: 'high' };
  if (df < 0.03) dfObj = { stat: (df * 280).toFixed(1), frame: 'per year', performance: 'medium' };
  if (df < 0.005) dfObj = { stat: (df * 280).toFixed(1), frame: 'per year', performance: 'low' };
  if (isNaN(df)) dfObj = { stat: 'ZERO', frame: '', performance: '' };

  let cfrObj = { stat: (cfr * 100).toFixed(1), frame: 'percent', performance: 'elite' };
  if (cfr > 0.15) cfrObj = { stat: (cfr * 100).toFixed(1), frame: 'percent', performance: 'high' };
  if (cfr > 0.3) cfrObj = { stat: (cfr * 100).toFixed(1), frame: 'percent', performance: 'medium' };
  if (cfr > 0.45) cfrObj = { stat: (cfr * 100).toFixed(1), frame: 'percent', performance: 'low' };
  if (isNaN(cfr)) cfrObj = { stat: 'ZERO', frame: '', performance: '' };

  let mttrObj = { stat: mttr.toFixed(1), frame: 'average (mins)', performance: 'elite' };
  if (mttr > 60) mttrObj = { stat: (mttr / 60).toFixed(1), frame: 'average (hours)', performance: 'high' };
  if (mttr > 1440) mttrObj = { stat: ((mttr / 60) * 24).toFixed(1), frame: 'average (days)', performance: 'medium' };
  if (mttr > 10080) mttrObj = { stat: ((mttr / 60) * 24 * 7).toFixed(1), frame: 'average (weeks)', performance: 'low' };
  if (isNaN(mttr)) mttrObj = { stat: 'ZERO', frame: '', performance: '' };

  let lttcObj = { stat: (lttc / 60).toFixed(1), frame: 'average (hours)', performance: 'elite' };
  if (lttc / 60 > 24) lttcObj = { stat: ((lttc / 60) * 24).toFixed(1), frame: 'average (days)', performance: 'high' };
  if (lttc / 60 > 720) lttcObj = { stat: ((lttc / 60) * 24 * 30).toFixed(1), frame: 'average (months)', performance: 'medium' };
  if (lttc / 60 > 4368) lttcObj = { stat: ((lttc / 60) * 24 * 182).toFixed(1), frame: 'average (months)', performance: 'low' };
  if (isNaN(lttc)) lttcObj = { stat: 'ZERO', frame: '', performance: '' };

  const stats = [
    { name: 'Deployment Frequency', stat: dfObj.stat, frame: dfObj.frame, performance: dfObj.performance },
    { name: 'Lead Time to Change', stat: lttcObj.stat, frame: lttcObj.frame, performance: lttcObj.performance },
    { name: 'Change Failure Rate', stat: cfrObj.stat, frame: cfrObj.frame, performance: cfrObj.performance },
    { name: 'Mean Time to Recovery', stat: mttrObj.stat, frame: mttrObj.frame, performance: mttrObj.performance },
  ];

  return (
    <div className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-4xl text-neutral-900 dark:text-neutral-100">
        <div className="mt-5 overflow-hidden grid grid-cols-1 md:grid-cols-2">
          {stats.map((item) => (
            <div key={item.name} className="p-1">
              <div className="px-4 py-4 sm:p-6 bg-neutral-50 dark:bg-neutral-950 rounded-xl shadow">
                <div className={`${display.className} text-primary dark:text-secondary text-xl font-bold`}>{item.name}</div>
                <div className="mt-1 flex items-baseline justify-between md:block lg:flex">
                  <div className="flex items-baseline text-3xl font-bold">
                    {item.stat}
                    <span className="ml-2 text-sm font-medium text-neutral-500">{item.frame}</span>
                  </div>
                  <div
                    className={clsx('inline-flex items-center rounded-full px-2 py-1 text-xs font-normal md:mt-2 lg:mt-0', {
                      'bg-yellow-200 text-yellow-700': item.performance === 'elite',
                      'bg-green-200 text-green-700': item.performance === 'high',
                      'bg-orange-200 text-orange-700': item.performance === 'medium',
                      'bg-red-200 text-red-700': item.performance === 'low',
                    })}>
                    {item.performance === 'elite' ? <StarIcon className="-ml-1 mr-1 h-4 w-4 flex-shrink-0 self-center" aria-hidden="true" /> : ''}
                    {item.performance === 'high' ? <HandThumbUpIcon className="-ml-1 mr-1 h-4 w-4 flex-shrink-0 self-center -scale-y-100 -rotate-180" aria-hidden="true" /> : ''}
                    {item.performance === 'medium' ? <HandThumbDownIcon className="-ml-1 mr-1 h-4 w-4 flex-shrink-0 self-center" aria-hidden="true" /> : ''}
                    {item.performance === 'low' ? <FaceFrownIcon className="-ml-1 mr-1 h-4 w-4 flex-shrink-0 self-center" aria-hidden="true" /> : ''}
                    {item.performance}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
