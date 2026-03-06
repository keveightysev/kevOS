import styles from './WindowContent.module.css';

export function ResumeWindow() {
  const skills = [
    'React', 'TypeScript', 'React Native', 'JavaScript', 'Node.js',
    'Python', 'GraphQL', 'REST APIs', 'Figma', 'Design Systems',
    'HCI', 'UX Research', 'Usability Testing', 'Git', 'AWS',
  ];

  return (
    <div className={styles.content}>
      {/* Experience */}
      <div className={styles.section}>
        <div className={styles.sectionTitle}>Experience</div>

        <div className={styles.entry}>
          <div className={styles.entryTitle}>Senior Software Engineer</div>
          <div className={styles.entryMeta}>Pie Insurance · Chicago, IL · 2021 – Present</div>
          <div className={styles.entryDesc}>
            Lead front-end architecture for a React Native mobile app and
            React web platform. Built a shared component library used across
            three product teams. Drove design-engineering collaboration
            through Figma token pipelines and Storybook documentation.
          </div>
        </div>

        <div className={styles.entry}>
          <div className={styles.entryTitle}>Software Engineer</div>
          <div className={styles.entryMeta}>Branding Brand · Pittsburgh, PA · 2019 – 2021</div>
          <div className={styles.entryDesc}>
            Developed mobile commerce experiences for major retail brands
            using React Native. Collaborated with UX teams to implement
            accessible, performant interfaces for iOS and Android.
          </div>
        </div>
      </div>

      {/* Education */}
      <div className={styles.section}>
        <div className={styles.sectionTitle}>Education</div>

        <div className={styles.entry}>
          <div className={styles.entryTitle}>MS Human-Computer Interaction</div>
          <div className={styles.entryMeta}>DePaul University · Chicago, IL · 2024 – Present (exp. 2027)</div>
          <div className={styles.entryDesc}>
            Research focus: wayfinding systems and information architecture
            in public spaces. Thesis in progress (38% complete).
          </div>
        </div>

        <div className={styles.entry}>
          <div className={styles.entryTitle}>BS Business Administration</div>
          <div className={styles.entryMeta}>Western Governors University · 2018</div>
          <div className={styles.entryDesc}>
            Emphasis in IT management. Graduated with distinction.
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className={styles.section}>
        <div className={styles.sectionTitle}>Skills</div>
        <div className={styles.tags}>
          {skills.map(skill => (
            <span key={skill} className={styles.tag}>{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
