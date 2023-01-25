import { Typography, theme } from "antd";
import { Heading, Text } from "@/components";

const { useToken } = theme;

export const Todo = () => {
  const { token } = useToken();

  return (
    <div style={{ textAlign: "center" }}>
      <Heading>Terça-Feira</Heading>
      <Heading color="active">Terça-Feira</Heading>
      <Heading color="inactive">Terça-Feira</Heading>

      <Text uppercase>24 de Janeiro de 2023</Text>
      <Text color="active" uppercase>
        24 de Janeiro de 2023
      </Text>
      <Text color="inactive" uppercase>
        24 de Janeiro de 2023
      </Text>

      <div>
        <ul style={{ listStyle: "none" }}>
          <li>
            <Text>tudo bem</Text>
          </li>

          <li>
            <Text>uhull</Text>
          </li>
        </ul>
      </div>
    </div>
  );
};
