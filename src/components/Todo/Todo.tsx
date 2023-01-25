import { Typography, theme } from "antd";

const { Title } = Typography;
const { useToken } = theme;

export const Todo = () => {
  const { token } = useToken();

  return (
    <div style={{ textAlign: "center" }}>
      <Title
        level={2}
        style={{
          color: token.colorPrimary,
          textTransform: "uppercase",
          fontFamily: "Pathway Gothic One, sans-serif",
          fontSize: 32,
        }}
      >
        Terça Feira
      </Title>

      <Typography
        style={{
          color: token.colorPrimary,
          textTransform: "uppercase",
          fontSize: 12,
        }}
      >
        24 de Janeiro de 2023
      </Typography>

      <div>
        <ul style={{ listStyle: "none" }}>
          <li>
            <Typography style={{ color: token.colorPrimary }}>
              tudo bem
            </Typography>
          </li>

          <li>
            <Typography style={{ color: token.colorPrimary }}>uhull</Typography>
          </li>
        </ul>
      </div>
    </div>
  );
};
