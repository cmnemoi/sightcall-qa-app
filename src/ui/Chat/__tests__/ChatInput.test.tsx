import { render, screen, fireEvent } from '@testing-library/react';
import ChatInput from '../ChatInput';
import { describe, it, expect, vi } from 'vitest';

describe('ChatInput', () => {
  it('calls onSend when submitting', () => {
    const onSend = vi.fn();
    render(<ChatInput onSend={onSend} />);
    const input = screen.getByPlaceholderText(/write a message/i);
    fireEvent.change(input, { target: { value: 'Test message' } });
    fireEvent.submit(input.closest('form'));
    expect(onSend).toHaveBeenCalledWith('Test message');
  });
});
