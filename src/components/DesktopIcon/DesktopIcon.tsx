import { ReactNode, useRef } from "react";
import styles from "./DesktopIcon.module.css";

interface DesktopIconProps {
  icon: ReactNode;
  label: string;
  onOpen: () => void;
}

const isTouchDevice = () => window.matchMedia("(pointer: coarse)").matches;

export function DesktopIcon({ icon, label, onOpen }: DesktopIconProps) {
  const refIconButton = useRef<HTMLButtonElement>(null);
  const refLastTimeClicked = useRef(0);

  const handleOpen = () => {
    onOpen();
    refIconButton.current?.blur();
  };

  const handleClick = () => {
    if (isTouchDevice()) {
      handleOpen();
      return;
    }

    const now = Date.now();
    if (now - refLastTimeClicked.current < 400) {
      handleOpen();
    }
    refLastTimeClicked.current = now;
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleOpen();
    }
  };

  return (
    <button
      className={styles.icon}
      type="button"
      tabIndex={0}
      aria-label={`Open ${label}`}
      onClick={handleClick}
      onDoubleClick={!isTouchDevice() ? handleOpen : undefined}
      onKeyDown={handleKeyDown}
      ref={refIconButton}
    >
      <span className={styles.iconImage}>{icon}</span>
      <span className={styles.label}>{label}</span>
    </button>
  );
}
