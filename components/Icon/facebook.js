import React from 'react';

export default function Facebook({ className, ...other }) {
  return (
    <svg
      className={`${className || ''} icon w10`}
      viewBox="0 0 38 38"
      xmlns="http://www.w3.org/2000/svg"
      {...other}
    >
      <path
        fill="currentColor"
        d="M37.145 35.646a2.026 2.026 0 0 1-2.026 2.026h-9.355V23.455h4.772l.715-5.54h-5.487v-3.537c0-1.604.446-2.698 2.746-2.698l2.934-.001V6.724c-.508-.068-2.249-.219-4.275-.219-4.23 0-7.126 2.582-7.126 7.324v4.086h-4.784v5.54h4.784v14.217H2.46a2.026 2.026 0 0 1-2.026-2.026V2.987c0-1.119.907-2.026 2.026-2.026h32.659c1.119 0 2.026.907 2.026 2.026v32.659"
      />
    </svg>
  );
}
