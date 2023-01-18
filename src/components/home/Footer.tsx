/** @jsxImportSource theme-ui */

import React from "react";
import { CONTAINER_MAX_WIDTH } from "../../utils/constants";

type Props = {};

export default function ({}: Props) {
  return (
    <div
      sx={{ width: "100%", padding: "4rem 2rem", background: "primaryDark" }}
    >
      <div
        sx={{
          maxWidth: CONTAINER_MAX_WIDTH,
          margin: "auto",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div></div>
        <p sx={{ fontSize: "1rem", fontFamily: "body", color: "#fff" }}>
          ©️ Shobana Thangaraj {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
