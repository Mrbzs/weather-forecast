import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { CitySelect } from '../components/CitySelect/CitySelect';
import { CITIES } from '../constants';

beforeEach(cleanup);

describe('<CitySelect />', () => {
  let setCity;

  beforeEach(() => {
    setCity = jest.fn(() => ({
      name: 'Larnaca',
      lat: 33.63,
      lon: 34.92
    }));
    render(<CitySelect city={CITIES[0]} setCity={setCity} />);
  });

  it('renders the <CitySelect /> component', () => {
    expect(screen.queryByTestId('city-select')).toBeTruthy();
  });

  it('renders the corrent number of cities', () => {
    expect(screen.queryAllByRole('tab').length).toBe(CITIES.length);
  });

  it('updates city when a tab is clicked', () => {
    fireEvent.click(screen.queryAllByRole('tab')[1]);
    expect(setCity).toHaveBeenCalled();
  });
});
