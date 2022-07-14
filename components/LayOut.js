import React from "react";
import Image from "next/image";
import styles from "../styles/LayOut.module.scss";
import profileImg from "../assets/profileImg.jpg";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import Link from "next/link";
import Navbar from "./Navbar";

function LayOut({ children }) {
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
            <Link
              href={
                "https://nextjs.org/learn/basics/navigate-between-pages/link-component"
              }
            >
              <a target="_blank" rel="noopener noreferrer">
                <AiFillGithub size={27} color="white" />
              </a>
            </Link>
            <Link
              href={
                "https://nextjs.org/learn/basics/navigate-between-pages/link-component"
              }
            >
              <a target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin size={27} color="white" />
              </a>
            </Link>
            <Link
              href={
                "https://nextjs.org/learn/basics/navigate-between-pages/link-component"
              }
            >
              <a target="_blank" rel="noopener noreferrer">
                <AiFillTwitterCircle size={27} color="white" />
              </a>
            </Link>
            <Link
              href={
                "https://nextjs.org/learn/basics/navigate-between-pages/link-component"
              }
            >
              <a target="_blank" rel="noopener noreferrer">
                <SiLeetcode size={27} color="white" />
              </a>
            </Link>
          </div>
          <button className={styles.resumeBtn}>
            <h3>Resume</h3>
          </button>
        </div>
        <div className={styles.rightContainer}>
            {children}
        </div>
      </div>
      <Navbar/>
    </div>
  );
}

export default LayOut;
