import { Text } from "@/components";

type Props = {
  text: string;
  completed: boolean;
  theme?: "default" | "variant";
};

export const Todo = ({ text, completed, theme = "default" }: Props) => {
  const getColor = () => {
    if (theme === "default") {
      return completed ? "inactive" : "default";
    }

    return completed ? "inactive" : "active";
  };

  return (
    <Text color={getColor()} lineThrough={completed}>
      {text}
    </Text>
  );
};
