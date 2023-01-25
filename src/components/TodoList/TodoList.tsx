import { Heading, Text } from "@/components";

type Props = {
  title: string;
  date: string;
  todos: {
    id: string;
    text: string;
  }[];
};

export const TodoList = ({ title, date, todos }: Props) => {
  return (
    <div style={{ textAlign: "center" }}>
      <Heading>{title}</Heading>
      <Text uppercase>{date}</Text>

      <div>
        <ul style={{ listStyle: "none" }}>
          {todos.map((todo) => (
            <li key={todo.id}>
              <Text>{todo.text}</Text>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
