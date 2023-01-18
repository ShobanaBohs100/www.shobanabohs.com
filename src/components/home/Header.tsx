/** @jsxImportSource theme-ui */

import React, { useState } from "react";
import { useThemeUI } from "theme-ui";
import { CONTAINER_MAX_WIDTH, MOBILE_MAX_WIDTH } from "../../utils/constants";
import { useWindowSize } from "../../utils/useWindowSize";
import CloseIcon from "../icons/Close";
import MenuSvg from "../icons/Menu";
import Button from "../ui-kit/Button";
import Logo from "../../images/logo.png";
export default function Header() {
  const {
    theme: { rawColors },
    setColorMode,
  } = useThemeUI();

  return (
    <div
      sx={{
        minHeight: 72,
        boxShadow: " 0 5px 20px -5px rgb(0 0 0 / 7%)",
        position: "sticky",
        top: 0,
        background: "#fff",
        padding: ["2rem", "2rem"],
        zIndex: 1000,
      }}
    >
      <header
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: CONTAINER_MAX_WIDTH,
          margin: "auto",
        }}
      >
        <img
          src={Logo}
          sx={{
            width: [150, 170, 200],
            height: "auto",
          }}
        />
        <MainMenu />
      </header>
    </div>
  );
}

const MainMenu = () => {
  const { width } = useWindowSize();
  const isMobile = width < MOBILE_MAX_WIDTH;
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);

  const menuLinks = (
    <>
      <li>
        <a href="#services">Services</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      {/* <li>
        <a href="#articles">Articles</a>
      </li> */}
      <li>
        <a href="#testimonials">Testimonials</a>
      </li>
      <li>
        <a href="#education">Education</a>
      </li>
    </>
  );

  if (isMobile) {
    return (
      <div sx={{ cursor: "pointer" }} onClick={toggleOpen}>
        {open ? <CloseIcon /> : <MenuSvg />}
        <ul
          sx={{
            padding: "2rem 4rem",
            position: "fixed",
            top: "7.2rem",
            right: 0,
            transform: open ? "none" : "translate(100%, 0)",
            width: "100%",
            height: "calc(100vh - 7rem)",
            background: "#fff",
            margin: 0,
            transition: "0.4s transform ease-in-out",
            "& > li": {
              fontSize: "1.6rem",
              fontFamily: "body",
              display: "block",
              "& > a": {
                textDecoration: "none",
                padding: "2rem 1rem",
                fontFamily: "body",
                color: "menu",
                display: "block",
                "&:hover": {
                  color: "primary",
                },
              },
            },
          }}
        >
          {menuLinks}
        </ul>
      </div>
    );
  }

  return (
    <div sx={{ display: "flex", gap: "1rem" }} key={width}>
      <ul
        sx={{
          padding: 0,
          "& > li": {
            display: "inline-block",
            color: "secondary",
            fontSize: ["1rem", "1.4rem"],
            "& > a": {
              textDecoration: "none",
              padding: "2rem 1rem",
              fontFamily: "body",
              color: "menu",
              "&:hover": {
                color: "primary",
              },
            },
          },
        }}
      >
        {menuLinks}
      </ul>
      <Button>Resume</Button>
    </div>
  );
};
