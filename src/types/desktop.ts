import { ReactNode } from "react";
import { WindowDimension } from "./window";

export interface IconConfig {
  icon: ReactNode;
  label: string;
  w: WindowDimension;
  h: WindowDimension;
  makeContent: () => ReactNode;
  pathname: string;
}
