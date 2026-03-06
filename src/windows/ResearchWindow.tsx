import styles from './WindowContent.module.css';

export function ResearchWindow() {
  return (
    <div className={styles.content}>
      <div className={styles.placeholder}>
        <div className={styles.placeholderIcon}>📚</div>
        <div className={styles.placeholderTitle}>UX &amp; Research</div>
        <div className={styles.placeholderText}>
          HCI research, usability studies, and thesis work on wayfinding
          in public retail spaces.
          <br /><br />
          <span style={{ fontStyle: 'italic' }}>
            MS HCI thesis 38% complete — check back soon.
          </span>
        </div>
        <div className={styles.tags} style={{ justifyContent: 'center' }}>
          {['HCI', 'UX Research', 'Wayfinding', 'Usability Testing', 'Figma'].map(tag => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
