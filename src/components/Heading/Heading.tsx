import { StyledHeading, StyledHeadingVariants } from "./Heading.styles";

type Props = {
  children: string;
  color?: StyledHeadingVariants["color"];
};

export const Heading = ({ children, color = "default" }: Props) => {
  return <StyledHeading color={color}>{children}</StyledHeading>;
};
