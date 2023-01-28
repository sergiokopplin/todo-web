import { Heading, Todo } from "@/components";

import {
  StyledWrapper,
  StyledHeader,
  StyledText,
  StyledItem,
} from "./TodoList.styles";

type Props = {
  title: string;
  date: string;
  todos: {
    id: string;
    text: string;
    completed: boolean;
  }[];
};

export const TodoList = ({ title, date, todos }: Props) => {
  return (
    <StyledWrapper>
      <StyledHeader>
        <Heading>{title}</Heading>
        <StyledText uppercase size="s">
          {date}
        </StyledText>
      </StyledHeader>

      <ul>
        {todos.map((todo) => (
          <StyledItem key={todo.id}>
            <Todo completed={todo.completed}>{todo.text}</Todo>
          </StyledItem>
        ))}
      </ul>
    </StyledWrapper>
  );
};
