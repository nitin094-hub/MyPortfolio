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

function About() {
  return (
    <LayOut>
      <div className={styles.aboutContainer}>
        <h1>About Me</h1>
        <div className={styles.aboutMe}>
          <div className={styles.aboutMeText}>
            <p>
              I am Nitin Rajesh, a student passionate about Web Development. I
              am an undergrad at Manipal University Jaipur, India in the field
              of Computer Science. I enjoy creating web applications that live
              on the internet and can be accessed by everyone. I have been
              developing software for quite some time it has been awesome so
              far! My main focus these days is to write performant and
              industry-standard code. I pay close attention to details and have
              a knack for UI/UX
            </p>
          </div>
          <div className={styles.aboutMePoints}>
            <p>
              <span>Age</span> 20
            </p>
            <p>
              <span>Nationality </span> Indian
            </p>
            <p>
              <span>Address </span> Jaipur, Rajasthan
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
              <h2>Development</h2>
              <p>
                I am interested in Web Development. Moreover, I am fascinated by
                different types of frontend Technologies that make frontend
                developer&apos;s life easier. I really enjoy trying out new
                technologies and creating something useful out of them.
              </p>
            </div>
            <div className={styles.whatIDoContainers}>
              <h2>Community Work</h2>
              <p>
                I have contributed to more than 10 open-source projects on
                Github. Mostly I have worked on building the fronted responsive
                pages and linking backend with API.
              </p>
            </div>
            <div className={styles.whatIDoContainers} style={{flexBasis:"100%"}}>
              <h2>Tech I am familiar with</h2>
              <div className={styles.TechIcons}>
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

export default About;
