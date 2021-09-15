import { style } from "@vanilla-extract/css";
import { atoms, vars } from "../../styles/theme.css";

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
