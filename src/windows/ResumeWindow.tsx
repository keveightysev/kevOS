import styles from "./WindowContent.module.css";

export function ResumeWindow() {
  const DRIVE_FILE_ID = "1uhFpWVORTMVm1pZTghBcG6AEoPO46Gpe";
  return (
    <div className={styles.resumeContainer}>
      <iframe
        src={`https://drive.google.com/file/d/${DRIVE_FILE_ID}/preview`}
        width="100%"
        height="100%"
        style={{ border: "none", display: "block", flex: 1 }}
        title="Kevin Smith Resume"
        allow="autoplay"
      />
      <div
        style={{
          padding: "6px 12px",
          borderTop: "1px solid var(--border-color)",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <a
          href={`https://drive.google.com/uc?export=download&id=${DRIVE_FILE_ID}`}
          target="_blank"
          rel="noreferrer"
          style={{
            fontSize: 11,
            fontFamily: "monospace",
            color: "var(--link-color)",
          }}
        >
          Download PDF ↓
        </a>
      </div>
    </div>
  );
}
