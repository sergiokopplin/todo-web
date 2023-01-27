import { resetStyles, globalStyles, globalCss } from "../src/styles";

export const parameters = {};

export const allStyles = globalCss({
  ...resetStyles,
  ...globalStyles,
});

export const decorators = [
  (Story) => {
    allStyles();
    return <Story />;
  },
];
