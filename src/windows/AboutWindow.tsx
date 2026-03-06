import styles from './WindowContent.module.css';

export function AboutWindow() {
  const tags = [
    'React', 'TypeScript', 'React Native', 'HCI', 'UX Research',
    'Design Systems', 'Figma', 'Node.js', 'Python',
  ];

  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <div className={styles.avatar} aria-hidden="true">👤</div>
        <div className={styles.name}>Kevin Smith</div>
        <div className={styles.subtitle}>
          Senior Software Engineer · HCI Graduate Student · Chicago, IL
        </div>
      </div>

      <div className={styles.section}>
        <p>
          I'm a senior software engineer with a decade of experience building
          consumer-facing products at scale. Currently pursuing an MS in
          Human-Computer Interaction at DePaul University, deepening my
          understanding of how design decisions shape the way people work,
          play, and connect.
        </p>
      </div>

      <div className={styles.section}>
        <p>
          My engineering work spans mobile and web — from React Native apps
          serving millions of users to design system infrastructure that lets
          teams ship consistently. I care about the gap between how interfaces
          are intended and how they're actually used.
        </p>
      </div>

      <div className={styles.section}>
        <p>
          Outside of code, I'm interested in wayfinding, information
          architecture, and the quiet moments where technology gets out of
          the way entirely.
        </p>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionTitle}>Skills &amp; Interests</div>
        <div className={styles.tags}>
          {tags.map(tag => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
