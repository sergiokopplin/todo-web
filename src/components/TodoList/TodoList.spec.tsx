import { TodoList } from "./TodoList";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { IntlWrapper } from "@/tests";
import React from "react";

const todosMock = [
  {
    id: "1234",
    text: "First Todo",
    done: true,
    position: 3,
  },
  {
    id: "4321",
    text: "Third Todo",
    done: false,
    position: 2,
  },
  {
    id: "2432",
    text: "Second Todo",
    done: false,
    position: 1,
  },
];

describe("TodoList", () => {
  it("renders a Title and Date", async () => {
    render(
      <IntlWrapper>
        <TodoList
          date={new Date(2023, 0, 25)}
          title={new Date(2023, 0, 25)}
          todos={[]}
        />
      </IntlWrapper>
    );

    const dateResult = await screen.findByText("25 de janeiro de 2023");
    const titleResult = await screen.findByText("quarta-feira");

    expect(dateResult).toBeTruthy();
    expect(titleResult).toBeTruthy();
  });

  it("renders a List", async () => {
    render(
      <IntlWrapper>
        <TodoList
          date={new Date(2023, 0, 25)}
          title={new Date(2023, 0, 25)}
          todos={todosMock}
        />
      </IntlWrapper>
    );

    const listResult = await screen.findByRole("list");
    const listNodesResult = await screen.findAllByRole("listitem");

    expect(listResult).toBeTruthy();
    expect(listNodesResult).toHaveLength(3);
  });

  it("renders a List with order", async () => {
    render(
      <IntlWrapper>
        <TodoList
          date={new Date(2023, 0, 25)}
          title={new Date(2023, 0, 25)}
          todos={todosMock}
        />
      </IntlWrapper>
    );

    const listNodesResult = await screen.findAllByRole("listitem");

    expect(listNodesResult[0].textContent).toBe("Second Todo");
    expect(listNodesResult[1].textContent).toBe("Third Todo");
    expect(listNodesResult[2].textContent).toBe("First Todo");
  });
});
