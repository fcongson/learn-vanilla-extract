import { createTheme, style } from "@vanilla-extract/css";

const theme = createTheme({
  color: {
    brand: "black",
  },
  font: {
    body: "monospace",
  },
});

export const themeClass = theme[0];
export const vars = theme[1];

export const main = style({
  padding: "5rem 0",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const title = style({
  backgroundColor: vars.color.brand,
  fontFamily: vars.font.body,
  color: "white",
  padding: 10,
});

export const container = style({
  minHeight: "100vh",
  padding: "0 0.5rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
});

export const footer = style({
  fontFamily: vars.font.body,
  width: "100%",
  height: "100px",
  borderTop: "1px solid #eaeaea",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const link = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
});

export const logo = style({
  marginLeft: "0.5rem",
});
