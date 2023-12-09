import { display } from '@/style/fonts';

export default function HeroJustText() {
    return (
      <div className="px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base font-bold leading-7 text-neutral-500">Get the help you need</p>
          <h2 className={`${display.className} mt-2 font-black text-6xl text-primary dark:text-secondary`}>DevOps Demo</h2>
          <p className="mt-6 text-xl leading-8">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat fugiat aliqua.
          </p>
        </div>
      </div>
    )
  }
  