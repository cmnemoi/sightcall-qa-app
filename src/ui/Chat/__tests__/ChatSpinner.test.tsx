import { render } from "@testing-library/react";
import ChatSpinner from "../ChatSpinner";
import { describe, it, expect } from "vitest";

describe("ChatSpinner", () => {
  it("renders spinner dots", () => {
    const { container } = render(<ChatSpinner />);
    expect(container.querySelectorAll("span")).toHaveLength(3);
  });
});
