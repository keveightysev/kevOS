import { DESKTOP_APPS } from "../../constants/desktop";
import { IconConfig } from "../../types/desktop";
import type { WindowManager } from "../../types/window";
import { DesktopIcon } from "../DesktopIcon/DesktopIcon";
import { Window } from "../Window/Window";

import styles from "./Desktop.module.css";

interface DesktopProps {
  wm: WindowManager;
}

export function Desktop({ wm }: DesktopProps) {
  const {
    windows,
    activeId,
    openWindow,
    closeWindow,
    focusWindow,
    toggleMinimize,
    moveWindow,
  } = wm;

  const handleIconOpen = (iconConfig: IconConfig) => {
    const existing = windows.find((w) => w.title === iconConfig.label);
    if (existing) {
      if (existing.minimized) toggleMinimize(existing.id);
      focusWindow(existing.id);
    } else {
      openWindow({
        title: iconConfig.label,
        icon: iconConfig.icon,
        content: iconConfig.makeContent(),
        w: iconConfig.w,
        h: iconConfig.h,
      });
    }
  };

  return (
    <main className={styles.desktop} role="region" aria-label="Desktop icons">
      {/* Icon column */}
      <div className={styles.iconColumn}>
        {DESKTOP_APPS.map((cfg) => (
          <DesktopIcon
            key={cfg.label}
            icon={cfg.icon}
            label={cfg.label}
            onOpen={() => handleIconOpen(cfg)}
          />
        ))}
      </div>

      {/* Windows */}
      {windows.map((win, index) => (
        <Window
          key={win.id}
          win={win}
          isActive={win.id === activeId}
          zIndex={10 + index}
          onClose={() => closeWindow(win.id)}
          onMinimize={() => toggleMinimize(win.id)}
          onFocus={() => focusWindow(win.id)}
          onMove={(x, y) => moveWindow(win.id, x, y)}
        />
      ))}
    </main>
  );
}
