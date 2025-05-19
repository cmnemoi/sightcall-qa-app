import { render, screen, fireEvent } from '@testing-library/react';
import SourcesAccordion from '../SourcesAccordion';
import { describe, it, expect } from 'vitest';

describe('SourcesAccordion', () => {
  it('renders sources and toggles', () => {
    const sources = [
      { content: 'Example source content', url: 'https://example.com' },
    ];
    render(<SourcesAccordion sources={sources} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(screen.getByText(/example source content/i)).toBeInTheDocument();
  });
});
