import HomePage from "../home";

describe("<HomePage />", () => {
  it("renders", () => {
    cy.mount(<HomePage data={[]} />);
  });
});
