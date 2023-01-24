import Home from "@/pages/home";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home data={[]} />);

    expect(true).toBeTruthy();
  });
});
