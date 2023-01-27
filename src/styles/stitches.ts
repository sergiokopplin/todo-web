import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      colorTextBase: "#000",
      colorTextPrimary: "#F41D12",
      colorTextSecondary: "#C9C9C9",
    },
    space: {},
    fontSizes: {
      fontSizeS: "12px",
      fontSizeM: "14px",
      fontSizeL: "32px",
    },
    fonts: {
      fontsBase: "Inter, Helvetica Neue, Helvetica, sans-serif",
      fontsHeading: "Pathway Gothic One, sans-serif",
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
});
