import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Text } from "./Text";

export default {
  title: "Components/Text",
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "Text Component",
};

export const Active = Template.bind({});

Active.args = {
  ...Default.args,
  color: "active",
};

export const Inactive = Template.bind({});

Inactive.args = {
  ...Default.args,
  color: "inactive",
};

export const Uppercase = Template.bind({});

Uppercase.args = {
  ...Default.args,
  uppercase: true,
};

export const LineThrough = Template.bind({});

LineThrough.args = {
  ...Default.args,
  lineThrough: true,
};
