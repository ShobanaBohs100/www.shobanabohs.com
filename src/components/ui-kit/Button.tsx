/** @jsxImportSource theme-ui */
import React from "react";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {}

export default function Button({ children }: ButtonProps) {
  return (
    <button
      sx={{
        background: "primary",
        color: "#fff",
        borderRadius: 5,
        fontSize: "1.4rem",
        border: "none",
        boxShadow: "none",
        padding: "0 3.2rem",
        fontFamily: "body",
        cursor: "pointer",
        fontWeight: "600",
        textTransform: "uppercase",
        "&:hover": {
          bg: "primaryDark",
        },
      }}
    >
      {children}
    </button>
  );
}
