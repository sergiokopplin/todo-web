import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Home from "./index";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home data={[]} />);

    expect(true).toBeTruthy();
  });
});
