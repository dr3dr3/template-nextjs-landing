import Image from 'next/image';

export default function Avatar(props: Avatar) {
  return (
    <>
      <Image className="inline-block rounded-full border-2 border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-950" src={props.avatar_url} alt={props.alt} width={props.size} height={props.size} unoptimized={true} />
    </>
  );
}

interface Avatar {
  avatar_url: string;
  size: number;
  alt: string;
}
