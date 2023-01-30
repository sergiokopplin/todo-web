import { Meta, StoryFn } from "@storybook/react";

import { Todo } from "./Todo";

export default {
  title: "Components/Todo",
  component: Todo,
  args: {
    children: "Todo Text",
    handleDone: () => console.log("handleDone"),
    handleDelete: () => console.log("handleDelete"),
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

export const active: StoryFn<typeof Todo> = (args) => (
  <Wrapper>
    <Todo {...args} theme="active" />
  </Wrapper>
);

export const inactive: StoryFn<typeof Todo> = (args) => (
  <Wrapper>
    <Todo {...args} theme="inactive" />
  </Wrapper>
);

export const done: StoryFn<typeof Todo> = (args) => (
  <Wrapper>
    <Todo {...args} done />
  </Wrapper>
);

export const doneAndInactive: StoryFn<typeof Todo> = (args) => (
  <Wrapper>
    <Todo {...args} done theme="inactive" />
  </Wrapper>
);
