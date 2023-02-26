import type { SVGProps } from 'react';

export function StremioLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 123.2 123.02"
      {...props}
    >
      <path
        fill="#8a5aab"
        d="M61.6 0L123.2 61.51 61.6 123.02 0 61.51 61.6 0z"
      />
      <path fill="#3a497d" d="M61.6 123.02L0 61.51 123.2 61.51 61.6 123.02z" />
      <path fill="#fff" d="M83.22 61.51L52 84.62 52 38.4 83.22 61.51z" />
    </svg>
  );
}
