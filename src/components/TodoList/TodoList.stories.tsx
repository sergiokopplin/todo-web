import { ComponentMeta, ComponentStory } from "@storybook/react";

import { TodoList } from "./TodoList";

export default {
  title: "Components/TodoList",
  component: TodoList,
} as ComponentMeta<typeof TodoList>;

const Template: ComponentStory<typeof TodoList> = (args) => (
  <TodoList {...args} />
);

export const Default = Template.bind({});

Default.args = {
  title: "QUARTA-FEIRA",
  date: "24 de Janeiro de 2023",
  todos: [
    { id: "1234", text: "First Todo", completed: false },
    { id: "4321", text: "Second Todo", completed: true },
  ],
};
