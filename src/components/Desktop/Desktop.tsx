import type { ReactNode } from "react";
import type {
  WindowConfig,
  WindowDimension,
  WindowState,
} from "../../types/window";
import { DesktopIcon } from "../DesktopIcon/DesktopIcon";
import { Window } from "../Window/Window";
import { AboutWindow } from "../../windows/AboutWindow";
import { ResumeWindow } from "../../windows/ResumeWindow";
import { EngineeringWindow } from "../../windows/EngineeringWindow";
import { ResearchWindow } from "../../windows/ResearchWindow";
import { ContactWindow } from "../../windows/ContactWindow";
import styles from "./Desktop.module.css";
import { UserIcon } from "../../icons/UserIcon";
import { DocumentIcon } from "../../icons/DocumentIcon";
import { DocumentStackIcon } from "../../icons/DocumentStackIcon";
import { CodeIcon } from "../../icons/CodeIcon";
import { BookWithTextIcon } from "../../icons/BookWithTextIcon";
import { PaperPlaneIcon } from "../../icons/PaperPlaneIcon";
import { UXCaseStudiesWindow } from "../../windows/UXCaseStudiesWindow";

interface WindowManager {
  windows: WindowState[];
  activeId: number | null;
  openWindow: (config: WindowConfig) => number;
  closeWindow: (id: number) => void;
  focusWindow: (id: number) => void;
  toggleMinimize: (id: number) => void;
  moveWindow: (id: number, x: number, y: number) => void;
}

interface DesktopProps {
  wm: WindowManager;
}

interface IconConfig {
  icon: ReactNode;
  label: string;
  w: WindowDimension;
  h: WindowDimension;
  makeContent: () => ReactNode;
}

const DESKTOP_ICONS: IconConfig[] = [
  {
    icon: <UserIcon />,
    label: "About Kevin",
    w: 550,
    h: "80%",
    makeContent: () => <AboutWindow />,
  },
  {
    icon: <DocumentIcon />,
    label: "Resume.pdf",
    w: "60%",
    h: 600,
    makeContent: () => <ResumeWindow />,
  },
  {
    icon: <DocumentStackIcon />,
    label: "UX Case Studies",
    w: 560,
    h: 480,
    makeContent: () => <UXCaseStudiesWindow />,
  },
  {
    icon: <CodeIcon />,
    label: "Engineering Work",
    w: 560,
    h: 480,
    makeContent: () => <EngineeringWindow />,
  },
  {
    icon: <BookWithTextIcon />,
    label: "Research",
    w: 560,
    h: 480,
    makeContent: () => <ResearchWindow />,
  },
  {
    icon: <PaperPlaneIcon />,
    label: "Contact",
    w: 560,
    h: 535,
    makeContent: () => <ContactWindow />,
  },
];

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
        {DESKTOP_ICONS.map((cfg) => (
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
