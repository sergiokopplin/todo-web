import { IntlProvider } from "react-intl";

import { resetStyles, globalStyles, globalCss } from "../src/styles";

export const parameters = {
  layout: "centered",
  backgrounds: {
    default: "white",
    values: [
      {
        name: "white",
        value: "#fff",
      },
    ],
  },
};

export const allStyles = globalCss({
  ...resetStyles,
  ...globalStyles,
});

export const decorators = [
  (Story) => {
    allStyles();
    return (
      <IntlProvider locale="pt-BR">
        <Story />
      </IntlProvider>
    );
  },
];
