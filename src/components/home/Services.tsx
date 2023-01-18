/** @jsxImportSource theme-ui */

import React from "react";
import { CONTAINER_MAX_WIDTH } from "../../utils/constants";

type Props = {};

export default function Services({}: Props) {
  return (
    <div
      sx={{
        background: "primary",
        width: "100%",
        padding: ["2rem 1rem", "4rem 0 8rem"],
      }}
    >
      <div
        sx={{
          maxWidth: CONTAINER_MAX_WIDTH,
          margin: "auto",
        }}
      >
        <h2
          sx={{
            fontSize: ["3rem", "4rem"],
            fontFamily: "body",
            color: "background",
            textAlign: "center",
          }}
        >
          Services
        </h2>
        <div
          sx={{
            display: "flex",
            flexDirection: ["column", "row"],
            gap: "2rem",
            "& > div": {
              backgroundColor: "background",
              padding: "2rem 2rem 4rem",
              borderRadius: "2rem",
              "& > h3": {
                fontFamily: "body",
                fontSize: "2.4rem",
                color: "text",
                textAlign: "center",
              },
              "& > p": {
                fontSize: "1.6rem",
                fontFamily: "body",
                color: "muted",
                margin: 0,
                textAlign: "center",
              },
            },
          }}
        >
          <div>
            <h3>Web Development</h3>
            <p>
              Create and maintain your websites and also take care of its
              performance and traffic capacity.
            </p>
          </div>
          <div>
            <h3>Mobile Development</h3>
            <p>
              Turn what you have in mind of a digital product into reality. For
              any platform you consider.
            </p>
          </div>
          <div>
            <h3>Application Development</h3>
            <p>
              Standard designing, building, and implementing your applications
              with documentation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
