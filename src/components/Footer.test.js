import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer Component", () => {

  test("renders footer text correctly", () => {
    render(<Footer />);
    const text = screen.getByText(/React Modularity Project/i);
    expect(text).toBeInTheDocument();
  });

  test("Footer renders without crashing", () => {
    const { container } = render(<Footer />);
    expect(container).toBeTruthy();
  });

});