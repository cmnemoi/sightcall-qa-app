import '@testing-library/jest-dom';

// Mock scrollTo for jsdom
Object.defineProperty(HTMLElement.prototype, 'scrollTo', {
  configurable: true,
  value: () => {},
});

// Mock scrollIntoView for jsdom
Object.defineProperty(HTMLElement.prototype, 'scrollIntoView', {
  configurable: true,
  value: () => {},
});
