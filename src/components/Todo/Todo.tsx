import { Text } from "@/components";
import { useState } from "react";

import { StyledWrapper } from "./Todo.styles";

type Props = {
  children: string;
  completed?: boolean;
  theme?: "initial" | "active" | "inactive";
};

export const Todo = ({
  children,
  completed = false,
  theme = "initial",
}: Props) => {
  const [hovered, setHovered] = useState(false);

  const getColor = () => {
    if (hovered) return "initial";

    if (completed) return "inactive";

    return theme;
  };

  return (
    <StyledWrapper
      data-cy="todo-wrapper"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      hovered={hovered}
      theme={theme}
    >
      <Text color={getColor()} lineThrough={completed}>
        {children}
      </Text>
    </StyledWrapper>
  );
};
