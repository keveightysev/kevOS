import styles from './WindowContent.module.css';

export function ContactWindow() {
  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <div className={styles.name}>Get in Touch</div>
        <div className={styles.subtitle}>Chicago, IL · Open to opportunities</div>
      </div>

      <div className={styles.section}>
        <div className={styles.contactRow}>
          <span className={styles.contactIcon}>✉️</span>
          <a
            href="mailto:kevin@kevos.dev"
            className={styles.contactLink}
            aria-label="Send email to Kevin"
          >
            kevin@kevos.dev
          </a>
        </div>
        <div className={styles.contactRow}>
          <span className={styles.contactIcon}>💼</span>
          <a
            href="https://linkedin.com/in/kevinsmith"
            className={styles.contactLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kevin's LinkedIn profile"
          >
            linkedin.com/in/kevinsmith
          </a>
        </div>
        <div className={styles.contactRow}>
          <span className={styles.contactIcon}>🐙</span>
          <a
            href="https://github.com/kevinsmith"
            className={styles.contactLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kevin's GitHub profile"
          >
            github.com/kevinsmith
          </a>
        </div>
      </div>
    </div>
  );
}
