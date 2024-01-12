import { display } from '@/style/fonts';

export default function HeroJustText(props: Hero) {
  return (
    <div className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-base font-bold leading-7 text-neutral-500">{props.subtitle}</p>
        <h2 className={`${display.className} mt-2 font-black text-6xl text-primary dark:text-secondary`}>{props.title}</h2>
        <p className="mt-6 text-xl leading-8">{props.blurb}</p>
      </div>
    </div>
  );
}

interface Hero {
  subtitle: string;
  title: string;
  blurb: string;
}
