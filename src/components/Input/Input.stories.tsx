import { Meta, StoryFn } from "@storybook/react";

import { Input } from "./Input";

export default {
  title: "Components/Input",
  component: Input,
} as Meta<typeof Input>;

const Wrapper = (props: { children: JSX.Element }) => (
  <div style={{ width: 250, padding: 20, border: "1px solid silver" }}>
    {props.children}
  </div>
);

export const initial: StoryFn<typeof Input> = (args) => (
  <Wrapper>
    <Input
      {...args}
      handleBlur={() => console.log("handleBlur")}
      handleChange={(value: string) => console.log("handleChange", value)}
    />
  </Wrapper>
);
