import { Heading } from "./Heading";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Heading", () => {
  it("renders a Text", async () => {
    render(<Heading>Heading Text</Heading>);

    const result = await screen.findByText("Heading Text");

    expect(result).toBeTruthy();
  });

  it("renders a h2 as default", async () => {
    render(<Heading>Heading Text</Heading>);

    const result = screen.getByRole("heading", { level: 2 });

    expect(result).toBeTruthy();
  });
});
