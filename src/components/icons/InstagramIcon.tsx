import * as React from "react";

export const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <title>Instagram</title>

      {/* Camera body */}
      <rect x="3" y="3" width="18" height="18" rx="5" />

      {/* Lens */}
      <circle cx="12" cy="12" r="4" />

      {/* Small flash dot */}
      <circle cx="17" cy="7" r="1" />
    </svg>
  );
};