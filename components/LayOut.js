import React from "react";
import Image from "next/image";
import styles from "../styles/LayOut.module.scss";
import profileImg from "../assets/myImage.jpeg";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import Link from "next/link";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

function LayOut({ children }) {
  const variant1 = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };
  const variant2 = {
    hidden: { opacity: 0, scale:0 },
    enter: { opacity: 1, scale:1 },
    exit: { opacity: 0, scale:0 },
  }
  const variant3 = {
    hidden: { opacity: 0, x: 0, y: -200 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -200, y: 0 },
  }
  const variant4 = {
    hidden: { opacity: 0, rotate:360,scale:0},
    enter: { opacity: 1, rotate:0,scale:1 },
    exit: { opacity: 0, rotate:360,scale:0 },
  }

  const variants = [variant2,variant1,variant3,variant4];
  return (
    <div className={styles.container}>
      <div className={styles.mainContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.profImg}>
            <Image
              src={profileImg}
              alt="Picture of the author"
              width={220}
              height={170}
            />
          </div>
          <div className={styles.textContainer}>
            <h1>Nitin Rajesh</h1>

            <h3>Ready to dev</h3>
          </div>
          <div className={styles.socialMediaIcons}>
            <Link href={"https://github.com/nitin094-hub"}>
              <a target="_blank" rel="noopener noreferrer">
                <AiFillGithub size={27} color="white" />
              </a>
            </Link>
            <Link href={"https://www.linkedin.com/in/nitin-rajesh-25a5b71b4/"}>
              <a target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin size={27} color="white" />
              </a>
            </Link>
            <Link href={"https://twitter.com/NitinRajesh4"}>
              <a target="_blank" rel="noopener noreferrer">
                <AiFillTwitterCircle size={27} color="white" />
              </a>
            </Link>
            <Link href={"https://leetcode.com/DeadDeal_1/"}>
              <a target="_blank" rel="noopener noreferrer">
                <SiLeetcode size={27} color="white" />
              </a>
            </Link>
          </div>
          <a
            href="https://drive.google.com/file/d/1giqpxosXS2lmT2JgD1IzTeP1zL_Ip0Ww/view?usp=sharing"
            target="__blanck"
          >
            <button className={styles.resumeBtn}>
              <h3>Resume</h3>
            </button>
          </a>
        </div>
          <motion.div
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants[Math.floor(Math.random() * (4))]}
            transition={{ type: "linear",duration:1 }}
            className={styles.rightContainer}
          >
            {children}
          </motion.div>
      </div>
      <Navbar />
    </div>
  );
}

export default LayOut;
