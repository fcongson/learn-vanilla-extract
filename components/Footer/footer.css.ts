import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

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

export const logo = style({
  marginLeft: "0.5rem",
});
