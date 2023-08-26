import Skills from "./skills";
import { getByRole, render, screen } from "@testing-library/react";

describe("Skills", () => {
  const skills = ["CSS", "HTML", "JAVASCRIPT"];

  test("renders skills", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("renders list of skills", () => {
    render(<Skills skills={skills} />);
    const listItemElement = screen.getAllByRole("listitem");
    expect(listItemElement).toHaveLength(skills.length);
  });

  test("render login button", () => {
    render(<Skills skills={skills} />);
    const buttonElement = screen.getByRole("button", {
      name: "Login",
    });
    expect(buttonElement).toBeInTheDocument();
  });

  test("start learning button not rendered", () => {
    render(<Skills skills={skills} />);
    const starLearningtButtonElement = screen.queryByRole("button", {
      name: "Start Learning",
    });
    expect(starLearningtButtonElement).not.toBeInTheDocument();
  });
});
