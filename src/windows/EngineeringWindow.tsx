import { ProjectBrowser } from "../components/ProjectBrowser/ProjectBrowser";
import { engineeringProjects } from "../data/projects";
import type { Project } from "../types/project";

export function EngineeringWindow({
  onOpenProject,
}: {
  onOpenProject?: (p: Project) => void;
}) {
  return (
    <ProjectBrowser
      projects={engineeringProjects}
      header="Engineering Work"
      itemLabel="project"
      onOpenProject={onOpenProject}
    />
  );
}
