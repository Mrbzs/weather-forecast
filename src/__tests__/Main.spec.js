import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { Main } from '../components/Main/Main';
import { getCityData } from '../actions';

jest.mock('../actions', () => {
  const cityData = {
    current: {
      dt: 1597227669,
      temp: 300.73,
      humidity: 66,
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }
      ]
    },
    hourly: [
      {
        dt: 1597226400,
        temp: 300.73,
        humidity: 66,
        weather: [
          { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }
        ]
      }
    ],
    daily: [
      {
        dt: 1597222800,
        temp: {
          day: 300.73
        },
        humidity: 66,
        weather: [
          { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }
        ]
      }
    ]
  };
  return {
    getCityData: jest.fn(() =>
      Promise.resolve({
        data: cityData
      })
    )
  };
});

beforeEach(cleanup);

describe('<Main />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the <Main /> component', () => {
    render(<Main />);
    expect(screen.queryByTestId('main')).toBeTruthy();
  });

  it('requests data from API successfully', () => {
    render(<Main />);
    expect(getCityData).toHaveBeenCalled();
  });
});
