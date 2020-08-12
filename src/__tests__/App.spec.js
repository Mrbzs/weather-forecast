import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from '../App';

describe('<App />', () => {
  it('renders the application', () => {
    render(<App />);
    expect(screen.queryByTestId('application')).toBeTruthy();
  });
});
