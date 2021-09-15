import { createTheme } from "@vanilla-extract/css";

const theme = createTheme({
  color: {
    brand: "black",
    primary: "white",
    secondary: "#101010",
    background: "#101010",
    border: "gray",
  },
  font: {
    body: "monospace",
  },
});

export const themeClass = theme[0];
export const vars = theme[1];
