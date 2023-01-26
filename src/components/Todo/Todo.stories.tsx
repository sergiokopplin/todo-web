import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Todo } from "./Todo";

export default {
  title: "Components/Todo",
  component: Todo,
} as ComponentMeta<typeof Todo>;

const Template: ComponentStory<typeof Todo> = (args) => <Todo {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: "First Todo",
};

export const Completed = Template.bind({});

Completed.args = {
  ...Default.args,
  completed: true,
};

export const Variant = Template.bind({});

Variant.args = {
  ...Default.args,
  theme: "variant",
};

export const VariantCompleted = Template.bind({});

VariantCompleted.args = {
  ...Variant.args,
  completed: true,
};
