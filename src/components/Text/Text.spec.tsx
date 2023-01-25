import { Text } from "./Text";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Text", () => {
  it("renders a Text", async () => {
    render(<Text>Text</Text>);

    const result = await screen.findByText("Text");

    expect(result).toBeTruthy();
  });
});
