import { ComponentMeta, ComponentStory } from "@storybook/react";

import { TodoList } from "./TodoList";

export default {
  title: "Components/TodoList",
  component: TodoList,
} as ComponentMeta<typeof TodoList>;

const Template: ComponentStory<typeof TodoList> = (args) => (
  <TodoList {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  title: "QUARTA-FEIRA",
  date: "24 de Janeiro de 2023",
  todos: [
    { id: "1234", text: "First Todo" },
    { id: "4321", text: "Second Todo" },
  ],
};
