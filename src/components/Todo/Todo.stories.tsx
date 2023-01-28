import { Meta, StoryFn } from "@storybook/react";

import { Todo } from "./Todo";

export default {
  title: "Components/Todo",
  component: Todo,
  args: {
    children: "Todo Text",
  },
} as Meta<typeof Todo>;

export const Default: StoryFn<typeof Todo> = (args) => <Todo {...args} />;
