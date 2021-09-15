import { style } from "@vanilla-extract/css";
import { atoms, vars } from "./theme.css";

export const container = style([
  {
    fontFamily: vars.font.body,
    fontSize: "1rem",
    minHeight: "100vh",
    padding: "0 0.5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    // backgroundColor: vars.color.background,
    // color: vars.color.primary,
  },
  atoms({
    background: { lightMode: "background", darkMode: "primary" },
    color: { lightMode: "primary", darkMode: "secondary" },
  }),
]);

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
  borderTop: `1px solid ${vars.color.border}`,
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

export const title = style([
  {
    // backgroundColor: vars.color.primary,
    // color: vars.color.secondary,
    fontFamily: vars.font.body,
    fontSize: "4rem",
    margin: 0,
    lineHeight: 1.15,
  },
  atoms({
    background: { lightMode: "brand", darkMode: "secondary" },
    color: { lightMode: "secondary", darkMode: "primary" },
  }),
]);

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
