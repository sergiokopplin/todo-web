import { StyledText, StyledTextVariants } from "./Text.styles";

type Props = {
  children: string;
  color?: StyledTextVariants["color"];
  uppercase?: StyledTextVariants["uppercase"];
  lineThrough?: StyledTextVariants["lineThrough"];
  size?: StyledTextVariants["size"];
};

export const Text = ({
  children,
  color = "default",
  uppercase = false,
  lineThrough = false,
  size = "m",
}: Props) => {
  return (
    <StyledText
      color={color}
      uppercase={uppercase}
      lineThrough={lineThrough}
      size={size}
    >
      {children}
    </StyledText>
  );
};
