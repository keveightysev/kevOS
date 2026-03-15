export function CloseIcon({
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
        fill-rule="evenodd"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="m7.5 7.5 6 6" />
        <path d="m13.5 7.5-6 6" />
      </g>
    </svg>
  );
}
