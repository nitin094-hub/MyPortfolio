import React from "react";
import LayOut from "../components/LayOut";
import styles from "../styles/Projects.module.scss";
import developersMate from "../assets/developersMate.png";
import portfolio from "../assets/portfolio.png";
import quizPortal from "../assets/quizPortal.png";
import musicPlayer from "../assets/musicPlayer.png";

function projects() {
  return (
    <LayOut>
      <div className={styles.projectsContainer}>
        <h1>Projects</h1>
        <div className={styles.projects}>
          <div
            className={styles.project}
            style={{
              backgroundImage: `url(${developersMate.src})`,
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
              backgroundImage: `url(${portfolio.src})`,
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
              background: `url(${quizPortal.src})`,

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
          <div
            className={styles.project}
            style={{
              background: `url(${musicPlayer.src})`,

              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
            }}
          >
            <a
              href="https://github.com/nitin094-hub/MusicPlayer"
              target="__blanck"
            ></a>
            <h5>Music Player</h5>
          </div>
        </div>
      </div>
    </LayOut>
  );
}

export default projects;
