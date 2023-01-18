/** @jsxImportSource theme-ui */

import React from "react";
import { CONTAINER_MAX_WIDTH } from "../../utils/constants";
import Button from "../ui-kit/Button";

type Props = {};

export default function ({}: Props) {
  return (
    <div sx={{ padding: "3rem 1rem 6rem" }}>
      <div
        sx={{
          maxWidth: CONTAINER_MAX_WIDTH,
          margin: "auto",
          textAlign: "center",
        }}
      >
        <h3
          sx={{
            fontSize: ["3rem", "4rem"],
            lineHeight: 1.2,
            fontFamily: "body",
            textAlign: "center",
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
      </div>
    </div>
  );
}
