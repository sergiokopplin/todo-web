import { Heading, Text, Todo } from "@/components";

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
    <div>
      <Heading>{title}</Heading>
      <Text uppercase size="s">
        {date}
      </Text>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Todo text={todo.text} completed={todo.completed} />
          </li>
        ))}
      </ul>
    </div>
  );
};
