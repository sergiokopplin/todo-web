import React from "react";
import { Todo } from "./Todo";

describe("<Todo />", () => {
  it("should changes background on hover and returns on leave", () => {
    cy.mount(<Todo>Todo Text</Todo>);

    cy.get("[data-cy='todo-wrapper']").trigger("mouseover");

    cy.get("[data-cy='todo-wrapper']").should(
      "have.css",
      "background-color",
      "rgb(254, 222, 222)"
    );

    cy.get("[data-cy='todo-wrapper']").trigger("mouseout");

    cy.get("[data-cy='todo-wrapper']").should(
      "have.css",
      "background-color",
      "rgba(0, 0, 0, 0)"
    );
  });
});
