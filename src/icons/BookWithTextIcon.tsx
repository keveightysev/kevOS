export function BookWithTextIcon({
  size = 32,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 21 21"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <g fillRule="evenodd" transform="translate(2 3)">
        <path d="m12.5 12.5v-7l-5-5h-5c-1.1045695 0-2 .8954305-2 2v10c0 1.1045695.8954305 2 2 2h8c1.1045695 0 2-.8954305 2-2z" />
        <path d="m2.5 7.5h5" />
        <path d="m2.5 9.5h7" />
        <path d="m2.5 11.5h3" />
        <path d="m7.5.5v3c0 1.1045695.8954305 2 2 2h3" />
      </g>
    </svg>
  );
}
