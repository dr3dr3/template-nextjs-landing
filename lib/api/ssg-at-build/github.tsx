import { Endpoints } from '@octokit/types';
import { Color } from '@tremor/react';
import { parseISO, differenceInBusinessDays, differenceInMinutes } from 'date-fns';

type listDeployments = Endpoints['GET /repos/{owner}/{repo}/deployments']['response']['data'];
type listWorkflowRunsForRepo = Endpoints['GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs']['response']['data'];
type listIssues = Endpoints['GET /repos/{owner}/{repo}/issues']['response']['data'];
type getUser = Endpoints['GET /users/{username}']['response']['data'];

type Tracker = [
  {
    color: Color;
    tooltip: string;
  },
];

export async function getUser() {
  const ghRepo = process.env.GITHUB_REPOSITORY || '';
  const ghOwner = ghRepo.replace(/\/.*/, '');
  const ghUrl = `https://api.github.com/users/${ghOwner}`;
  const res = await fetch(ghUrl, { next: { revalidate: 3600 } });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  const data: getUser = await res.json();

  return data;
}

export async function getDeploymentFrequency() {
  const ghRepo = process.env.GITHUB_REPOSITORY || '';
  const ghOwner = process.env.GITHUB_REPOSITORY_OWNER || '';
  const repo = ghRepo.replace(/.*?\//, '');
  const ghUrl = `https://api.github.com/repos/${ghOwner}/${repo}/deployments?per_page=100`;
  const res = await fetch(ghUrl, { next: { revalidate: 3600 } });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  };

  const data: listDeployments = await res.json();
  const latest = Math.max(...data.map((i) => parseISO(i.created_at).getTime()));
  const earliest = Math.min(...data.map((i) => parseISO(i.created_at).getTime()));
  const bizDays = differenceInBusinessDays(latest, earliest);
  const countDeployments = data.filter((i) => i.environment === 'github-pages').length;
  const df = countDeployments / bizDays;

  return df;
}

export async function getChangeFailureRate() {
  const ghRepo = process.env.GITHUB_REPOSITORY || '';
  const ghOwner = process.env.GITHUB_REPOSITORY_OWNER || '';
  const repo = ghRepo.replace(/.*?\//, '');
  const ghUrl = `https://api.github.com/repos/${ghOwner}/${repo}/actions/workflows/on-push-main.yml/runs?per_page=100`;
  const res = await fetch(ghUrl, { next: { revalidate: 3600 } });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  const data: listWorkflowRunsForRepo = await res.json();
  const failed = data.workflow_runs.filter((i) => i.conclusion === 'failure').length;
  const total = data.total_count;
  const cfr = failed / total;

  return cfr;
}

export async function getMeanTimeToRecover() {
  const ghRepo = process.env.GITHUB_REPOSITORY || '';
  const ghOwner = process.env.GITHUB_REPOSITORY_OWNER || '';
  const repo = ghRepo.replace(/.*?\//, '');
  const ghUrl = `https://api.github.com/repos/${ghOwner}/${repo}/issues?labels=bug&state=closed&per_page=100`;
  const res = await fetch(ghUrl, { next: { revalidate: 3600 } });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  const data: listIssues = await res.json();
  let arr: number[] = [];
  const dataDiff = data.map((i) => {
    arr.push(differenceInMinutes(parseISO(i.closed_at || i.created_at).getTime(), parseISO(i.created_at).getTime()));
  });
  let sum = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  const mttr = sum / dataDiff.length;

  // return in minutes
  return mttr;
}

export async function getLeadTimeToChange() {
  const ghRepo = process.env.GITHUB_REPOSITORY || '';
  const ghOwner = process.env.GITHUB_REPOSITORY_OWNER || '';
  const repo = ghRepo.replace(/.*?\//, '');
  const ghUrl = `https://api.github.com/repos/${ghOwner}/${repo}/issues?labels=feature&state=closed&per_page=30`;
  const res = await fetch(ghUrl, { next: { revalidate: 3600 } });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  const data: listIssues = await res.json();
  const arr: number[] = [];
  const dataDiff = data.map((i) => {
    arr.push(differenceInMinutes(parseISO(i.closed_at || i.created_at).getTime(), parseISO(i.created_at).getTime()));
  });
  let sum = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  const lttc = sum / dataDiff.length;

  // return in minutes
  return lttc;
}

export async function getContinuousDeploymentWorkflow() {
  const ghRepo = process.env.REPO_PROD || '';
  const ghOwner = process.env.GITHUB_REPOSITORY_OWNER || '';
  const repo = ghRepo.replace(/.*?\//, '');
  const ghUrl = `https://api.github.com/repos/${ghOwner}/${repo}/actions/workflows/on-repo-dispatch.yml/runs?per_page=30`;
  const res = await fetch(ghUrl, { next: { revalidate: 3600 } });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error(`Failed to fetch data from: ${ghUrl}`);
  }

  const data: listWorkflowRunsForRepo = await res.json();
  const filtered = data.workflow_runs
    .filter((i) => i.conclusion === 'failure' || 'success' || 'cancelled' || 'timed_out')
    .sort((i) => parseISO(i.created_at).getTime())
    .reverse();
  const arr: Tracker = [{ color: 'gray', tooltip: 'placeholder' }];
  filtered.map((i) => {
    let tooltip = `${i.conclusion?.toUpperCase()} - ${i.run_started_at?.substring(0, 10)}`;
    let color: Color = 'gray';
    if (i.conclusion === 'failure') color = 'rose';
    if (i.conclusion === 'success') color = 'emerald';
    if (i.conclusion === 'cancelled') color = 'orange';
    if (i.conclusion === 'timed_out') color = 'rose';
    if (i.conclusion === 'startup_failure') color = 'rose';
    arr.push({ color: color, tooltip: tooltip });
  });

  return arr.filter((i) => i.color !== 'gray');
}
