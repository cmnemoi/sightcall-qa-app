import { render, screen } from '@testing-library/react';
import ChatBubble from '../ChatBubble';
import { describe, it, expect } from 'vitest';

describe('ChatBubble', () => {
  it('renders user message', () => {
    render(<ChatBubble sender="user" message="User message" />);
    expect(screen.getByText('User message')).toBeInTheDocument();
  });

  it('renders bot message', () => {
    render(<ChatBubble sender="bot" message="Bot answer" sources={[]} />);
    expect(screen.getByText('Bot answer')).toBeInTheDocument();
  });
});
