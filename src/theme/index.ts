// example theme file
const theme = {
  colors: {
    text: "#232E35",
    background: "#FBFBFB",
    primary: "linear-gradient(140deg, #03c1a2 0%, #06bedd 50%, #417cd6 75%)",
    muted: "#656D72",
    menu: "#606f7b",
    primaryDark: "#0c3d87",
    modes: {
      dark: {
        text: "#232E35",
        background: "#FBFBFB",
        primary:
          "linear-gradient(140deg, #03c1a2 0%, #06bedd 50%, #417cd6 75%)",
        muted: "#656D72",
        menu: "#606f7b",
        primaryDark: "#0c3d87",
      },
    },
  },
  fonts: {
    body: "'Poppins', sans-serif",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  letterSpacings: {
    body: "normal",
    caps: "0.2em",
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: {
    wide: 2048,
    container: 1024,
    narrow: 512,
  },
};

export default theme;
