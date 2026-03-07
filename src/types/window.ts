import type { ReactNode } from "react";

export interface WindowConfig {
  title: string;
  icon: string;
  content: ReactNode;
  w: number | string;
  h: number | string;
}

export interface WindowState extends WindowConfig {
  id: number;
  x: number;
  y: number;
  minimized: boolean;
}
