import { StyledText } from "./Text.styles";

type Props = {
  children: string;
  color?: "default" | "active" | "inactive";
  uppercase?: boolean;
  lineThrough?: boolean;
  size?: "m" | "s";
};

export const Text = ({
  children,
  color = "default",
  uppercase = false,
  lineThrough = false,
  size = "m",
  ...rest
}: Props) => {
  return (
    <StyledText
      color={color}
      uppercase={uppercase}
      lineThrough={lineThrough}
      size={size}
      {...rest}
    >
      {children}
    </StyledText>
  );
};
