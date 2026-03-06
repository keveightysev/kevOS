import styles from './WindowContent.module.css';

const PROCESS_STEPS = [
  'User research & interviews',
  'Competitive analysis',
  'Information architecture',
  'Visual identity system',
  'Component library in Figma',
  'Prototype & usability testing',
];

export function RepriseWindow() {
  return (
    <div className={styles.content}>
      {/* Full-width iridescent banner */}
      <div className={styles.banner}>
        <div className={styles.bannerTitle}>REPRISE</div>
        <div className={styles.bannerSubtitle}>
          UX Design · Wayfinding · Mobile
        </div>
      </div>

      <div className={styles.section}>
        <p>
          Reprise is a wayfinding and inventory app concept for secondhand
          retail stores — designed to help shoppers discover items by
          department, size, and color without staff assistance. The project
          explores how information architecture and in-store signage can
          transform the secondhand shopping experience.
        </p>
      </div>

      <div className={styles.section}>
        <p>
          Research revealed that irregular stock and inconsistent labeling
          create friction for shoppers navigating large thrift stores.
          Reprise addresses this through a scannable color-coded tag system
          paired with a companion mobile app.
        </p>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionTitle}>Design Process</div>
        <ol className={styles.steps}>
          {PROCESS_STEPS.map(step => (
            <li key={step} className={styles.step}>{step}</li>
          ))}
        </ol>
      </div>

      <div className={styles.section}>
        <div className={styles.tags}>
          {['UX Research', 'Figma', 'Wayfinding', 'Mobile', 'Prototyping', 'React Native'].map(tag => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
