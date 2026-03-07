import type { ReactNode } from "react";

export type WindowDimension = number | `${number}%`;

export interface WindowConfig {
  title: string;
  icon: ReactNode;
  content: ReactNode;
  w: WindowDimension;
  h: WindowDimension;
}

export interface WindowState extends WindowConfig {
  id: number;
  x: number;
  y: number;
  minimized: boolean;
  zIndex: number;
}
