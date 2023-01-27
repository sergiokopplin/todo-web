import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Heading } from "./Heading";
import { HeadingColorMock } from "./Heading.mock";

export default {
  title: "Components/Heading",
  component: Heading,
  argTypes: {
    color: {
      options: HeadingColorMock,
      control: "select",
    },
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Default = Template.bind({});

Default.args = {
  children: "QUARTA-FEIRA",
  color: "default",
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
