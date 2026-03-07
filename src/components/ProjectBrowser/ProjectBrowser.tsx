import { useState } from "react";
import type { Project } from "../../types/project";
import styles from "./ProjectBrowser.module.css";
import { WindowCollapseLeftIcon } from "../../icons/WindowCollapseLeftIcon";

// ─── Project Card ────────────────────────────────────────────────────────────

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

// ─── Empty Panel ─────────────────────────────────────────────────────────────

function EmptyPanel({ label }: { label: string }) {
  return (
    <div className={styles.emptyPanel}>
      <div className={styles.emptyIcon}>
        <WindowCollapseLeftIcon />
      </div>
      <p className={styles.emptyText}>Select a {label} to preview</p>
    </div>
  );
}

// ─── Side Panel ──────────────────────────────────────────────────────────────

function SidePanel({
  project,
  onOpen,
  onBack,
  isMobile,
}: {
  project: Project;
  onOpen: (p: Project) => void;
  onBack: () => void;
  isMobile: boolean;
}) {
  const hasLinks = project.links && project.links.some((l) => l.url);

  return (
    <div className={styles.sidePanel}>
      {isMobile && (
        <button
          className={styles.backButton}
          onClick={onBack}
          aria-label="Back to list"
        >
          ← Back
        </button>
      )}

      {project.hero && (
        <div className={styles.sidePanelHero}>
          <img
            src={project.hero.src}
            alt={project.hero.alt}
            className={styles.sidePanelHeroImg}
            style={project.hero.style}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
      )}

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
          {hasLinks &&
            project
              .links!.filter((l) => l.url)
              .map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.actionButton}
                >
                  {link.label} ↗
                </a>
              ))}
          {project.caseStudyUrl && (
            <button
              className={styles.openButton}
              onClick={() => onOpen(project)}
              aria-label={`Open full view: ${project.title}`}
            >
              Open Full View
            </button>
          )}
        </div>

        <p className={styles.sidePanelSummary}>{project.summary}</p>

        {project.sections && project.sections.length > 0 && (
          <div className={styles.sidePanelSections}>
            {project.sections.map((section) => (
              <div key={section.title} className={styles.section}>
                <h3 className={styles.sectionTitle}>{section.title}</h3>
                <div className={styles.sectionContent}>
                  {typeof section.content === "string" ? (
                    <p>{section.content}</p>
                  ) : (
                    section.content
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Project Browser ─────────────────────────────────────────────────────────

interface ProjectBrowserProps {
  projects: Project[];
  header: string;
  itemLabel?: string;
  onOpenProject?: (p: Project) => void;
}

export function ProjectBrowser({
  projects,
  header,
  itemLabel = "project",
  onOpenProject,
}: ProjectBrowserProps) {
  const [selected, setSelected] = useState<Project | null>(null);
  const isMobile = window.innerWidth <= 540;

  const showList = !isMobile || selected === null;
  const showPanel = selected !== null;

  const countLabel = `${projects.length} ${
    projects.length === 1 ? itemLabel : `${itemLabel}s`
  }`;

  return (
    <div className={styles.browser}>
      {/* Left panel */}
      {showList && (
        <div className={styles.listPanel}>
          <div className={styles.listHeader}>
            <span className={styles.listHeaderText}>{header}</span>
            <span className={styles.listCount}>{countLabel}</span>
          </div>
          <div className={styles.list}>
            {projects.length === 0 ? (
              <p className={styles.listEmpty}>Nothing here yet.</p>
            ) : (
              projects.map((p) => (
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
      )}

      {/* Right panel */}
      <div className={styles.detailPanel}>
        {showPanel ? (
          <SidePanel
            project={selected}
            onOpen={(p) => onOpenProject?.(p)}
            onBack={() => setSelected(null)}
            isMobile={isMobile}
          />
        ) : (
          !isMobile && <EmptyPanel label={itemLabel} />
        )}
      </div>
    </div>
  );
}
