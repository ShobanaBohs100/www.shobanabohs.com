/** @jsxImportSource theme-ui */
import React from "react";
import IntroImg from "../../images/designers.gif";
import github from "../../images/github.png";
import gmail from "../../images/gmail.png";
import linkedin from "../../images/linkedin.png";
// import IntroImg from "../../images/creative-design.gif";
// import IntroImg from "../../images/designers.gif";
import { CONTAINER_MAX_WIDTH } from "../../utils/constants";
export const SocialMedia = () => (
  <div
    sx={{
      display: "flex",
      gap: "1.6rem",
      justifyContent: ["center", "flex-start"],
      "& > a": {
        width: "3.6rem",
        height: "3.6rem",
        "& > img": {
          width: "100%",
          objectFit: "contain",
        },
      },
    }}
  >
    <a
      href="https://github.com/ShobanaBohs100"
      title="https://github.com/ShobanaBohs100"
      target="_blank"
    >
      <img src={github} />
    </a>
    <a
      href="mailto:letter2shobana@gmail.com"
      title="letter2shobana@gmail.com"
      target="_blank"
    >
      <img src={gmail} />
    </a>
    <a
      href="https://www.linkedin.com/in/shobanabohs/"
      title="https://www.linkedin.com/in/shobanabohs/"
      target="_blank"
    >
      <img src={linkedin} />
    </a>
  </div>
);
export default function Hero() {
  return (
    <div
      sx={{
        maxWidth: CONTAINER_MAX_WIDTH,
        margin: "auto",
        display: "flex",
        flexDirection: ["column", "row"],
      }}
    >
      <div
        sx={{
          width: ["100%", "50%"],
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: ["4rem 1rem 0rem", 0],
          textAlign: ["center", "left"],
        }}
      >
        <div
          sx={{
            fontFamily: "body",
            fontSize: "4rem",
            fontWeight: 600,
            lineHeight: 1,
            color: "text",
          }}
        >
          Hi 👋 , I'm Shobana
        </div>
        <h1
          sx={{
            fontFamily: "body",
            fontSize: ["4rem", "5rem"],
            lineHeight: 1.2,
            color: "text",
            "& > span": {
              color: "primary",
            },
          }}
        >
          I'm a <span>frontend developer</span>
          <br /> and build <span>web</span> apps
        </h1>
        <SocialMedia />
      </div>
      <img
        sx={{
          width: ["100%", "50%"],
        }}
        src={IntroImg}
      />
    </div>
  );
}
