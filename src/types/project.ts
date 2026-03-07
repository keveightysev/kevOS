// types/project.ts
import type { ReactNode } from "react";

export type ProjectType = "ux" | "engineering" | "research";

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
  style?: React.CSSProperties;
}

export interface ProjectSection {
  title: string;
  content: string | ReactNode;
  images?: ProjectImage[];
}

export interface Project {
  id: string;
  type: ProjectType;
  hero?: ProjectImage;
  title: string;
  subtitle: string;
  year: number;
  tags: string[];
  thumbnail: ProjectImage;
  summary: string;
  sections?: ProjectSection[];
  caseStudyUrl?: string; // hosted case study — opens in new window or tab
  links?: {
    label: string;
    url: string;
  }[];
}
