import { style } from "@vanilla-extract/css";
import { atoms, vars } from "./theme.css";

export const title = style([
  {
    fontFamily: vars.font.body,
    fontSize: "4rem",
    margin: 0,
    lineHeight: 1.15,
    textAlign: "center",
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
  maxWidth: "800px",
  margin: "4rem 0",
  lineHeight: "1.7rem",
});

export const grid = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  maxWidth: "800px",
  marginTop: "3rem",
});

export const card = style({
  margin: "1rem",
  padding: "1.5rem",
  border: `1px solid ${vars.color.border}`,
  borderRadius: "10px",
  transition: "color 0.15s ease, border 0.15s ease, background 0.15s ease",
  width: "45%",
  height: "100%",
  ":hover": {
    border: `1px solid ${vars.color.active}`,
    background: "rgba(128, 0, 128, 0.2)",
  },
  "@media": {
    "screen and (max-width: 600px)": {
      width: "100%",
      height: "unset",
      flexDirection: "column",
    },
  },
});
