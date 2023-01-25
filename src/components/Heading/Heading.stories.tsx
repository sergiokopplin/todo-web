import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Heading } from "./Heading";

export default {
  title: "Components/Heading",
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Default = Template.bind({});

Default.args = {
  children: "QUARTA-FEIRA",
};

export const Active = Template.bind({});

Active.args = {
  children: "QUARTA-FEIRA",
  color: "active",
};

export const Inactive = Template.bind({});

Inactive.args = {
  children: "QUARTA-FEIRA",
  color: "inactive",
};
