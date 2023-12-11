import Image from "next/image";

export default function Avatar(props:Avatar) {
  return (
    <>
      <Image
        className="inline-block rounded-full border-2 border-neutral-200 dark:border-neutral-800"
        src={props.avatar_url}
        alt="GitHub Profile Image"
        width={props.size}
        height={props.size}
        unoptimized={true}
      />
    </>
  )
};

interface Avatar {
  avatar_url: string;
  size: number;
};