import Application from "./application";
import { render, screen } from "@testing-library/react";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);

    const pageHeading = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeadinf = screen.getByRole("heading", {
      level: 2,
    });
    expect(sectionHeadinf).toBeInTheDocument();

    // getByRole example
    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();

    // getByLabelText example
    const nameElement2 = screen.getByLabelText("Name");
    expect(nameElement2).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const termsElement2 = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(termsElement2).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
  });
});