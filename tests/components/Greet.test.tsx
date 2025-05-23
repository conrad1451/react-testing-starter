import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Greet from "../../src/components/Greet.tsx";
import "@testing-library/jest-dom/vitest";

describe("Greet", () => {
  it("should render Hello with the name when name is provided", () => {
    render(<Greet name="Mosh" />);
    screen.debug();
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/hello mosh/i);
  });

  it("should render login button when name is not provided", () => {
    render(<Greet />);
    screen.debug();
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/login/i);
  });
});
