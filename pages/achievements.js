import React from "react";
import LayOut from "../components/LayOut";
import styles from "../styles/Achievements.module.scss";
import commonStyles from "../styles/CommonStyles.module.scss";
import Divider from "../components/Divider";

function Achievements() {
  return (
    <LayOut>
      <div className={styles.achievementsContainer}>
        <h1>Achievements</h1>
        <div className={styles.achievementsContent}>
          <div className={commonStyles.timeLine}>
            <div className={commonStyles.leftPart}>
              <h3>Sept&apos;21</h3>
              <p>Codechef</p>
            </div>
            <Divider  height="5rem" />
            <div className={commonStyles.rightPart}>
              <h3>
                4⭐(max) at{" "}
                <a
                  href="https://www.codechef.com/users/deaddeal_09"
                  style={{ color: "rgb(180 86 12)" }}
                  target="__blanck"
                >
                  Codechef
                </a>{" "}
                (highest rating 1832).{" "}
              </h3>
            </div>
          </div>
          <div className={commonStyles.timeLine}>
            <div className={commonStyles.leftPart}>
              <h3>Sept&apos;21</h3>
            </div>
            <Divider  height="5rem" />
            <div className={commonStyles.rightPart}>
              <h3>
                Global Rank under 465 in{" "}
                <a
                  href="https://www.codechef.com/COOK133B"
                  style={{ color: "rgb(180 86 12)" }}
                  target="__blanck"
                >
                  Codechef Sept Cook-off (Div2)
                </a>{" "}
                .
              </h3>
            </div>
          </div>
          <div className={commonStyles.timeLine}>
            <div className={commonStyles.leftPart}>
              <h3>Mar&apos;21</h3>
            </div>
            <Divider  height="5rem" />
            <div className={commonStyles.rightPart}>
              <h3>
                Global Rank under 323 in{" "}
                <a
                  href="https://www.codechef.com/START2C"
                  style={{ color: "rgb(180 86 12)" }}
                  target="__blanck"
                >
                  Codechef Mar Starter (Div3).
                </a>{" "}
              </h3>
            </div>
          </div>
          <div className={commonStyles.timeLine}>
            <div className={commonStyles.leftPart}>
              <h3>Sept&apos;21</h3>
              <p>Google</p>
            </div>
            <Divider height="3rem" />
            <div className={commonStyles.rightPart}>
              <h3>
                All India Rank under 600 in{" "}
                <a
                  href="https://codingcompetitions.withgoogle.com/hashcode/certificate/summary/00000000008cb4d4"
                  style={{ color: "rgb(180 86 12)" }}
                  target="__blanck"
                >
                  Google Hashcode.
                </a>{" "}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </LayOut>
  );
}

export default Achievements;
