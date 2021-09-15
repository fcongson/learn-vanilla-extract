import { style } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const container = style({
  fontFamily: vars.font.body,
  fontSize: "1rem",
  minHeight: "100vh",
  padding: "0 0.5rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
});

export const main = style({
  padding: "5rem 0",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const footer = style({
  fontFamily: vars.font.body,
  width: "100%",
  height: "100px",
  borderTop: `1px solid ${vars.color.secondary}`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const footer_link = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
});

export const title = style({
  backgroundColor: vars.color.brand,
  fontFamily: vars.font.body,
  fontSize: "4rem",
  color: "white",
  margin: 0,
  lineHeight: 1.15,
});

export const title_link = style({
  ":hover": {
    textDecoration: "underline",
  },
});

export const content = style({
  width: "800px",
  margin: "4rem 0",
  lineHeight: "1.7rem",
});

export const logo = style({
  marginLeft: "0.5rem",
});
