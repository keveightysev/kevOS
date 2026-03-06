import { useState, useCallback } from 'react';
import type { WindowConfig, WindowState } from '../types/window';

let nextId = 1;

const BASE_X = 80;
const BASE_Y = 40;
const STACK_OFFSET = 24;

export function useWindowManager() {
  const [windows, setWindows] = useState<WindowState[]>([]);
  const [activeId, setActiveId] = useState<number | null>(null);

  const openWindow = useCallback((config: WindowConfig): number => {
    const id = nextId++;
    setWindows(prev => {
      const stackOffset = (prev.length % 8) * STACK_OFFSET;
      return [
        ...prev,
        {
          ...config,
          id,
          x: BASE_X + stackOffset,
          y: BASE_Y + stackOffset,
          minimized: false,
        },
      ];
    });
    setActiveId(id);
    return id;
  }, []);

  const closeWindow = useCallback((id: number) => {
    setWindows(prev => prev.filter(w => w.id !== id));
    setActiveId(prev => (prev === id ? null : prev));
  }, []);

  const focusWindow = useCallback((id: number) => {
    setWindows(prev => {
      const win = prev.find(w => w.id === id);
      if (!win) return prev;
      return [...prev.filter(w => w.id !== id), win];
    });
    setActiveId(id);
  }, []);

  const toggleMinimize = useCallback((id: number) => {
    setWindows(prev =>
      prev.map(w => (w.id === id ? { ...w, minimized: !w.minimized } : w))
    );
    setActiveId(prev => (prev === id ? null : prev));
  }, []);

  const moveWindow = useCallback((id: number, x: number, y: number) => {
    setWindows(prev =>
      prev.map(w => (w.id === id ? { ...w, x, y } : w))
    );
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
