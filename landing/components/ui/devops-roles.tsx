export default function DevOpsRoles(props: Roles) {
  return (
    <div className="w-28 m-5">
      <div className="w-20 px-4">
        {props.role === 'Developer' ? (
          <svg viewBox="0 0 36 36" fill="none" role="img" xmlns="http://www.w3.org/2000/svg" width="80" height="80">
            <mask id=":rb:" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36">
              <rect width="36" height="36" rx="72" fill="#FFFFFF"></rect>
            </mask>
            <g mask="url(#:rb:)">
              <rect width="36" height="36" fill="#d1daf4"></rect>
              <rect x="0" y="0" width="36" height="36" transform="translate(6 6) rotate(356 18 18) scale(1.2)" fill="#46458e" rx="6"></rect>
              <g transform="translate(4 1) rotate(6 18 18)">
                <path d="M13,21 a1,0.75 0 0,0 10,0" fill="#FFFFFF"></path>
                <rect x="13" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#FFFFFF"></rect>
                <rect x="21" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#FFFFFF"></rect>
              </g>
            </g>
          </svg>
        ) : (
          ''
        )}
        {props.role === 'Infrastructure' ? (
          <svg viewBox="0 0 36 36" fill="none" role="img" xmlns="http://www.w3.org/2000/svg" width="80" height="80">
            <mask id=":rvs:" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36">
              <rect width="36" height="36" rx="72" fill="#FFFFFF"></rect>
            </mask>
            <g mask="url(#:rvs:)">
              <rect width="36" height="36" fill="#46458e"></rect>
              <rect x="0" y="0" width="36" height="36" transform="translate(8 -4) rotate(198 18 18) scale(1)" fill="#97a2e2" rx="6"></rect>
              <g transform="translate(4 0) rotate(-8 18 18)">
                <path d="M15 19c2 1 4 1 6 0" stroke="#000000" fill="none" strokeLinecap="round"></path>
                <rect x="11" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#000000"></rect>
                <rect x="23" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#000000"></rect>
              </g>
            </g>
          </svg>
        ) : (
          ''
        )}
        {props.role === 'Product' ? (
          <svg viewBox="0 0 36 36" fill="none" role="img" xmlns="http://www.w3.org/2000/svg" width="80" height="80">
            <mask id=":r1n:" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36">
              <rect width="36" height="36" rx="72" fill="#FFFFFF"></rect>
            </mask>
            <g mask="url(#:r1n:)">
              <rect width="36" height="36" fill="#97a2e2"></rect>
              <rect x="0" y="0" width="36" height="36" transform="translate(-1 5) rotate(25 18 18) scale(1.1)" fill="#242442" rx="36"></rect>
              <g transform="translate(-1 3) rotate(-5 18 18)">
                <path d="M13,20 a1,0.75 0 0,0 10,0" fill="#FFFFFF"></path>
                <rect x="14" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#FFFFFF"></rect>
                <rect x="20" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#FFFFFF"></rect>
              </g>
            </g>
          </svg>
        ) : (
          ''
        )}
        {props.role === 'Architect' ? (
          <svg viewBox="0 0 36 36" fill="none" role="img" xmlns="http://www.w3.org/2000/svg" width="80" height="80">
            <mask id=":r2f:" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36">
              <rect width="36" height="36" rx="72" fill="#FFFFFF"></rect>
            </mask>
            <g mask="url(#:r2f:)">
              <rect width="36" height="36" fill="#6464c8"></rect>
              <rect x="0" y="0" width="36" height="36" transform="translate(8 8) rotate(214 18 18) scale(1.1)" fill="#d1daf4" rx="6"></rect>
              <g transform="translate(4 4) rotate(-4 18 18)">
                <path d="M13,20 a1,0.75 0 0,0 10,0" fill="#000000"></path>
                <rect x="10" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#000000"></rect>
                <rect x="24" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#000000"></rect>
              </g>
            </g>
          </svg>
        ) : (
          ''
        )}
        {props.role === 'Security' ? (
          <svg viewBox="0 0 36 36" fill="none" role="img" xmlns="http://www.w3.org/2000/svg" width="80" height="80">
            <mask id=":rru:" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36">
              <rect width="36" height="36" rx="72" fill="#FFFFFF"></rect>
            </mask>
            <g mask="url(#:rru:)">
              <rect width="36" height="36" fill="#242442"></rect>
              <rect x="0" y="0" width="36" height="36" transform="translate(6 6) rotate(272 18 18) scale(1.2)" fill="#6464c8" rx="6"></rect>
              <g transform="translate(0 0) rotate(-2 18 18)">
                <path d="M13,21 a1,0.75 0 0,0 10,0" fill="#FFFFFF"></path>
                <rect x="12" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#FFFFFF"></rect>
                <rect x="22" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#FFFFFF"></rect>
              </g>
            </g>
          </svg>
        ) : (
          ''
        )}
        {props.role === 'Scrum Master' ? (
          <svg viewBox="0 0 36 36" fill="none" role="img" xmlns="http://www.w3.org/2000/svg" width="80" height="80">
            <mask id=":rr8:" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36">
              <rect width="36" height="36" rx="72" fill="#FFFFFF"></rect>
            </mask>
            <g mask="url(#:rr8:)">
              <rect width="36" height="36" fill="#46458e"></rect>
              <rect x="0" y="0" width="36" height="36" transform="translate(-4 -4) rotate(88 18 18) scale(1.1)" fill="#97a2e2" rx="36"></rect>
              <g transform="translate(0 -6) rotate(8 18 18)">
                <path d="M15 20c2 1 4 1 6 0" stroke="#000000" fill="none" strokeLinecap="round"></path>
                <rect x="11" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#000000"></rect>
                <rect x="23" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#000000"></rect>
              </g>
            </g>
          </svg>
        ) : (
          ''
        )}
        {props.role === 'Product Team' ? (
          <svg viewBox="0 0 80 80" fill="none" role="img" xmlns="http://www.w3.org/2000/svg" width="80" height="80">
            <mask id=":rup:" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80">
              <rect width="80" height="80" rx="160" fill="#FFFFFF"></rect>
            </mask>
            <g mask="url(#:rup:)">
              <rect width="80" height="80" fill="#97a2e2"></rect>
              <rect x="10" y="30" width="80" height="10" fill="#d1daf4" transform="translate(8 8) rotate(236 40 40)"></rect>
              <circle cx="40" cy="40" fill="#242442" r="16" transform="translate(3 -3)"></circle>
              <line x1="0" y1="40" x2="80" y2="40" strokeWidth="2" stroke="#46458e" transform="translate(12 -12) rotate(112 40 40)"></line>
            </g>
          </svg>
        ) : (
          ''
        )}
        {props.role === 'Platform Team' ? (
          <svg viewBox="0 0 80 80" fill="none" role="img" xmlns="http://www.w3.org/2000/svg" width="80" height="80">
            <mask id=":rs3:" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80">
              <rect width="80" height="80" rx="160" fill="#FFFFFF"></rect>
            </mask>
            <g mask="url(#:rs3:)">
              <rect width="80" height="80" fill="#d1daf4"></rect>
              <rect x="10" y="30" width="80" height="80" fill="#242442" transform="translate(-2 -2) rotate(288 40 40)"></rect>
              <circle cx="40" cy="40" fill="#46458e" r="16" transform="translate(12 -12)"></circle>
              <line x1="0" y1="40" x2="80" y2="40" strokeWidth="2" stroke="#6464c8" transform="translate(16 -16) rotate(216 40 40)"></line>
            </g>
          </svg>
        ) : (
          ''
        )}
        {props.role === 'The Business' ? (
          <svg viewBox="0 0 80 80" fill="none" role="img" xmlns="http://www.w3.org/2000/svg" width="80" height="80">
            <mask id=":r140:" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80">
              <rect width="80" height="80" rx="160" fill="#FFFFFF"></rect>
            </mask>
            <g mask="url(#:r140:)">
              <rect width="80" height="80" fill="#46458e"></rect>
              <rect x="10" y="30" width="80" height="80" fill="#6464c8" transform="translate(-2 -2) rotate(2 40 40)"></rect>
              <circle cx="40" cy="40" fill="#97a2e2" r="16" transform="translate(-6 -6)"></circle>
              <line x1="0" y1="40" x2="80" y2="40" strokeWidth="2" stroke="#d1daf4" transform="translate(-4 -4) rotate(4 40 40)"></line>
            </g>
          </svg>
        ) : (
          ''
        )}
      </div>
      <div className="w-28 bg-neutral-200 dark:bg-neutral-800 rounded-full text-neutral-800 dark:text-neutral-200 text-center text-sm -translate-y-3 p-1 shadow">{props.role}</div>
    </div>
  );
}

interface Roles {
  role: string;
}

// https://boringavatars.com/7e6762-cf5a60-f85a69-f0b593-e3dfbc
