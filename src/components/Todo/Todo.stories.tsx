import { Meta, StoryFn } from "@storybook/react";

import { Todo } from "./Todo";

export default {
  title: "Components/Todo",
  component: Todo,
  args: {
    children: "Todo Text",
  },
} as Meta<typeof Todo>;

const Wrapper = (props: { children: JSX.Element }) => (
  <div style={{ width: 250 }}>{props.children}</div>
);

export const initial: StoryFn<typeof Todo> = (args) => (
  <Wrapper>
    <Todo {...args} />
  </Wrapper>
);

export const variant: StoryFn<typeof Todo> = (args) => (
  <Wrapper>
    <Todo {...args} theme="variant" />
  </Wrapper>
);

export const completed: StoryFn<typeof Todo> = (args) => (
  <Wrapper>
    <Todo {...args} completed />
  </Wrapper>
);
