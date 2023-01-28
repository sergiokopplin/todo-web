import { Text } from "@/components";
import { useState } from "react";

import { StyledWrapper } from "./Todo.styles";

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
  const [hovered, setHovered] = useState(false);

  const getColor = () => {
    if (hovered) return "default";

    if (theme === "default") {
      return completed ? "inactive" : "default";
    }

    return completed ? "inactive" : "active";
  };

  return (
    <StyledWrapper
      data-cy="todo-wrapper"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      hovered={hovered}
    >
      <Text color={getColor()} lineThrough={completed}>
        {children}
      </Text>
    </StyledWrapper>
  );
};
