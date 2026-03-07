import { WindowDimension } from "../types/window";

export function resolveDimension(
  value: WindowDimension,
  viewport: number,
): number {
  if (typeof value === "number") return value;
  const percent = parseFloat(value) / 100;
  return Math.round(viewport * percent);
}

export const isMobile = () => window.innerWidth <= 540;
