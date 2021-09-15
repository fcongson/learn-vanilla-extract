## Create theme & vars

Creating a theme allows for definitions of reusable colors and fonts (among other styles) that can be used through the creation of `vanilla-extract` styles.

```
// theme.css.ts

import { createTheme } from "@vanilla-extract/css";

const theme = createTheme({
  color: {
    brand: "black",
    primary: "#101010",
    secondary: "white",
    background: "white",
    border: "lightgray",
    active: "purple",
  },
  font: {
    body: "monospace",
  },
});

export const themeClass = theme[0];
export const vars = theme[1];
```

The `themeClass` can be applied to an element to insert the css variables into the page.

```
.theme_theme__1f5m7s30 {
  --color-brand__1f5m7s31: black;
  --color-primary__1f5m7s32: #101010;
  --color-secondary__1f5m7s33: white;
  --color-background__1f5m7s34: white;
  --color-border__1f5m7s35: lightgray;
  --color-active__1f5m7s36: purple;
  --font-body__1f5m7s37: monospace;
}
```

## Create styles using vars and applying to pages

The exported `vars` can be used within other `.css.ts` files.

```
// home.css.ts

import { vars } from "./theme.css";

export const title = style({
  fontFamily: vars.font.body,
  fontSize: "4rem",
  margin: 0,
  lineHeight: 1.15,
  textAlign: "center",
})
```

The corresponding css variables are used within the page.

```
.home_title__5i0jfz1 {
  font-family: var(--font-body__1f5m7s37);
  font-size: 4rem;
  margin: 0;
  line-height: 1.15;
  text-align: center;
}
```

## Create global styles

Global styles define globally scoped styles.

```
// globals.css.ts

import { globalStyle } from "@vanilla-extract/css";

globalStyle("html, body", {
  padding: 0,
  margin: 0,
  fontFamily:
    "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
});
```

These global styles can be applied to a desired scope.

```
// _app.tsx

import '../styles/globals.css'
```

## Organize styles per page/component

Each page has its own `.css.ts` file.

```
pages
├── _app.tsx
├── index.tsx
├── sprinkles.tsx
└── vanilla-extract.tsx
styles
├── globals.css.ts
├── home.css.ts
├── page.css.ts
└── theme.css.ts
```

Each comopnent lives in its own directory with its `.css.ts` file.

```
components
├── Footer
│   ├── Footer.tsx
│   ├── footer.css.ts
│   └── index.ts
└── Layout
    ├── Layout.tsx
    ├── index.ts
    └── layout.css.ts
```
