import React, { useState, useEffect } from "react";
import MyPhoto from "../assets/me.jpg";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import "../aesthetics/Home.css";

const MainInfo = styled.div`
  text-align: center;
  img {
    object-fit: cover;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-position: 0px 0%;
  }
`;

const iconStyleLeet = {
  transform: "translateY(-2px)",
};
function Home() {
  return (
    <MainInfo>
      <img src={MyPhoto} alt={"Hello"} />
      <h1>Hi👋 I am Divyansh Singh</h1>
      <p>
        I am a 17 year old Fullstack Web Developer & Fintech enthusiast 😎🍹
        currently residing in Gurugram, Haryana. Graduating in 2021, I study
        Physics, Chemistry, Mathematics and Computer Science from Delhi Public
        School, Sushant Lok.
      </p>
      <h2>Skills & ComfortZone</h2>
      <p style={{ marginTop: "-10px" }}>
        Proficient in Python and Javascript, I Prefer the MERN Stack for web
        development, but am comfortable with other frameworks, templating
        engines and databases, which inlcude but are not limited to Flask,
        Django, Handlebars, EJS, Firebase, SQLite, MySQL etc. I am also
        interested in Mobile & Desktop Application development. I have made
        cross-platform mobile apps with both, React Native & Flutter, and
        cross-platform desktop apps with Electron.
      </p>
      <a target="_blank" rel="noreferrer" href="https://github.com/diivi">
        <FaGithub />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://mail.google.com/mail?view=cm&fs=1&to=divyanshanandsingh@gmail.com&body=Hello"
      >
        <SiGmail />
      </a>
      <a target="_blank" rel="noreferrer" href="https://t.me/divi_ded">
        <FaTelegram />
      </a>
      <a target="_blank" rel="noreferrer" href="https://twitter.com/divi_ded_">
        <FaTwitter />
      </a>
      <a target="_blank" rel="noreferrer" href="https://leetcode.com/diivi">
        <SiLeetcode style={iconStyleLeet} />
      </a>
    </MainInfo>
  );
}

export default Home;
