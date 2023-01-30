import { TodoList } from "@/components";
import { StyledListWrapper } from "./TodoGrid.styles";

type Props = {};

const todoListProps = [
  { id: "45234", text: "Todo Todo", done: true, position: 5 },
  { id: "64536", text: "Another One", done: false, position: 1 },
  { id: "48239", text: "Third Todo", done: true, position: 3 },
  { id: "12098", text: "Second Todo", done: false, position: 6 },
  { id: "12378", text: "First Todo", done: false, position: 2 },
  { id: "02349", text: "Todo Todo Todo", done: true, position: 4 },
];

export const TodoGrid = ({}: Props) => {
  return (
    <StyledListWrapper>
      <li>
        <TodoList
          date={new Date(2023, 0, 23)}
          title={new Date(2023, 0, 23)}
          todos={todoListProps}
          theme="inactive"
        />
      </li>

      <li>
        <TodoList
          date={new Date(2023, 0, 24)}
          title={new Date(2023, 0, 24)}
          todos={todoListProps}
          theme="active"
        />
      </li>

      <li>
        <TodoList
          date={new Date(2023, 0, 25)}
          title={new Date(2023, 0, 25)}
          todos={todoListProps}
          theme="initial"
        />
      </li>

      <li>
        <TodoList
          date={new Date(2023, 0, 26)}
          title={new Date(2023, 0, 26)}
          todos={todoListProps}
          theme="initial"
        />
      </li>

      <li>
        <TodoList
          date={new Date(2023, 0, 27)}
          title={new Date(2023, 0, 27)}
          todos={[]}
          theme="initial"
        />
      </li>
    </StyledListWrapper>
  );
};
