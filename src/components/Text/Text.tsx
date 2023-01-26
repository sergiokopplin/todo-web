import { Typography, theme } from "antd";

const { useToken } = theme;

type Color = "default" | "active" | "inactive";

type Props = {
  children: string;
  color?: Color;
  uppercase?: boolean;
  lineThrough?: boolean;
};

export const Text = ({
  children,
  color = "default",
  uppercase = false,
  lineThrough = false,
}: Props) => {
  const { token } = useToken();

  const colorTheme = {
    default: token.colorTextBase,
    active: token.colorPrimary,
    inactive: token.colorTextSecondary,
  };

  return (
    <Typography
      style={{
        color: colorTheme[color],
        textTransform: uppercase ? "uppercase" : "initial",
        fontSize: 12,
        textDecoration: lineThrough ? "line-through" : "initial",
      }}
    >
      {children}
    </Typography>
  );
};
