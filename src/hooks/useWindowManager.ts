import { useState, useCallback } from "react";
import type { WindowConfig, WindowState } from "../types/window";
import { resolveDimension } from "../utils/measure";

let nextId = 1;

const BASE_X = 80;
const BASE_Y = 40;
const STACK_OFFSET = 24;
const MENU_BAR_HEIGHT = 20;
const TASK_BAR_HEIGHT = 24;

export function useWindowManager() {
  const [windows, setWindows] = useState<WindowState[]>([]);
  const [activeId, setActiveId] = useState<number | null>(null);

  const openWindow = useCallback((config: WindowConfig): number => {
    const id = nextId++;

    const viewportW = window.innerWidth;
    const viewportH = window.innerHeight - MENU_BAR_HEIGHT - TASK_BAR_HEIGHT;

    setWindows((prev) => {
      const stackOffset = (prev.length % 8) * STACK_OFFSET;

      let x = BASE_X + stackOffset;
      let y = BASE_Y + stackOffset;
      let w = resolveDimension(config.w, viewportW);
      let h = resolveDimension(config.h, viewportH);

      // Step 1: clamp x position independently
      if (x + w > viewportW) x = Math.max(0, viewportW - w);

      // Step 2: clamp y position independently
      if (y + h > viewportH) y = Math.max(0, viewportH - h);

      // Step 3: if still out of bounds, resize width
      if (x + w > viewportW) w = viewportW - x;

      // Step 4: if still out of bounds, resize height
      if (y + h > viewportH + MENU_BAR_HEIGHT)
        h = viewportH + MENU_BAR_HEIGHT - y;

      return [
        ...prev,
        {
          ...config,
          id,
          x,
          y,
          w,
          h,
          minimized: false,
        },
      ];
    });

    setActiveId(id);
    return id;
  }, []);

  const closeWindow = useCallback((id: number) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
    setActiveId((prev) => (prev === id ? null : prev));
  }, []);

  const focusWindow = useCallback((id: number) => {
    setWindows((prev) => {
      const win = prev.find((w) => w.id === id);
      if (!win) return prev;
      return [...prev.filter((w) => w.id !== id), win];
    });
    setActiveId(id);
  }, []);

  const toggleMinimize = useCallback((id: number) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, minimized: !w.minimized } : w)),
    );
    setActiveId((prev) => (prev === id ? null : prev));
  }, []);

  const moveWindow = useCallback((id: number, x: number, y: number) => {
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, x, y } : w)));
  }, []);

  return {
    windows,
    activeId,
    openWindow,
    closeWindow,
    focusWindow,
    toggleMinimize,
    moveWindow,
  };
}
