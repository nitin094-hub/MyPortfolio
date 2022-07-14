import React from "react";
import LayOut from "../components/LayOut";
import styles from "../styles/Projects.module.scss";

function projects() {
  return (
    <LayOut>
      <div className={styles.projectsContainer}>
        <h1>Projects</h1>
        <div className={styles.projects}>
          <div
            className={styles.project}
            style={{
              background:
                "url(" +
                "http://localhost:3000/_next/static/media/developersMate.5f64d98b.png" +
                ")",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
            }}
          >
            <a
              href="https://github.com/dhriti987/DevelopersMate"
              target="__blanck"
            ></a>
            <h5>Developer's Mate</h5>
          </div>
          <div
            className={styles.project}
            style={{
              background:
                "url(" +
                "http://localhost:3000/_next/static/media/portfolio.b07644ad.png" +
                ")",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
            }}
          >
            <a
              href="https://github.com/nitin094-hub/MyPortfolio"
              target="__blanck"
            ></a>
            <h5>Portfolio</h5>
          </div>
          <div
            className={styles.project}
            style={{
              background:
                "url(" +
                "http://localhost:3000/_next/static/media/QuizPortal.796691fc.png" +
                ")",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
            }}
          >
            <a
              href="https://github.com/nitin094-hub/QuizGame"
              target="__blanck"
            ></a>
            <h5>Quiz Portal</h5>
          </div>
        </div>
      </div>
    </LayOut>
  );
}

export default projects;
