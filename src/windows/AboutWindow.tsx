import { PixelatedPhoto } from "../components/PixelatedPhoto";
import styles from "./WindowContent.module.css";

export function AboutWindow() {
  const tags = [
    "Gaming",
    "Karaoke",
    "Travel",
    "Making people laugh",
    "Critical technology",
    "Design theory",
    "Independent Research",
  ];

  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <div className={styles.avatarWrapper}>
          <PixelatedPhoto
            src="/images/kevin.jpg"
            width={300}
            height={300}
            alt="Photo of Kevin Smith"
            pixelSize={4}
            className={styles.avatar}
            easingFactor={0.1}
          />
        </div>
        <div className={styles.headerContent}>
          <div className={styles.name}>Kevin Smith</div>
          <div className={styles.subtitle}>
            Senior Software Engineer&nbsp;·&nbsp;HCI Graduate Student
          </div>
          <div className={styles.subtitleLocation}>Chicago, IL</div>
        </div>
      </div>

      <div className={styles.section}>
        <p>
          I'm a software engineer, though that's always felt like the shortest
          version of a longer answer.
        </p>
        <p>
          I came to engineering later than most, and I think that's why I see it
          differently. Rather than focus on raw technical chops, I've always
          been more interested in the bigger picture than the code itself.
          Working across functions, understanding what a product actually means
          to the people inside it, knowing when to build and when to ask why
          we're building at all. That instinct came from years before I wrote a
          single line of code and I've never stopped treating it as my sharpest
          tool.
        </p>
        <p>
          Starting my master's in Human-Computer Interaction cracked something
          open. I've spent most of my career as a "work to live" person.
          Engineering was something I did well and enjoyed, but it wasn't
          everything. That's been shifting. The more I study how people and
          technology shape each other, the harder it is to be casual about it.
          Human-centered design, to me, isn't a methodology. It's a commitment
          to working <em>with</em> people toward real solutions, and to putting
          meaning before efficiency.
        </p>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionTitle}>Interests</div>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
