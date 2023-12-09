import Avatar from './avatar';
import { display } from '@/style/fonts';

export default function Profile(props:Profile) {
  return (
    <div className="mx-auto max-w-2xl sm:px-6 lg:px-8">
      <div className="sm:flex">
        <div className="px-8 mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
          <Avatar 
            avatar_url={props.avatar_url}
            size={120}
          />
        </div>
        <div className="px-4 items-center">
          <h4 className={`${display.className} text-primary dark:text-secondary font-bold text-2xl pt-4`}>{props.name}</h4>
          <p className="mt-1">
            {props.bio}
          </p>
        </div>
      </div>
    </div>
  )
};

interface Profile {
  avatar_url: string;
  name: string;
  bio:string;
};