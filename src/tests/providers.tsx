import { IntlProvider } from "react-intl";

export const IntlWrapper = (props: { children: JSX.Element }) => (
  <IntlProvider locale="pt-BR">{props.children}</IntlProvider>
);
