import { useState } from "react";
import { BootScreen } from "./components/BootScreen/BootScreen";
import { Desktop } from "./components/Desktop/Desktop";
import { MenuBar } from "./components/MenuBar/MenuBar";
import { Taskbar } from "./components/Taskbar/Taskbar";
import { useWindowManager } from "./hooks/useWindowManager";

export default function App() {
  const hasBooted = localStorage.getItem("kevos-booted") === "true";
  const [booted, setBooted] = useState(hasBooted);
  const wm = useWindowManager();

  const handleBootComplete = () => {
    localStorage.setItem("kevos-booted", "true");
    setBooted(true);
  };

  if (!booted) {
    return <BootScreen onComplete={handleBootComplete} />;
  }

  return (
    <div className="app">
      <MenuBar />
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
