import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// describe is use just for grouping the test Cases
describe("Contace use page test cases", () => {
    // instead of test you can write {it} both are same. 
    // it is just an another name of test.
  it("should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  test("should load button inside contact us component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");

    //Assertion
    expect(button).toBeInTheDocument();
  });

  test("should check button by text inside contact us component", () => {
    render(<Contact />);
    const button = screen.getByText("submit");

    //Assertion
    expect(button).toBeInTheDocument();
  });

  test("should check button by placeholder inside contact us component", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("name");

    //Assertion
    expect(inputName).toBeInTheDocument();
  });

  test("should check no. of placeholder inside contact us component", () => {
    render(<Contact />);
    const inputBox = screen.getAllByRole("textbox");

    console.log(inputBox.length);
    expect(inputBox.length).toBe(2);

    //Assertion
  });
});
