import { TodoList } from "./TodoList";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

const todosMock = [
  {
    id: "1234",
    text: "First Todo",
    completed: true,
    position: 3,
  },
  {
    id: "4321",
    text: "Third Todo",
    completed: false,
    position: 2,
  },
  {
    id: "2432",
    text: "Second Todo",
    completed: false,
    position: 1,
  },
];

describe("TodoList", () => {
  it("renders a Title and Date", async () => {
    render(<TodoList date="Date Mock" title="Title Mock" todos={[]} />);

    const dateResult = await screen.findByText("Date Mock");
    const titleResult = await screen.findByText("Title Mock");

    expect(dateResult).toBeTruthy();
    expect(titleResult).toBeTruthy();
  });

  it("renders a List", async () => {
    render(<TodoList date="Date Mock" title="Title Mock" todos={todosMock} />);

    const listResult = await screen.findByRole("list");
    const listNodesResult = await screen.findAllByRole("listitem");

    expect(listResult).toBeTruthy();
    expect(listNodesResult).toHaveLength(3);
  });

  it("renders a List with order", async () => {
    render(<TodoList date="Date Mock" title="Title Mock" todos={todosMock} />);

    const listNodesResult = await screen.findAllByRole("listitem");

    expect(listNodesResult[0].textContent).toBe("Second Todo");
    expect(listNodesResult[1].textContent).toBe("Third Todo");
    expect(listNodesResult[2].textContent).toBe("First Todo");
  });
});
