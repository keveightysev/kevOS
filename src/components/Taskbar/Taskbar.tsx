import type { WindowState } from "../../types/window";
import styles from "./Taskbar.module.css";

interface TaskbarProps {
  windows: WindowState[];
  activeId: number | null;
  onFocus: (id: number) => void;
  onToggleMinimize: (id: number) => void;
}

export function Taskbar({
  windows,
  activeId,
  onFocus,
  onToggleMinimize,
}: TaskbarProps) {
  const handleClick = (win: WindowState) => {
    if (win.minimized) {
      onToggleMinimize(win.id);
      onFocus(win.id);
    } else if (win.id === activeId) {
      onToggleMinimize(win.id);
    } else {
      onFocus(win.id);
    }
  };

  return (
    <div className={styles.taskbar} role="toolbar" aria-label="Open windows">
      {windows.map((win) => (
        <button
          key={win.id}
          className={`${styles.btn} ${win.id === activeId && !win.minimized ? styles.active : ""}`}
          onClick={() => handleClick(win)}
          aria-label={win.title}
          aria-pressed={win.id === activeId && !win.minimized}
        >
          <span className={styles.icon} aria-hidden="true">
            {win.icon}
          </span>
          <span className={styles.label}>{win.title}</span>
        </button>
      ))}
    </div>
  );
}
