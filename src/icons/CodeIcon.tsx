export function CodeIcon({
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
        <line x1="10.5" x2="6.5" y1=".5" y2="14.5" />
        <polyline
          points="7.328 2.672 7.328 8.328 1.672 8.328"
          transform="rotate(135 4.5 5.5)"
        />
        <polyline
          points="15.328 6.672 15.328 12.328 9.672 12.328"
          transform="scale(1 -1) rotate(-45 -10.435 0)"
        />
      </g>
    </svg>
  );
}
