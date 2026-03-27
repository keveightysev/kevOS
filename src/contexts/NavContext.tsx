import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
} from "react";
import { WindowManager } from "../types/window";
import { DESKTOP_APPS } from "../constants/desktop";

const NavContext = createContext({});

interface NavigationProviderProps {
  wm: WindowManager;
}

export const NavigationProvider = ({
  children,
  wm,
}: PropsWithChildren<NavigationProviderProps>) => {
  const refActiveRoute = useRef<string>(null);
  const { windows, toggleMinimize, focusWindow, openWindow } = wm;

  const handleOpenRoute = (pathname: string) => {
    const existing = windows.find((w) => w.title === pathname);
    if (existing) {
      if (existing.minimized) toggleMinimize(existing.id);
      focusWindow(existing.id);
    } else {
      const config = DESKTOP_APPS.find((app) => app.pathname === pathname);
      if (!config) return; // not a handled route
      openWindow({
        title: config.label,
        icon: config.icon,
        content: config.makeContent(),
        w: config.w,
        h: config.h,
      });
    }
  };
  useEffect(() => {
    if (!refActiveRoute.current) {
      const pathname = window.location.pathname;
      refActiveRoute.current = pathname;
      handleOpenRoute(pathname);
    }
  }, []);
  return <NavContext.Provider value={{}}>{children}</NavContext.Provider>;
};

export const useNavigation = () => {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error("useNavigation must be used within NavigationProvider");
  }
  return context;
};
