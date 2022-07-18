import React from "react";
import Divider from "../components/Divider";
import LayOut from "../components/LayOut";
import styles from "../styles/Experience.module.scss";
import commonStyles from "../styles/CommonStyles.module.scss";

function Experience() {
  return (
    <LayOut>
      <div className={styles.experienceContainer}>
        <h1>Resume</h1>
        <div className={styles.experienceContent}>
          <h2>Education</h2>
          <div className={commonStyles.timeLine}>
            <div className={commonStyles.leftPart}>
              <h3>2020-2024</h3>
            </div>
            <Divider height="5rem" />
            <div className={commonStyles.rightPart}>
              <h3>Manipal University Jaipur</h3>
              <p>
                A prefinal year student currently pursing my Bachelor&apos;s in
                Technology in Computer Science.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.experienceContent}>
          <h2>Experience</h2>
          <div className={commonStyles.timeLine}>
            <div className={commonStyles.leftPart}>
              <h3>Jan&apos;22-Apr&apos;22</h3>
            </div>
            <Divider height="6rem" />
            <div className={commonStyles.rightPart}>
              <h3>
                Frontend Developer Intern at{" "}
                <a
                  href="https://bugbase.in/"
                  style={{ color: "#10ca00" }}
                  target="__blanck"
                >
                  BugBase Pvt Ltd.
                </a>
              </h3>
              <p>
                Built 10+ interactive,{" "}
                <span style={{ color: "black", fontWeight: "600" }}>
                  Single-page React app
                </span>{" "}
                for the version2 (V2) website of BugBase and website{" "}
                <span style={{ color: "black", fontWeight: "600" }}>
                  performance by 15% and SEO by 7.2%
                </span>{" "}
                . Also Documented all major React components using{" "}
                <span style={{ color: "black", fontWeight: "600" }}>
                  StoryBook.js
                </span>
                for the convenience of future developers.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.experienceContent}>
          <h2>Community Work</h2>
          <div className={commonStyles.timeLine}>
            <div className={commonStyles.leftPart}>
              <h3>Dec&apos;21-Present</h3>
            </div>
            <Divider height="5rem" />
            <div className={commonStyles.rightPart}>
              <h3>
                Competitive Programming Lead at{" "}
                <a
                  href="https://www.codechef.com/campus_chapter/CodeChef_MU_Jaipur_Chapter"
                  style={{ color: "rgb(180 86 12)" }}
                  target="__blanck"
                >
                  Codechef Chapter MUJ
                </a>
              </h3>
              <p>
                Taught basic Data structure and algorithms to more than 20+
                students of my college.
              </p>
            </div>
          </div>
        </div>
      </div>
    </LayOut>
  );
}

export default Experience;
