import { Todo } from "./Todo";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

describe("Todo", () => {
  it("renders a Text", async () => {
    render(<Todo text="First Todo" />);

    const result = await screen.findByText("First Todo");

    expect(result).toBeTruthy();
  });
});
