import React from 'react';
import { render } from '@testing-library/react';
import * as RTL from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = RTL.screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
