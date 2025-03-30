import Head from "next/head";
import Image from "next/image";
import LayOut from "../components/LayOut";
import styles from "../styles/Home.module.scss";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nitin | Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <LayOut>
        <div className={styles.homePage}>
          <div className={styles.textContainer}>
            <h3>Hey there!👏</h3>
            <h1>I am Nitin Rajesh</h1>
          </div>
          <a
            href="https://drive.google.com/file/d/1qjeJ7pAhh1FS92jg7QVXmoGBwBrn7ixo/view?usp=sharing"
            target="__blanck"
          >
            <button className={styles.resumeBtn}>
              <h3>Resume</h3>
            </button>
          </a>
          <div className={styles.socialMediaIcons}>
            <Link href={"https://github.com/nitin094-hub"}>
              <a target="_blank" rel="noopener noreferrer">
                <AiFillGithub size="37" color="white" />
              </a>
            </Link>
            <Link href={"https://www.linkedin.com/in/nitin-rajesh-25a5b71b4/"}>
              <a target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin size="37" color="white" />
              </a>
            </Link>
          </div>
        </div>
      </LayOut>
    </>
  );
}
