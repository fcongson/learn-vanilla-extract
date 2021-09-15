import { globalStyle, style } from "@vanilla-extract/css";

export const mdxContent = style({
  textAlign: "left",
  width: "100vw",
  maxWidth: "800px",
  fontFamily: "monospace",
  fontSize: "1rem",
  lineHeight: 1.7,
  padding: "0.75rem",
});

globalStyle("pre", {
  background: "rgba(128, 0, 128, 0.2)",
  borderRadius: "5px",
  padding: "0.75rem",
  fontSize: "1.1rem",
  lineHeight: 1.7,
  fontFamily: "monospace",
  overflow: "auto",
});

globalStyle("p > code", {
  background: "rgba(128, 0, 128, 0.2)",
  borderRadius: "5px",
  padding: "0.5rem",
  fontSize: "1.1rem",
  lineHeight: 1.7,
  fontFamily: "monospace",
});
