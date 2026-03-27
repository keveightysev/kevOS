import { IconConfig } from "../types/desktop";
import { AboutWindow } from "../windows/AboutWindow";
import { ContactWindow } from "../windows/ContactWindow";
import { EngineeringWindow } from "../windows/EngineeringWindow";
import { ResearchWindow } from "../windows/ResearchWindow";
import { ResumeWindow } from "../windows/ResumeWindow";
import { UXCaseStudiesWindow } from "../windows/UXCaseStudiesWindow";

export const DESKTOP_APPS: IconConfig[] = [
  {
    icon: <img src="/images/icons/about-kevin.png" alt="" />,
    label: "About Kevin",
    w: 550,
    h: "80%",
    makeContent: () => <AboutWindow />,
    pathname: "/about",
  },
  {
    icon: <img src="/images/icons/resume.png" alt="" />,
    label: "Resume.pdf",
    w: "60%",
    h: 600,
    makeContent: () => <ResumeWindow />,
    pathname: "/resume",
  },
  {
    icon: <img src="/images/icons/ux-case-studies.png" alt="" />,
    label: "UX Case Studies",
    w: 560,
    h: 480,
    makeContent: () => <UXCaseStudiesWindow />,
    pathname: "/ux",
  },
  {
    icon: <img src="/images/icons/engineering-work.png" alt="" />,
    label: "Engineering Work",
    w: 560,
    h: 480,
    makeContent: () => <EngineeringWindow />,
    pathname: "/dev",
  },
  {
    icon: <img src="/images/icons/research.png" alt="" />,
    label: "Research",
    w: 560,
    h: 480,
    makeContent: () => <ResearchWindow />,
    pathname: "/research",
  },
  {
    icon: <img src="/images/icons/contact.png" alt="" />,
    label: "Contact",
    w: 560,
    h: 535,
    makeContent: () => <ContactWindow />,
    pathname: "/contact",
  },
];
