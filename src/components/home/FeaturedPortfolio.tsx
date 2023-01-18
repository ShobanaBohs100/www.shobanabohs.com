/** @jsxImportSource theme-ui */

import React from "react";
import { CONTAINER_MAX_WIDTH } from "../../utils/constants";
import ProjectImage from "../../images/1.png";
type Props = {};

export default function FeaturedPortfolio({}: Props) {
  const dummyContent =
    "          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, corporis velit. Vitae est fuga, magni ipsum illum, beatae aperiam commodi quis dolores nesciunt velit voluptatem sit officiis sint veniam culpa!  ";
  return (
    <div sx={{ padding: ["3rem 2rem 4rem", "3rem 0 4rem"] }}>
      <div sx={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "auto" }}>
        <h2
          sx={{
            fontSize: "4rem",
            lineHeight: 1.2,
            fontFamily: "body",
            padding: [0, "2rem"],
          }}
        >
          Featured Projects
        </h2>
        <div
          sx={{
            display: "flex",
            gap: ["4rem", "8rem"],
            flexDirection: "column",
            "& > div:nth-child(odd)": {
              flexDirection: [null, "row-reverse"],
            },
          }}
        >
          <ProjectItem
            title="NEOU"
            description={dummyContent}
            skills={["React", "Typescript", "React Native"]}
          />
          <ProjectItem
            title="NEOU"
            description={dummyContent}
            skills={["React", "Typescript", "React Native"]}
          />
          <ProjectItem
            title="NEOU"
            description={dummyContent}
            skills={["React", "Typescript", "React Native"]}
          />
        </div>
      </div>
    </div>
  );
}

const ProjectItem = ({
  title,
  description,
  skills,
}: {
  title: string;
  description: string;
  skills: string[];
}) => {
  return (
    <div
      sx={{
        display: "flex",
        gap: ["2rem", "4rem"],
        flexDirection: ["column", "row"],
      }}
    >
      <div sx={{ width: ["100%", "60%"] }}>
        <h3 sx={{ fontSize: "2rem", fontFamily: "body" }}>{title}</h3>
        <p sx={{ fontSize: "1.6rem", fontFamily: "body", color: "muted" }}>
          {description}
        </p>
        <div sx={{ fontSize: "1.4rem", fontFamily: "body" }}>
          <span sx={{ fontWeight: "600" }}>Tech: </span> {skills.join(", ")}
        </div>
      </div>
      <div
        sx={{
          width: ["100%", "40%"],
        }}
      >
        <div sx={{ position: "relative" }}>
          <div
            sx={{
              "&::before": {
                content: [null, "' '"],
                position: "absolute",
                top: "-2rem",
                left: "2rem",
                width: "calc(100% - 2rem)",
                height: "calc(100% - 2rem)",
                border: "1rem solid",
                borderColor: "primaryDark",
                zIndex: -1,
              },
            }}
          ></div>
          <img
            src={ProjectImage}
            sx={{ width: "100%", maxHeight: "60rem", borderRadius: "1rem" }}
          />
        </div>
      </div>
    </div>
  );
};
