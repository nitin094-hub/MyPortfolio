import React from "react";
import LayOut from "../components/LayOut";
import styles from "../styles/About.module.scss";
import Image from "next/image";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import javascript from "../assets/javascript.svg";
import react from "../assets/react.svg";
import nextJs from "../assets/nextJs.svg";
import redux from "../assets/redux.svg";
import sass from "../assets/sass.svg";
import nodeJs from "../assets/nodeJs.svg";
import mysql from "../assets/mysql.svg";
import google_analytics from "../assets/google_analytics.svg";
import excel from "../assets/excel.svg";
import snowflake from "../assets/snowflake.svg";
import tableau from "../assets/tableau.svg";

function About() {
  return (
    <LayOut>
      <div className={styles.aboutContainer}>
        <h1>About Me</h1>
        <div className={styles.aboutMe}>
          <div className={styles.aboutMeText}>
            <p>
            🎓 Recent graduate from Manipal University Jaipur with a passion for tech, data, and solving real-world business problems.
<br></br>
<br></br>
🚀 I started my journey as a front-end developer and had the opportunity to help build Proism, where I combined design thinking with hands-on development. Over time, my interest shifted from just building interfaces to understanding user behavior, analyzing data, and aligning tech solutions with business goals.

<br></br>
<br></br>
📊 With experience working in startup environments, I&apos;ve developed a strong foundation in business analysis — blending my problem-solving mindset with technical skills in SQL, Python, Excel, and data visualization. My background in development (React, Next.js, Redux) helps me bridge the gap between product and engineering teams.
            </p>
          </div>
          <div className={styles.aboutMePoints}>
            <p>
              <span>Age</span> 23
            </p>
            <p>
              <span>Nationality </span> Indian
            </p>
            <p>
              <span>Address </span> New Delhi
            </p>
            <p>
              <span>E-mail</span> nitinrajesh094@gmail.com
            </p>
          </div>
        </div>
        <div className={styles.whatIDo}>
          <h1>What I Do</h1>
          <div className={styles.whatIDoContent}>
            <div className={styles.whatIDoContainers}>
              <h2>Business Analyst</h2>
              <p>
              I&apos;m deeply interested in business analysis and fascinated by the variety of tools and technologies that help analysts derive insights and make smarter decisions. I enjoy exploring new analytical techniques, dashboards, and platforms that simplify complex data and help create meaningful, actionable outcomes. There's something exciting about turning raw data into real business value.


              </p>
            </div>
            <div className={styles.whatIDoContainers}>
              <h2>Development</h2>
              <p>
              I&apos;m passionate about business analysis and front-end development, combining data-driven insights with user-focused design. I enjoy exploring new tools and technologies to build intuitive interfaces and create solutions that deliver real business value.              </p>
            </div>
          </div>
        </div>
      </div>
    </LayOut>
  );
}

export default About;
