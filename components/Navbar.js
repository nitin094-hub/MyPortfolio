import React, { useEffect, useState } from "react";
import styles from "../styles/Navbar.module.scss";
import { AiFillHome, AiFillProject, AiFillTrophy } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { GoMortarBoard } from "react-icons/go";
import Link from "next/link";
import { useRouter } from 'next/router'

function Navbar() {
  const router = useRouter();
  const [navbarContent, setNavbarContent] = useState({
    home: false,
    about: false,
    experience: false,
    projects: false,
    achievements: false,
  });

  return (
    <div className={styles.navbarContainer}>
      <Link href={"/"}>
        <a
          onMouseEnter={() => {
            setNavbarContent({
              ...navbarContent,
              home: true,
            });
          }}
          onMouseLeave={() => {
            setNavbarContent({
              ...navbarContent,
              home: false,
            });
          }}
        >
          <AiFillHome size={37} color={router.pathname==="/" ? "black" : "#b5b6b7"} />
          <span
            style={
              navbarContent.home
                ? { right: "4rem", opacity: "1" }
                : { right: "0", opacity: "0" }
            }
          >
            <h3>Home</h3>
          </span>
        </a>
      </Link>
      <Link href={"/about"}>
        <a
          onMouseEnter={() => {
            setNavbarContent({
              ...navbarContent,
              about: true,
            });
          }}
          onMouseLeave={() => {
            setNavbarContent({
              ...navbarContent,
              about: false,
            });
          }}
        >
          <BsPersonFill size={37} color={router.pathname==="/about" ? "black" : "#b5b6b7"} />
          <span
            style={
              navbarContent.about
                ? { right: "4rem", opacity: "1" }
                : { right: "0", opacity: "0" }
            }
          >
            <h3>About</h3>
          </span>
        </a>
      </Link>
      <Link href={"/experience"}>
        <a
          onMouseEnter={() => {
            setNavbarContent({
              ...navbarContent,
              experience: true,
            });
          }}
          onMouseLeave={() => {
            setNavbarContent({
              ...navbarContent,
              experience: false,
            });
          }}
        >
          <GoMortarBoard size={37} color={router.pathname==="/experience" ? "black" : "#b5b6b7"} />
          <span
            style={
              navbarContent.experience
                ? { right: "4rem", opacity: "1" }
                : { right: "0", opacity: "0" }
            }
          >
            <h3>Experience</h3>
          </span>
        </a>
      </Link>
      <Link href={"/projects"}>
        <a
          onMouseEnter={() => {
            setNavbarContent({
              ...navbarContent,
              projects: true,
            });
          }}
          onMouseLeave={() => {
            setNavbarContent({
              ...navbarContent,
              projects: false,
            });
          }}
        >
          <AiFillProject size={37} color={router.pathname==="/projects" ? "black" : "#b5b6b7"} />
          <span
            style={
              navbarContent.projects
                ? { right: "4rem", opacity: "1" }
                : { right: "0", opacity: "0" }
            }
          >
            <h3>Projects</h3>
          </span>
        </a>
      </Link>
      <Link href={"/achievements"}>
        <a
          onMouseEnter={() => {
            setNavbarContent({
              ...navbarContent,
              achievements: true,
            });
          }}
          onMouseLeave={() => {
            setNavbarContent({
              ...navbarContent,
              achievements: false,
            });
          }}
        >
          <AiFillTrophy size={37} color={router.pathname==="/achievements" ? "black" : "#b5b6b7"} />
          <span
            style={
              navbarContent.achievements
                ? { right: "4rem", opacity: "1" }
                : { right: "0", opacity: "0" }
            }
          >
            <h3>Achievements</h3>
          </span>
        </a>
      </Link>
    </div>
  );
}

export default Navbar;
