import { render, screen } from "@testing-library/react";
import { ContentB } from "./ContentB";

describe("ContentB Component", () => {

  test("renders ContentB heading", () => {
    render(<ContentB />);
    expect(screen.getByText(/Content B/i)).toBeInTheDocument();
  });

  test("renders ContentB button", () => {
    render(<ContentB />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("renders without crashing", () => {
    const { container } = render(<ContentB />);
    expect(container).toBeTruthy();
  });

});