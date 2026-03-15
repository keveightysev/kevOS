import { Rnd } from "react-rnd";
import type { WindowState } from "../../types/window";
import styles from "./Window.module.css";
import { useRef, useState } from "react";
import { CloseIcon } from "../../icons/CloseIcon";
import { MinusIcon } from "../../icons/MinusIcon";
import { ScaleContractIcon } from "../../icons/ScaleContractIcon";
import { ScaleExtendIcon } from "../../icons/ScaleExtendIcon";

interface WindowProps {
  win: WindowState;
  isActive: boolean;
  zIndex: number;
  onClose: () => void;
  onMinimize: () => void;
  onFocus: () => void;
  onMove: (x: number, y: number) => void;
}

interface WindowSize {
  width: number | string;
  height: number | string;
}

export function Window({
  win,
  isActive,
  zIndex,
  onClose,
  onMinimize,
  onFocus,
  onMove,
}: WindowProps) {
  const refWindowPosition = useRef<{ x: number; y: number }>(null);
  const refWindowSize = useRef<WindowSize>(null);
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: win.w,
    height: win.h,
  });
  const [expanded, setExpanded] = useState(false);

  const handleMaximize = () => {
    if (expanded) {
      onMove(
        refWindowPosition.current?.x ?? 0,
        refWindowPosition.current?.y ?? 0,
      );
      setWindowSize(refWindowSize.current!);
      refWindowPosition.current = null;
      refWindowSize.current = null;
      setExpanded(false);
    } else {
      refWindowPosition.current = { x: win.x, y: win.y };
      refWindowSize.current = windowSize;
      onMove(0, 0);
      setWindowSize({ width: "100%", height: "100%" });
      setExpanded(true);
    }
  };

  if (win.minimized) return null;

  return (
    <Rnd
      bounds="parent"
      position={{ x: win.x, y: win.y }}
      size={windowSize}
      minWidth={300}
      minHeight={200}
      dragHandleClassName={styles.titleBar}
      onDragStop={(_e, d) => onMove(d.x, d.y)}
      onResizeStop={(_e, _dir, ref, _delta, pos) => {
        setWindowSize({
          width: Number(ref.style.width),
          height: Number(ref.style.height),
        });
        onMove(pos.x, pos.y);
      }}
      style={{ zIndex: win.zIndex }}
      className={styles.dnd}
      enableResizing={{
        top: true,
        right: true,
        bottom: true,
        left: true,
        topRight: true,
        bottomRight: true,
        bottomLeft: true,
        topLeft: true,
      }}
    >
      <div
        className={`${styles.window} ${isActive ? styles.active : styles.inactive}`}
        role="dialog"
        aria-label={win.title}
        aria-modal="false"
        onMouseDown={onFocus}
      >
        {/* Title Bar */}
        <div className={styles.titleBar}>
          <div className={styles.trafficLights}>
            <button
              className={`${styles.light} ${styles.close} ${styles.trafficLight}`}
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              onTouchEnd={(e) => {
                e.stopPropagation();
                onClose();
              }}
              aria-label={`Close ${win.title}`}
            >
              <CloseIcon size={12} />
            </button>
            <button
              className={`${styles.light} ${styles.minimize} ${styles.trafficLight}`}
              onClick={(e) => {
                e.stopPropagation();
                onMinimize();
              }}
              onTouchEnd={(e) => {
                e.stopPropagation();
                onMinimize();
              }}
              aria-label={`Minimize ${win.title}`}
            >
              <MinusIcon size={12} />
            </button>
            <button
              className={`${styles.light} ${styles.maximize} ${styles.trafficLight}`}
              onClick={(e) => {
                e.stopPropagation();
                handleMaximize();
              }}
              onTouchEnd={(e) => {
                e.stopPropagation();
                handleMaximize();
              }}
              aria-label={`${expanded ? "Contract" : "Maximize"} ${win.title}`}
            >
              {expanded ? (
                <ScaleContractIcon size={12} />
              ) : (
                <ScaleExtendIcon size={12} />
              )}
            </button>
          </div>
          <span className={styles.title}>{win.title}</span>
        </div>

        {/* Content */}
        <div className={styles.content}>{win.content}</div>

        {/* Status Bar */}
        <div className={styles.statusBar}>
          <span>Ready</span>
        </div>
      </div>
    </Rnd>
  );
}
