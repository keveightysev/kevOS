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

export interface WindowManager {
  windows: WindowState[];
  activeId: number | null;
  openWindow: (config: WindowConfig) => number;
  closeWindow: (id: number) => void;
  focusWindow: (id: number) => void;
  toggleMinimize: (id: number) => void;
  moveWindow: (id: number, x: number, y: number) => void;
}
