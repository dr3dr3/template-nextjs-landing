import { PropsWithChildren } from 'react';
import React from 'react';

export default function Card(props: PropsWithChildren<ICard>) {
  return (
    <div className="mx-auto max-w-lg p-10 text-neutral-900 dark:text-neutral-100 text-center bg-neutral-50 dark:bg-neutral-950 rounded-xl shadow">
      <div className="mx-auto w-20 h-20 p-4 mb-4 -mt-20 text-neutral-50 dark:text-neutral-950 bg-primary dark:bg-secondary rounded-full border-4 border-neutral-50 dark:border-neutral-950">{props.children}</div>
      <h3 className="mb-4 text-3xl font-semibold text-primary dark:text-secondary">{props.title}</h3>
      <p className="text-base text-neutral-800 dark:text-neutral-200">{props.blurb}</p>
    </div>
  );
}

export interface ICard {
  route?: string;
  title: string;
  blurb: string;
}
