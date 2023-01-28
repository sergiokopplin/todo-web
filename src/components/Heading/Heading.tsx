import { StyledHeading } from "./Heading.styles";

type Props = {
  children: string;
  color?: "default" | "active" | "inactive";
};

export const Heading = ({ children, color = "default" }: Props) => {
  return <StyledHeading color={color}>{children}</StyledHeading>;
};
