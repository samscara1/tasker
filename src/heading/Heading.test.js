import React from 'react';
import { render, screen } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';

import { Heading } from './Heading';

test('should render header h1 with text "Hello"', () => {
  render(<Heading />);
 
  expect(screen.getByRole('heading')).toBeInTheDocument();
})