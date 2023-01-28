import { Meta, StoryFn } from "@storybook/react";

import { Heading } from "./Heading";

export default {
  title: "Components/Heading",
  component: Heading,
  args: {
    children: "quarta-feira",
  },
} as Meta<typeof Heading>;

export const initial: StoryFn<typeof Heading> = (args) => <Heading {...args} />;

export const active: StoryFn<typeof Heading> = (args) => (
  <Heading color="active" {...args} />
);

export const inactive: StoryFn<typeof Heading> = (args) => (
  <Heading color="inactive" {...args} />
);
