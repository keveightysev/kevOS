export function WindowCollapseLeftIcon({
  size = 32,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      height={size}
      viewBox="0 0 21 21"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(3 3)"
      >
        <path d="m.5 12.5v-10c0-1.1045695.8954305-2 2-2h10c1.1045695 0 2 .8954305 2 2v10c0 1.1045695-.8954305 2-2 2h-10c-1.1045695 0-2-.8954305-2-2z" />
        <path
          d="m2.5 12.5v-10c0-1.1045695.8954305-2 2-2h-2c-1 0-2 .8954305-2 2v10c0 1.1045695 1 2 2 2h2c-1.1045695 0-2-.8954305-2-2z"
          fill="currentColor"
        />
        <path d="m7.5 10.5-3-3 3-3" />
        <path d="m12.5 7.5h-8" />
      </g>
    </svg>
  );
}
