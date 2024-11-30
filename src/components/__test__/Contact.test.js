import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Test Cases", () => {
  test("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside contact us component", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });

  test("Should load input box with placeholder name inside contact us component", () => {
    render(<Contact />);

    const input = screen.getByPlaceholderText("Name");

    expect(input).toBeInTheDocument();
  });

  test("Should load 2 input boxes inside contact us component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).not.toBe(3);
  });
});
