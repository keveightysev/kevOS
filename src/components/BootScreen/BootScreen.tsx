import { useState, useEffect, useRef } from 'react';
import styles from './BootScreen.module.css';

interface BootLine {
  text: string;
  delay: number;
}

const BOOT_LINES: BootLine[] = [
  { text: 'kevOS v1.0 — Personal Computing Environment', delay: 0 },
  { text: 'Copyright © 2026 Kevin Smith. All rights reserved.', delay: 300 },
  { text: 'Checking memory... 640K ought to be enough for anybody.', delay: 800 },
  { text: 'Loading HCI frameworks... OK', delay: 1400 },
  { text: 'Mounting creative work... OK', delay: 1900 },
  { text: 'Initializing React stack... OK', delay: 2300 },
  { text: 'Calibrating taste levels... OK', delay: 2700 },
  { text: 'Checking for updates... HCI thesis 38% complete', delay: 3100 },
  { text: 'Starting kevOS Desktop Environment...', delay: 3700 },
];

interface BootScreenProps {
  onComplete: () => void;
}

export function BootScreen({ onComplete }: BootScreenProps) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [showProgress, setShowProgress] = useState(false);
  const [progress, setProgress] = useState(0);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    BOOT_LINES.forEach((_, i) => {
      timers.push(
        setTimeout(() => setVisibleCount(c => c + 1), BOOT_LINES[i].delay)
      );
    });

    timers.push(setTimeout(() => setShowProgress(true), 4300));

    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (!showProgress) return;

    let rafId: number;
    let startTime: number | null = null;
    const DURATION = 1500;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const pct = Math.min((elapsed / DURATION) * 100, 100);
      setProgress(pct);
      if (pct < 100) {
        rafId = requestAnimationFrame(animate);
      } else {
        setTimeout(() => onCompleteRef.current(), 300);
      }
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [showProgress]);

  return (
    <div className={styles.boot} role="status" aria-live="polite">
      <div className={styles.terminal}>
        {BOOT_LINES.slice(0, visibleCount).map((line, i) => (
          <div key={i} className={styles.line}>
            <span className={styles.prompt}>{'>'}</span>
            {line.text}
          </div>
        ))}
        {showProgress && (
          <div className={styles.progressSection}>
            <div className={styles.progressLabel}>Loading desktop...</div>
            <div className={styles.progressTrack}>
              <div
                className={styles.progressBar}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
        <div className={styles.cursor} />
      </div>
    </div>
  );
}
