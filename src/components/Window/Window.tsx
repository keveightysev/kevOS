import { Rnd } from "react-rnd";
import type { WindowState } from "../../types/window";
import styles from "./Window.module.css";
import { useCallback, useRef, useState } from "react";

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
      style={{ zIndex }}
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
              className={`${styles.light} ${styles.close}`}
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              aria-label={`Close ${win.title}`}
              tabIndex={0}
            />
            <button
              className={`${styles.light} ${styles.minimize}`}
              onClick={(e) => {
                e.stopPropagation();
                onMinimize();
              }}
              aria-label={`Minimize ${win.title}`}
              tabIndex={0}
            />
            <button
              className={`${styles.light} ${styles.maximize}`}
              aria-label={`Maximize ${win.title}`}
              onClick={(e) => {
                e.stopPropagation();
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
                  refWindowPosition.current = {
                    x: win.x,
                    y: win.y,
                  };
                  refWindowSize.current = windowSize;
                  onMove(0, 0);
                  setWindowSize({ width: "100%", height: "100%" });
                  setExpanded(true);
                }
              }}
              tabIndex={0}
            />
          </div>
          <span className={styles.title}>
            {win.icon} {win.title}
          </span>
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
