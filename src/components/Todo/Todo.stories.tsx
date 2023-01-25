import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Todo } from "./Todo";

export default {
  title: "Components/Todo",
  component: Todo,
} as ComponentMeta<typeof Todo>;

const Template: ComponentStory<typeof Todo> = (args) => <Todo />;

export const Primary = Template.bind({});
