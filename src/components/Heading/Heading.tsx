import { Typography, theme } from "antd";

const { Title } = Typography;
const { useToken } = theme;

type Color = "default" | "active" | "inactive";

type Props = {
  children: string;
  color?: Color;
};

export const Heading = ({ children, color = "default" }: Props) => {
  const { token } = useToken();

  const colorTheme = {
    default: token.colorTextBase,
    active: token.colorPrimary,
    inactive: token.colorTextSecondary,
  };

  return (
    <Title
      level={2}
      style={{
        color: colorTheme[color],
        textTransform: "uppercase",
        fontFamily: "Pathway Gothic One, sans-serif",
        fontSize: 32,
      }}
    >
      {children}
    </Title>
  );
};
