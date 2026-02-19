import { render, screen } from "@testing-library/react";
import { ContentA } from "./ContentA";

describe("ContentA Component", () => {

  test("renders ContentA heading", () => {
    render(<ContentA />);
    expect(screen.getByText(/Content A/i)).toBeInTheDocument();
  });

  test("renders ContentA button", () => {
    render(<ContentA />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("renders without crashing", () => {
    const { container } = render(<ContentA />);
    expect(container).toBeTruthy();
  });

});