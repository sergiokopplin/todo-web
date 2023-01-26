import { TodoList } from "./TodoList";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

describe("TodoList", () => {
  it("renders a Title and Date", async () => {
    render(<TodoList date="Date Mock" title="Title Mock" todos={[]} />);

    const dateResult = await screen.findByText("Date Mock");
    const titleResult = await screen.findByText("Title Mock");

    expect(dateResult).toBeTruthy();
    expect(titleResult).toBeTruthy();
  });

  it("renders a List", async () => {
    render(
      <TodoList
        date="Date Mock"
        title="Title Mock"
        todos={[
          {
            id: "1234",
            text: "First Todo",
          },
          {
            id: "4321",
            text: "Second Todo",
          },
        ]}
      />
    );

    const listResult = await screen.findByRole("list");
    const listNodesResult = await screen.findAllByRole("listitem");

    expect(listResult).toBeTruthy();
    expect(listNodesResult).toHaveLength(2);
  });
});
