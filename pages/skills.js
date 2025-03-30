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

function projects() {
  return (
    <LayOut>
      <div className={styles.aboutContainer}>
        <h1>Skills</h1>
    
        <div className={styles.whatIDo}>
          <div className={styles.whatIDoContent}>
            <div className={styles.whatIDoContainers} style={{flexBasis:"100%"}}>
              <div className={styles.TechIcons}>
              <div>
                  <Image
                    src={mysql}
                    alt="mysql Icon"
                    width={90}
                    height={90}
                  />
                </div>
              <div>
                  <Image
                    src={google_analytics}
                    alt="google_analytics Icon"
                    width={90}
                    height={90}
                  />
                </div>
              <div>
                  <Image
                    src={excel}
                    alt="excel Icon"
                    width={90}
                    height={90}
                  />
                </div>
              <div>
                  <Image
                    src={snowflake}
                    alt="snowflake Icon"
                    width={90}
                    height={90}
                  />
                </div>
              <div>
                  <Image
                    src={tableau}
                    alt="tableau Icon"
                    width={90}
                    height={90}
                  />
                </div>
                <div>
                  <Image
                    src={html}
                    alt="HTML Icon"
                    width={90}
                    height={90}
                  />
                </div>
                <div>
                  <Image
                    src={css}
                    alt="CSS Icon"
                    width={90}
                    height={90}
                  />
                </div>
                <div>
                  <Image
                    src={javascript}
                    alt="Javascript Icon"
                    width={90}
                    height={90}
                  />
                </div>
                <div>
                  <Image
                    src={react}
                    alt="React Icon"
                    width={90}
                    height={90}
                  />
                </div>
                <div>
                  <Image
                    src={nextJs}
                    alt="NextJs Icon"
                    width={90}
                    height={90}
                  />
                </div>
                <div>
                  <Image
                    src={redux}
                    alt="Redux Icon"
                    width={90}
                    height={90}
                  />
                </div>
                <div>
                  <Image
                    src={sass}
                    alt="Sass Icon"
                    width={90}
                    height={90}
                  />
                </div>
                <div>
                  <Image
                    src={nodeJs}
                    alt="nodeJs Icon"
                    width={90}
                    height={90}
                  />
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayOut>
  );
}

export default projects;
