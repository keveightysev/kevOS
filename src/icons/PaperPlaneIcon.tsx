export function PaperPlaneIcon({
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
      <g fillRule="evenodd" transform="translate(1 2)">
        <path d="m.5 7 16-6.535-2.8 14.535z" />
        <path d="m16.5.5-11 10" />
        <path d="m5.5 10.5v5l3-3" />
      </g>
    </svg>
  );
}
