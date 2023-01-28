import { Meta, StoryFn } from "@storybook/react";

import { Heading } from "./Heading";

export default {
  title: "Components/Heading",
  component: Heading,
  args: {
    children: "quarta-feira",
  },
} as Meta<typeof Heading>;

export const Default: StoryFn<typeof Heading> = (args) => <Heading {...args} />;
