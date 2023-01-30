import { Text, Input } from "@/components";
import { useState } from "react";

import {
  StyledWrapper,
  StyledIconWrapper,
  StyledPencilIcon,
  StyledCrossIcon,
  StyledInputWrapper,
} from "./Todo.styles";

type Props = {
  children: string;
  completed?: boolean;
  theme?: "initial" | "active" | "inactive";
  handleDone: () => any;
  handleDelete: () => any;
};

export const Todo = ({
  children,
  completed = false,
  theme = "initial",
  handleDone,
  handleDelete,
}: Props) => {
  const [hovered, setHovered] = useState(false);
  const [edit, setEdit] = useState(false);

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
      edit={edit}
    >
      {!edit && (
        <div onClick={handleDone}>
          <Text color={getColor()} lineThrough={completed}>
            {children}
          </Text>
        </div>
      )}

      {edit && (
        <StyledInputWrapper>
          <Input
            name="todo"
            handleBlur={() => setEdit(false)}
            handleChange={(value: string) => {
              console.log("handleChange", value);
              setEdit(false);
            }}
            defaultValue={children}
          />
        </StyledInputWrapper>
      )}

      {!edit && hovered && (
        <StyledIconWrapper data-cy="todo-icon-wrapper">
          {completed ? (
            <StyledCrossIcon onClick={() => handleDelete()} />
          ) : (
            <StyledPencilIcon onClick={() => setEdit(true)} />
          )}
        </StyledIconWrapper>
      )}
    </StyledWrapper>
  );
};
