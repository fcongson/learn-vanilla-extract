import { createTheme } from "@vanilla-extract/css";

const theme = createTheme({
  color: {
    brand: "black",
    primary: "black",
    secondary: "lightgray",
  },
  font: {
    body: "monospace",
  },
});

export const themeClass = theme[0];
export const vars = theme[1];

