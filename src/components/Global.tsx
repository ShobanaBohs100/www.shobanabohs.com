import React from "react";
import { Global } from "@emotion/react";

export default () => (
  <Global
    styles={(theme) => ({
      "*": {
        boxSizing: "border-box",
      },
      body: {
        margin: 0,
        fontSize: 8,
      },
      html: {
        fontSize: "10px",
      },
    })}
  />
);
