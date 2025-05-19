import { render, screen } from "@testing-library/react";
import ChatApp from "../ChatApp";
import { describe, it, expect } from "vitest";

describe("ChatApp", () => {
  it("renders initial bot message", () => {
    render(<ChatApp />);
    expect(screen.getByText(/how can i help you/i)).toBeInTheDocument();
  });
});
