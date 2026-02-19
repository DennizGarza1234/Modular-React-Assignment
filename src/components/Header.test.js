import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header Component", () => {

  test("renders header title correctly", () => {
    render(<Header />);
    const title = screen.getByText(/React Modularity Assignment/i);
    expect(title).toBeInTheDocument();
  });

  test("Header renders without crashing", () => {
    const { container } = render(<Header />);
    expect(container).toBeTruthy();
  });

});