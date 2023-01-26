import React from "react";
import { Heading } from "./Heading";

describe("<Heading />", () => {
  it("renders", () => {
    cy.mount(<Heading>Heading Text</Heading>);
  });
});
