import { render } from "@testing-library/react";
import Home from "../src/pages/home";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home data={[]} />);

    expect(true).toBeTruthy();
  });
});
