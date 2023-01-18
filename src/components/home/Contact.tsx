/** @jsxImportSource theme-ui */

import React from "react";
import { CONTAINER_MAX_WIDTH } from "../../utils/constants";
import Button from "../ui-kit/Button";
import { SocialMedia } from "./Hero";

type Props = {};

export default function ({}: Props) {
  return (
    <div sx={{ padding: "3rem 1rem 6rem" }}>
      <div
        sx={{
          maxWidth: CONTAINER_MAX_WIDTH,
          margin: "auto",
          textAlign: "center",
          display: " flex",
          flexDirection: "column",
          alignItems: "center",
          gap: ["2rem", "3rem"],
        }}
      >
        <h3
          sx={{
            fontSize: ["3rem", "4rem"],
            lineHeight: 1.2,
            fontFamily: "body",
            textAlign: "center",
            marginBottom: 0,
          }}
        >
          Lets build your product together!
        </h3>
        <a href="mailto:letter2shobana@gmail.com">
          <Button
            sx={{
              fontSize: ["2rem", "3rem"],
              height: ["4rem", "6rem"],
              textTransform: "initial",
            }}
          >
            Get in touch
          </Button>
        </a>
        <SocialMedia />
      </div>
    </div>
  );
}
