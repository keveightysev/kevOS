import { useState } from "react";
import type { Project } from "../types/project";
import { uxProjects } from "../data/projects";
import styles from "./ProjectBrowserWindow.module.css";

function ProjectCard({
  project,
  isSelected,
  onClick,
}: {
  project: Project;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={`${styles.card} ${isSelected ? styles.cardSelected : ""}`}
      onClick={onClick}
      aria-selected={isSelected}
      aria-label={`View ${project.title}`}
    >
      <div className={styles.cardThumb}>
        <img
          src={project.thumbnail.src}
          alt={project.thumbnail.alt}
          className={styles.cardThumbImg}
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        <div className={styles.cardThumbFallback}>
          <span className={styles.cardThumbYear}>{project.year}</span>
        </div>
      </div>
      <div className={styles.cardMeta}>
        <span className={styles.cardTitle}>{project.title}</span>
        <span className={styles.cardSubtitle}>{project.subtitle}</span>
      </div>
    </button>
  );
}

function SidePanel({
  project,
  onOpen,
  onBack,
  isMobile,
}: {
  project: Project | null;
  onOpen: (p: Project) => void;
  onBack: () => void;
  isMobile: boolean;
}) {
  if (!project) {
    return (
      <div className={styles.emptyPanel}>
        <div className={styles.emptyIcon}>◻</div>
        <p className={styles.emptyText}>Select a project to preview</p>
      </div>
    );
  }

  const hasLink =
    project.links && project.links.length > 0 && project.links[0].url;

  return (
    <div className={styles.sidePanel}>
      {isMobile && (
        <button className={styles.backButton} onClick={onBack}>
          ← Back
        </button>
      )}
      <div className={styles.sidePanelHero}>
        <img
          src={project.hero?.src}
          alt={project.hero?.alt}
          style={project.hero?.style}
          className={styles.sidePanelHeroImg}
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>

      <div className={styles.sidePanelContent}>
        <h2 className={styles.sidePanelTitle}>{project.title}</h2>
        <p className={styles.sidePanelSubtitle}>{project.subtitle}</p>

        <div className={styles.sidePanelTags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>

        <div className={styles.sidePanelActions}>
          {hasLink && (
            <a
              href={project.links![0].url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.actionButton}
            >
              {project.links![0].label} ↗
            </a>
          )}
          {project.caseStudyUrl && (
            <a
              href={project.caseStudyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.openButton}
              aria-label={`Open full case study: ${project.title}`}
            >
              Open Case Study ↗
            </a>
          )}
        </div>

        <p className={styles.sidePanelSummary}>{project.summary}</p>

        {project.sections && project.sections.length > 0 && (
          <div className={styles.sidePanelSections}>
            {project.sections.map((section) => (
              <div key={section.title} className={styles.section}>
                <h3 className={styles.sectionTitle}>{section.title}</h3>
                <p className={styles.sectionContent}>
                  {typeof section.content === "string"
                    ? section.content
                    : section.content}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function UXCaseStudiesWindow({
  onOpenProject,
}: {
  onOpenProject?: (p: Project) => void;
}) {
  const [selected, setSelected] = useState<Project | null>(null);

  const isMobile = window.innerWidth <= 540;

  const handleBack = () => setSelected(null);

  return (
    <div className={styles.browser}>
      {/* Left panel — project list */}
      <div
        className={`${styles.listPanel} ${selected && isMobile ? styles.listPanelHidden : ""}`}
      >
        <div className={styles.listHeader}>
          <span className={styles.listHeaderText}>UX Case Studies</span>
          <span className={styles.listCount}>
            {uxProjects.length} project{uxProjects.length !== 1 ? "s" : ""}
          </span>
        </div>
        <div className={styles.list}>
          {uxProjects.length === 0 ? (
            <p className={styles.listEmpty}>No projects yet.</p>
          ) : (
            uxProjects.map((p) => (
              <ProjectCard
                key={p.id}
                project={p}
                isSelected={selected?.id === p.id}
                onClick={() => setSelected(p)}
              />
            ))
          )}
        </div>
      </div>

      {/* Right panel — detail */}
      <div
        className={`${styles.detailPanel} ${!selected && isMobile ? styles.detailPanelHidden : ""}`}
      >
        <SidePanel
          project={selected}
          onOpen={(p) => onOpenProject?.(p)}
          onBack={handleBack}
          isMobile={isMobile}
        />
      </div>
    </div>
  );
}
