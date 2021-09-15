import { globalStyle, style } from "@vanilla-extract/css";

export const mdxStyle = style({
  textAlign: "left",
  width: "100%",
  maxWidth: "800px",
  fontFamily: "monospace",
  fontSize: "1rem",
  lineHeight: 1.7,
});

globalStyle("pre", {
  background: "#f0f0f0",
  borderRadius: "5px",
  padding: "0.75rem",
  fontSize: "1.1rem",
  lineHeight: 1.7,
  fontFamily: "monospace",
  overflowX: "scroll",
});

globalStyle("code", {
  background: "#f0f0f0",
  borderRadius: "5px",
  padding: "0.5rem",
  fontSize: "1.1rem",
  lineHeight: 1.7,
  fontFamily: "monospace",
});
