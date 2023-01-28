import { Meta, StoryFn } from "@storybook/react";

import { Text } from "./Text";

export default {
  title: "Components/Text",
  component: Text,
  args: {
    children: "quarta-feira",
  },
} as Meta<typeof Text>;

export const Default: StoryFn<typeof Text> = (args) => <Text {...args} />;
