import { Meta, StoryFn } from "@storybook/react";

import { Todo } from "./Todo";

export default {
  title: "Components/Todo",
  component: Todo,
  args: {
    children: "Todo Text",
  },
} as Meta<typeof Todo>;

export const initial: StoryFn<typeof Todo> = (args) => <Todo {...args} />;

export const variant: StoryFn<typeof Todo> = (args) => (
  <Todo {...args} theme="variant" />
);

export const completed: StoryFn<typeof Todo> = (args) => (
  <Todo {...args} completed />
);
