import { useState } from 'react';
import { BootScreen } from './components/BootScreen/BootScreen';
import { Desktop } from './components/Desktop/Desktop';
import { MenuBar } from './components/MenuBar/MenuBar';
import { Taskbar } from './components/Taskbar/Taskbar';
import { useWindowManager } from './hooks/useWindowManager';

export default function App() {
  const [booted, setBooted] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const wm = useWindowManager();

  if (!booted) {
    return <BootScreen onComplete={() => setBooted(true)} />;
  }

  const toggleTheme = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));

  return (
    <div className="app" data-theme={theme}>
      <MenuBar theme={theme} onToggleTheme={toggleTheme} />
      <Desktop wm={wm} />
      <Taskbar
        windows={wm.windows}
        activeId={wm.activeId}
        onFocus={wm.focusWindow}
        onToggleMinimize={wm.toggleMinimize}
      />
    </div>
  );
}
