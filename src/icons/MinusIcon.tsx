export function MinusIcon({
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
      <path
        d="m5.5 10.5h10"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
