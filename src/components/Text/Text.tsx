import { StyledText, StyledTextVariants } from "./Text.styles";

type Props = {
  children: string;
  color?: StyledTextVariants["color"];
  uppercase?: StyledTextVariants["uppercase"];
  lineThrough?: StyledTextVariants["lineThrough"];
};

export const Text = ({
  children,
  color = "default",
  uppercase = false,
  lineThrough = false,
}: Props) => {
  return (
    <StyledText color={color} uppercase={uppercase} lineThrough={lineThrough}>
      {children}
    </StyledText>
  );
};
