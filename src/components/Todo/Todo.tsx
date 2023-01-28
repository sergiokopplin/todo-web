import { Text } from "@/components";

type Props = {
  children: string;
  completed?: boolean;
  theme?: "default" | "variant";
};

export const Todo = ({
  children,
  completed = false,
  theme = "default",
}: Props) => {
  const getColor = () => {
    if (theme === "default") {
      return completed ? "inactive" : "default";
    }

    return completed ? "inactive" : "active";
  };

  return (
    <Text color={getColor()} lineThrough={completed}>
      {children}
    </Text>
  );
};
