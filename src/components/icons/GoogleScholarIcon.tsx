import React from "react";

export const GoogleScholarIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>Google Scholar</title>
      <path
        fill="currentColor"
        d="M12 2L1 7l11 5 9-4.09V17h2V7L12 2zm0 12L3.5 9.97V14c0 2.76 4.03 5 8.5 5s8.5-2.24 8.5-5V9.97L12 14z"
      />
    </svg>
  );
};