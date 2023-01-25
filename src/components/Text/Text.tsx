import { Typography, theme } from "antd";

const { useToken } = theme;

type Color = "default" | "active" | "inactive";

type Props = {
  children: string;
  color?: Color;
  uppercase?: boolean;
};

export const Text = ({
  children,
  color = "default",
  uppercase = false,
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
      }}
    >
      {children}
    </Typography>
  );
};
