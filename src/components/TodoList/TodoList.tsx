import { Heading, Todo } from "@/components";

import {
  StyledWrapper,
  StyledHeader,
  StyledText,
  StyledItem,
} from "./TodoList.styles";

type Theme = "initial" | "active" | "inactive";

type Props = {
  theme?: Theme;
  title: string;
  date: string;
  todos: {
    id: string;
    text: string;
    completed: boolean;
    position: number;
  }[];
};

export const TodoList = ({ title, date, todos, theme = "initial" }: Props) => {
  const sorted = todos.sort(
    (a, b) =>
      Number(a.completed) - Number(b.completed) || a.position - b.position
  );

  const handleDelete = () => console.log("handleDelete");
  const handleDone = () => console.log("handleDone");

  return (
    <StyledWrapper>
      <StyledHeader>
        <Heading color={theme}>{title}</Heading>
        <StyledText uppercase size="s" color={theme}>
          {date}
        </StyledText>
      </StyledHeader>

      <ul>
        {sorted.map((todo) => (
          <StyledItem key={todo.id}>
            <Todo
              completed={todo.completed}
              theme={theme}
              handleDelete={handleDelete}
              handleDone={handleDone}
            >
              {todo.text}
            </Todo>
          </StyledItem>
        ))}
      </ul>
    </StyledWrapper>
  );
};
