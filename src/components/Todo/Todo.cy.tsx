/// <reference types="Cypress" />

import React from "react";
import { Todo } from "./Todo";

const handlers = {
  handleDone: () => console.log("handleDone"),
  handleDelete: () => console.log("handleDelete"),
};

describe("<Todo />", () => {
  describe("Theme", () => {
    describe("initial", () => {
      it("should changes background on hover and returns on leave", () => {
        cy.mount(<Todo {...handlers}>Todo Text</Todo>);

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

    describe("active", () => {
      it("should changes background on hover and returns on leave", () => {
        cy.mount(
          <Todo theme="active" {...handlers}>
            Todo Text
          </Todo>
        );

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

    describe("inactive", () => {
      it("should changes background on hover and returns on leave", () => {
        cy.mount(
          <Todo theme="inactive" {...handlers}>
            Todo Text
          </Todo>
        );

        cy.get("[data-cy='todo-wrapper']").trigger("mouseover");

        cy.get("[data-cy='todo-wrapper']").should(
          "have.css",
          "background-color",
          "rgb(248, 248, 248)"
        );

        cy.get("[data-cy='todo-wrapper']").trigger("mouseout");

        cy.get("[data-cy='todo-wrapper']").should(
          "have.css",
          "background-color",
          "rgba(0, 0, 0, 0)"
        );
      });
    });
  });

  describe("Icon", () => {
    describe("when initial or active", () => {
      it("should render icon on hover", () => {
        cy.mount(
          <Todo done {...handlers}>
            Todo Text
          </Todo>
        );

        cy.get("[data-cy='todo-icon-wrapper']").should("not.exist");
        cy.get("[data-cy='todo-wrapper']").trigger("mouseover");
        cy.get("[data-cy='todo-icon-wrapper']").should("exist");
        cy.get("[data-cy='todo-icon-wrapper'] svg").should(
          "have.css",
          "color",
          "rgb(244, 29, 18)"
        );
        cy.get("[data-cy='todo-wrapper']").trigger("mouseout");
        cy.get("[data-cy='todo-icon-wrapper']").should("not.exist");
      });
    });

    describe("when inactive", () => {
      it("should render icon on hover", () => {
        cy.mount(
          <Todo done {...handlers}>
            Todo Text
          </Todo>
        );

        cy.get("[data-cy='todo-icon-wrapper']").should("not.exist");
        cy.get("[data-cy='todo-wrapper']").trigger("mouseover");
        cy.get("[data-cy='todo-icon-wrapper']").should("exist");
        cy.get("[data-cy='todo-icon-wrapper'] svg").should(
          "have.css",
          "color",
          "rgb(244, 29, 18)"
        );
        cy.get("[data-cy='todo-icon-wrapper']").trigger("mouseover");
        cy.get("[data-cy='todo-icon-wrapper'] svg").should(
          "have.css",
          "color",
          "rgb(244, 29, 18)"
        );
        cy.get("[data-cy='todo-wrapper']").trigger("mouseout");
        cy.get("[data-cy='todo-icon-wrapper']").should("not.exist");
      });
    });
  });
});
