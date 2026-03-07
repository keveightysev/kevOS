import { ProjectBrowser } from "../components/ProjectBrowser/ProjectBrowser";
import { researchProjects } from "../data/projects";
import type { Project } from "../types/project";

export function ResearchWindow({
  onOpenProject,
}: {
  onOpenProject?: (p: Project) => void;
}) {
  return (
    <ProjectBrowser
      projects={researchProjects}
      header="Research"
      itemLabel="paper"
      onOpenProject={onOpenProject}
    />
  );
}
