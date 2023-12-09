import { Endpoints } from "@octokit/types";
import clsx from 'clsx';
import { StarIcon, FaceSmileIcon, FaceFrownIcon, HandThumbDownIcon } from '@heroicons/react/24/outline'
import { parseISO, differenceInBusinessDays } from 'date-fns';
import { display, inter } from '@/style/fonts';
import { env } from "process";
import { create } from "domain";
import { type } from "os";

type listDeployments = Endpoints["GET /repos/{owner}/{repo}/deployments"]["response"]["data"];

async function getDeploymentData() {
    const ghRepo = process.env.GITHUB_REPOSITORY || '';
    const ghOwner = process.env.GITHUB_REPOSITORY_OWNER || '';
    const repo = ghRepo.replace(/.*?\//, '');
    const ghUrl = `https://api.github.com/repos/${ghOwner}/${repo}/deployments?per_page=100`;
    const res = await fetch(ghUrl);
    
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
  
    return res.json()
};

export default async function KpiGrid() {

    const data:listDeployments = await getDeploymentData();

    const latest = Math.max( ...data.map( i => parseISO(i.created_at).getTime() ) );
    const earliest = Math.min( ...data.map( i => parseISO(i.created_at).getTime() ) );
    const bizDays = differenceInBusinessDays(latest, earliest);
    const countDeployments = data.filter( i => i.environment === 'github-pages' ).length;
    const df = countDeployments/bizDays;

    let dfObj = { stat: df.toFixed(2), frame: 'per day', performance: 'elite' };
    if (df < 0.14) dfObj = { stat: (df*20).toFixed(2), frame: 'per month' , performance: 'high' };
    if (df < 0.03) dfObj = { stat: (df*20).toFixed(2), frame: 'per year' , performance: 'medium' };
    if (df < 0.005) dfObj = { stat: (df*20).toFixed(2), frame: 'per year' , performance: 'low' };
    if (isNaN(df)) dfObj = { stat: 'ZERO', frame: '' , performance: '' };

    const stats = [
        { name: 'Deployment Frequency', stat: dfObj.stat, frame: dfObj.frame, performance: dfObj.performance },
        { name: 'Lead Time to Change',      stat: '58.16%',                                         frame: '56.14%',                             performance: 'high'     },
        { name: 'Change Failure Rate',      stat: '24.57%',                                         frame: '28.62%',                             performance: 'medium'   },
        { name: 'Mean Time to Recovery',    stat: '24.57%',                                         frame: '28.62%',                             performance: 'low'      },
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
                            <div className={clsx('inline-flex items-center rounded-full px-2 py-1 text-sm font-medium md:mt-2 lg:mt-0',
                                {
                                'bg-yellow-200 text-yellow-900': item.performance === 'elite',
                                'bg-green-200 text-green-900': item.performance === 'high',
                                'bg-pink-200 text-pink-900': item.performance === 'medium',
                                'bg-red-200 text-red-900': item.performance === 'low',
                                }
                                )}>
                                {item.performance === 'elite' ? (
                                <StarIcon
                                    className="-ml-1 mr-1 h-4 w-4 flex-shrink-0 self-center text-green-500"
                                    aria-hidden="true"
                                />
                                ) : ('')}
                                {item.performance === 'high' ? (
                                <FaceSmileIcon
                                    className="-ml-1 mr-1 h-4 w-4 flex-shrink-0 self-center text-red-500"
                                    aria-hidden="true"
                                />
                                ) : ('')}
                                {item.performance === 'medium' ? (
                                <FaceFrownIcon
                                    className="-ml-1 mr-1 h-4 w-4 flex-shrink-0 self-center text-red-500"
                                    aria-hidden="true"
                                />
                                ) : ('')}
                                {item.performance === 'low' ? (
                                <HandThumbDownIcon
                                    className="-ml-1 mr-1 h-4 w-4 flex-shrink-0 self-center text-red-500"
                                    aria-hidden="true"
                                />
                                ) : ('')}
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