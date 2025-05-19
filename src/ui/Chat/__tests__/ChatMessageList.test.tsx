import { render, screen } from '@testing-library/react';
import ChatMessageList from '../ChatMessageList';
import { describe, it, expect } from 'vitest';

describe('ChatMessageList', () => {
  it('renders messages', () => {
    render(
      <ChatMessageList
        messages={[
          { sender: 'user', message: 'Hello there!' },
          { sender: 'bot', message: 'Hi, human!' },
        ]}
      />
    );
    expect(screen.getByText('Hello there!')).toBeInTheDocument();
    expect(screen.getByText('Hi, human!')).toBeInTheDocument();
  });
});
