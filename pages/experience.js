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
              A Computer Science graduate with a B.Tech degree and a CGPA of 7.7.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.experienceContent}>
          <h2>Experience</h2>
          <div className={commonStyles.timeLine}>
            <div className={commonStyles.leftPart}>
              <h3>March&apos;25-Present</h3>
            </div>
            <Divider height="6rem" />
            <div className={commonStyles.rightPart}>
              <h3>
                Growth And Stratergy Analyst{" "}
                <a
                  href="https://www.cars24.com/"
                  style={{ color: "#0059a3" }}
                  target="__blanck"
                >
                  CARS24
                </a>
              </h3>
              <p>
              Led development of key business dashboards using <span style={{ color: "black", fontWeight: "600" }}> SQL (Snowflake), Google Sheets, App Script, and Tableau </span> to enable real-time performance tracking. Collaborated cross-functionally across teams via Slack, Meet, and email, effectively managing tight timelines and shifting priorities.


              </p>
            </div>
          </div>
          <div className={commonStyles.timeLine}>
            <div className={commonStyles.leftPart}>
              <h3>July&apos;24-Jan&apos;25</h3>
            </div>
            <Divider height="6rem" />
            <div className={commonStyles.rightPart}>
              <h3>
                Co-Founder at{" "}
                <a
                  href="https://app.proism.in/resume-curator"
                  style={{ color: "purple" }}
                  target="__blanck"
                >
                  Proism
                </a>
              </h3>
              <p>
              Improved <span style={{ color: "black", fontWeight: "600" }}> bounce rate by 40%</span> and <span style={{ color: "black", fontWeight: "600" }}> increased funnel conversion by 15% </span> through data-driven UX and content optimizations using Proism’s tracking system. Built a high-performance web app with React, TypeScript, and Next.js, <span style={{ color: "black", fontWeight: "600" }}>reducing code errors by 40%</span>, cutting timelines by 2 weeks, and boosting <span style={{ color: "black", fontWeight: "600" }}> SEO visibility by 40% </span>  within 3 months.

              </p>
            </div>
          </div>
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
      </div>
    </LayOut>
  );
}

export default Experience;
