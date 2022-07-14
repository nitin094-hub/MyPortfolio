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

export default function Home() {
  return (
      <LayOut>
        <div className={styles.homePage}>
          <div className={styles.textContainer}>
            <h3>Hey there!👏</h3>
            <h1>I am Nitin Rajesh</h1>
          </div>
          <div className={styles.socialMediaIcons}>
            <Link
              href={
                "https://nextjs.org/learn/basics/navigate-between-pages/link-component"
              }
            >
              <a target="_blank" rel="noopener noreferrer">
                <AiFillGithub size="37" color="white" />
              </a>
            </Link>
            <Link
              href={
                "https://nextjs.org/learn/basics/navigate-between-pages/link-component"
              }
            >
              <a target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin size="37" color="white" />
              </a>
            </Link>
            <Link
              href={
                "https://nextjs.org/learn/basics/navigate-between-pages/link-component"
              }
            >
              <a target="_blank" rel="noopener noreferrer">
                <AiFillTwitterCircle size="37" color="white" />
              </a>
            </Link>
            <Link
              href={
                "https://nextjs.org/learn/basics/navigate-between-pages/link-component"
              }
            >
              <a target="_blank" rel="noopener noreferrer">
                <SiLeetcode size="37" color="white" />
              </a>
            </Link>
          </div>
        </div>
      </LayOut>
  );
}
