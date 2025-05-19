import { render, screen } from "@testing-library/react";
import { ChatAnswerDisplay } from "../ChatAnswerDisplay";
import { describe, it, expect } from "vitest";

describe("ChatAnswerDisplay", () => {
  it("renders markdown answer", () => {
    render(<ChatAnswerDisplay markdownAnswer={"**Bold**"} />);
    expect(screen.getByText("Bold")).toBeInTheDocument();
  });
});
