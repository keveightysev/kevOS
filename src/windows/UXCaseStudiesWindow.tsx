import { ProjectBrowser } from "../components/ProjectBrowser/ProjectBrowser";
import { uxProjects } from "../data/projects";
import type { Project } from "../types/project";

export function UXCaseStudiesWindow({
  onOpenProject,
}: {
  onOpenProject?: (p: Project) => void;
}) {
  return (
    <ProjectBrowser
      projects={uxProjects}
      header="UX Case Studies"
      itemLabel="project"
      onOpenProject={onOpenProject}
    />
  );
}
