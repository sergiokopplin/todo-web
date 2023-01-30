import { KeyboardEvent, useState } from "react";
import { StyledInput } from "./Input.styles";

type Props = {
  name: string;
  handleChange: (value: string) => any;
  handleBlur: () => any;
  defaultValue: string;
};

export const Input = ({
  name,
  handleChange,
  handleBlur,
  defaultValue,
}: Props) => {
  const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Escape") {
      handleBlur();
    }

    if (event.key === "Enter") {
      handleChange(event.currentTarget.value);
    }
  };

  return (
    <StyledInput
      type="text"
      name={name}
      onBlur={handleBlur}
      onKeyUp={handleKeyUp}
      defaultValue={defaultValue}
      autoFocus
    />
  );
};
