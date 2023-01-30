import { Heading, Todo } from "@/components";
import { FormattedDate } from "react-intl";

import {
  StyledWrapper,
  StyledHeader,
  StyledText,
  StyledItem,
  StyledList,
} from "./TodoList.styles";

type Theme = "initial" | "active" | "inactive";

type Props = {
  theme?: Theme;
  title: Date;
  date: Date;
  todos: {
    id: string;
    text: string;
    done: boolean;
    position: number;
  }[];
};

export const TodoList = ({ title, date, todos, theme = "initial" }: Props) => {
  const sorted = todos.sort(
    (a, b) => Number(a.done) - Number(b.done) || a.position - b.position
  );

  const handleDelete = () => console.log("handleDelete");
  const handleDone = () => console.log("handleDone");

  return (
    <StyledWrapper>
      <StyledHeader>
        <Heading color={theme}>
          <FormattedDate value={title} weekday="long" />
        </Heading>
        <StyledText uppercase size="s" color={theme}>
          <FormattedDate
            value={date}
            year="numeric"
            month="long"
            day="2-digit"
          />
        </StyledText>
      </StyledHeader>

      <StyledList>
        {sorted.map((todo) => (
          <StyledItem key={todo.id}>
            <Todo
              done={todo.done}
              theme={theme}
              handleDelete={handleDelete}
              handleDone={handleDone}
            >
              {todo.text}
            </Todo>
          </StyledItem>
        ))}
      </StyledList>
    </StyledWrapper>
  );
};
