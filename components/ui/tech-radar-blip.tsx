'use client';

import { clsx } from 'clsx';
import { Popover } from '@headlessui/react';

export function Blip(props: IBlip) {
  const { blip, label, quadrant } = props;
  return (
    <Popover className="relative">
      <Popover.Button className="flex-none bg-blue-500 dark:bg-secondary-500 rounded-full text-sm font-bold text-center w-8 h-8 p-1.5 m-1 ring-0 ring-primary-700 dark:ring-secondary-400 hover:ring-2 hover:ring-inset focus:ring-2">
        {blip}
      </Popover.Button>

      <Popover.Panel
        className={clsx('absolute z-10 bg-neutral-50 border-primary-700 dark:bg-neutral-950 dark:border-secondary-400 border-2 rounded-md', {
          '-translate-y-20 -translate-x-24': quadrant === 'top-left',
          '-translate-y-20': quadrant === 'top-right',
          'translate-y-1 -translate-x-24': quadrant === 'bottom-left',
          'translate-y-1': quadrant === 'bottom-right',
        })}>
        <div className="w-32 h-8 text-xs text-center px-2 pt-2 pb-1">{label}</div>
      </Popover.Panel>
    </Popover>
  );
}

interface IBlip {
  blip: number;
  label: string;
  quadrant: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}
