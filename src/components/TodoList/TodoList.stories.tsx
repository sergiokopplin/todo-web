import { Meta, StoryFn } from "@storybook/react";

import { TodoList } from "./TodoList";

export default {
  title: "Components/TodoList",
  component: TodoList,
  args: {
    title: new Date(2023, 0, 25),
    date: new Date(2023, 0, 23),
    todos: [
      { id: "45234", text: "Todo Todo", done: true, position: 5 },
      { id: "64536", text: "Another One", done: false, position: 1 },
      { id: "48239", text: "Third Todo", done: true, position: 3 },
      { id: "12098", text: "Second Todo", done: false, position: 6 },
      { id: "12378", text: "First Todo", done: false, position: 2 },
      { id: "02349", text: "Todo Todo Todo", done: true, position: 4 },
    ],
  },
} as Meta<typeof TodoList>;

const Wrapper = (props: { children: JSX.Element }) => (
  <div style={{ width: 250, border: "1px solid rgba(0, 0, 0, 0.08)" }}>
    {props.children}
  </div>
);

export const initial: StoryFn<typeof TodoList> = (args) => (
  <Wrapper>
    <TodoList {...args} />
  </Wrapper>
);

export const active: StoryFn<typeof TodoList> = (args) => (
  <Wrapper>
    <TodoList {...args} theme="active" />
  </Wrapper>
);

export const inactive: StoryFn<typeof TodoList> = (args) => (
  <Wrapper>
    <TodoList {...args} theme="inactive" />
  </Wrapper>
);
