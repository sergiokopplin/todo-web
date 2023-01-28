import { Meta, StoryFn } from "@storybook/react";

import { TodoList } from "./TodoList";

export default {
  title: "Components/TodoList",
  component: TodoList,
  args: {
    title: "QUARTA-FEIRA",
    date: "24 de Janeiro de 2023",
    todos: [
      { id: "1234", text: "First Todo", completed: false },
      { id: "4321", text: "Second Todo", completed: false },
      { id: "2134", text: "Third Todo", completed: true },
    ],
  },
} as Meta<typeof TodoList>;

export const initial: StoryFn<typeof TodoList> = (args) => (
  <div style={{ width: 250, border: "1px solid rgba(0, 0, 0, 0.08)" }}>
    <TodoList {...args} />
  </div>
);
