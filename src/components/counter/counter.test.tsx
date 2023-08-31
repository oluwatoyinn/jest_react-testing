import Counter from "./counter";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

describe("Counter", () => {
  test("counter renders correctly", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();
    const incrementBtn = screen.getByRole("button", {
      name: "Increment",
    });
    expect(incrementBtn).toBeInTheDocument();
  });

  test("renders count of 0", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  test("render a count of 1 after clicking the increment btn", async () => {
    render(<Counter />);
    const incrementBtn = screen.getByRole("button", {
      name: "Increment",
    });
    await user.click(incrementBtn);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });

  test("render a count of 2 after clicking the increment btn twice", async () => {
    render(<Counter />);
    const incrementBtn = screen.getByRole("button", {
      name: "Increment",
    });
    await user.click(incrementBtn);
    await user.click(incrementBtn);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("2");
  });

  test("renders a count of 10 after clicking the set btn", async () => {
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    await user.type(amountInput, "10");
    expect(amountInput).toHaveValue(10);

    const setBtn = screen.getByRole("button", {
      name: "Set",
    });
    await user.click(setBtn);
    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent("10")
  });
//  tab API - toHaveFocus() 
//  copy, cut, paste, clear etc
});
