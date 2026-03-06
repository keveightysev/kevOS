import { useClock } from '../../hooks/useClock';
import styles from './MenuBar.module.css';

interface MenuBarProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

const MENU_ITEMS = ['File', 'Edit', 'View', 'Help'];

export function MenuBar({ theme, onToggleTheme }: MenuBarProps) {
  const time = useClock();

  const formatted = time.toLocaleString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });

  return (
    <nav className={styles.menubar} role="menubar" aria-label="kevOS menu bar">
      <div className={styles.left}>
        <span className={styles.logo}>⌘ kevOS</span>
        {MENU_ITEMS.map(item => (
          <button
            key={item}
            className={styles.menuItem}
            aria-haspopup="true"
            aria-label={`${item} menu`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className={styles.right}>
        <button
          className={styles.themeToggle}
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '◑' : '◐'}
        </button>
        <time className={styles.clock} dateTime={time.toISOString()}>
          {formatted}
        </time>
      </div>
    </nav>
  );
}
