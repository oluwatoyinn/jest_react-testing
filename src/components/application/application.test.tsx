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

    const paragraphText = screen.getByText("All fields are mandatory");
    expect(paragraphText).toBeInTheDocument();

    const closeElement = screen.getByTitle("close");
    expect(closeElement).toBeInTheDocument();



    const imageAltText = screen.getByAltText("a man standing");
    expect(imageAltText).toBeInTheDocument();

    // getByRole example
    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();

    // getByLabelText example
    const nameElement2 = screen.getByLabelText("Name");
    expect(nameElement2).toBeInTheDocument();

    // getByPlaceholderText example
    const nameElement3 = screen.getByPlaceholderText("FullName");
    expect(nameElement3).toBeInTheDocument();

    // getByDisplayValue example
    const nameElement4 = screen.getByDisplayValue("Victor");
    expect(nameElement4).toBeInTheDocument();

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
