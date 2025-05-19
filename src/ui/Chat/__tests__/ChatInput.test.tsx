import { render, screen, fireEvent } from "@testing-library/react";
import ChatInput from "../ChatInput";
import { describe, it, expect, vi } from "vitest";

describe("ChatInput", () => {
  it("calls onSend when submitting", () => {
    const onSend = vi.fn();
    render(<ChatInput onSend={onSend} />);
    const input = screen.getByPlaceholderText(/write a message/i);
    fireEvent.change(input, { target: { value: "Test message" } });
    const form = input.closest("form");
    if (!form) {
      throw new Error("Form element not found for input");
    }
    fireEvent.submit(form);
    expect(onSend).toHaveBeenCalledWith("Test message");
  });
});
