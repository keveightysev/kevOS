import { useRef } from 'react';
import styles from './DesktopIcon.module.css';

interface DesktopIconProps {
  icon: string;
  label: string;
  onOpen: () => void;
}

export function DesktopIcon({ icon, label, onOpen }: DesktopIconProps) {
  const lastClickTime = useRef(0);

  const handleClick = () => {
    const now = Date.now();
    if (now - lastClickTime.current < 400) {
      onOpen();
    }
    lastClickTime.current = now;
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onOpen();
    }
  };

  return (
    <div
      className={styles.icon}
      role="button"
      tabIndex={0}
      aria-label={`Open ${label}`}
      onClick={handleClick}
      onDoubleClick={onOpen}
      onKeyDown={handleKeyDown}
    >
      <span className={styles.emoji} aria-hidden="true">{icon}</span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
