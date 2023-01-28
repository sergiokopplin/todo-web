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
  }[];
};

export const TodoList = ({ title, date, todos, theme = "initial" }: Props) => {
  return (
    <StyledWrapper>
      <StyledHeader>
        <Heading color={theme}>{title}</Heading>
        <StyledText uppercase size="s" color={theme}>
          {date}
        </StyledText>
      </StyledHeader>

      <ul>
        {todos.map((todo) => (
          <StyledItem key={todo.id}>
            <Todo completed={todo.completed} theme={theme}>
              {todo.text}
            </Todo>
          </StyledItem>
        ))}
      </ul>
    </StyledWrapper>
  );
};
