import { StyledHeading } from "./Heading.styles";

type Props = {
  children: any;
  color?: "initial" | "active" | "inactive";
};

export const Heading = ({ children, color = "initial" }: Props) => {
  return <StyledHeading color={color}>{children}</StyledHeading>;
};
