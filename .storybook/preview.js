import { ConfigProvider } from "antd";

import "../src/styles/reset.css";

export const parameters = {};

export const decorators = [
  (Story) => (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#F41D12",
          fontFamily:
            "Inter,Helvetica Neue,Helvetica,-apple-system,system-ui,sans-serif",
        },
      }}
    >
      <Story />
    </ConfigProvider>
  ),
];
