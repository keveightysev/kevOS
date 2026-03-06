import styles from './WindowContent.module.css';

export function EngineeringWindow() {
  return (
    <div className={styles.content}>
      <div className={styles.placeholder}>
        <div className={styles.placeholderIcon}>💼</div>
        <div className={styles.placeholderTitle}>Engineering Work</div>
        <div className={styles.placeholderText}>
          Case studies, open-source contributions, and selected projects
          are being compiled here.
          <br /><br />
          <span style={{ fontStyle: 'italic' }}>Coming soon...</span>
        </div>
        <div className={styles.tags} style={{ justifyContent: 'center' }}>
          {['React', 'TypeScript', 'React Native', 'Node.js', 'Design Systems'].map(tag => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
