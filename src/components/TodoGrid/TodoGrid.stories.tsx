import { Meta, StoryFn } from "@storybook/react";

import { TodoGrid } from "./TodoGrid";

export default {
  title: "Components/TodoGrid",
  component: TodoGrid,
  args: {},
} as Meta<typeof TodoGrid>;

export const initial: StoryFn<typeof TodoGrid> = (args) => (
  <div
    style={{
      width: "calc(100vw - 100px)",
      height: "calc(100vh - 100px)",
      padding: 50,
      border: "1px solid #eee",
    }}
  >
    <TodoGrid {...args} />
  </div>
);
