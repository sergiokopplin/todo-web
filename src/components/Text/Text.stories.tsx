import { Meta, StoryFn } from "@storybook/react";

import { Text } from "./Text";

export default {
  title: "Components/Text",
  component: Text,
  args: {
    children: "quarta-feira",
  },
} as Meta<typeof Text>;

export const initial: StoryFn<typeof Text> = (args) => <Text {...args} />;

export const active: StoryFn<typeof Text> = (args) => (
  <Text {...args} color="active" />
);

export const inactive: StoryFn<typeof Text> = (args) => (
  <Text {...args} color="inactive" />
);

export const lineThrough: StoryFn<typeof Text> = (args) => (
  <Text {...args} lineThrough />
);

export const uppercase: StoryFn<typeof Text> = (args) => (
  <Text {...args} uppercase />
);

export const sizeM: StoryFn<typeof Text> = (args) => (
  <Text {...args} size="m" />
);

export const sizeS: StoryFn<typeof Text> = (args) => (
  <Text {...args} size="s" />
);
