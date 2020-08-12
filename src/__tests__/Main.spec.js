import React from 'react';
import {
  render,
  screen,
  fireEvent,
  cleanup,
  wait
} from '@testing-library/react';
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

  it('renders the <CitySelect /> component', () => {
    render(<Main />);
    expect(screen.queryByTestId('city-select')).toBeTruthy();
  });

  it('requests data from API when app is initialized and when user clicks on a city', async () => {
    render(<Main />);
    expect(screen.queryByText('Loading...')).toBeTruthy();
    expect(getCityData).toHaveBeenCalledTimes(1);

    await wait(() => expect(screen.queryByText('Loading...')).toBeFalsy());

    expect(screen.queryByTestId('city-tree')).toBeTruthy();
    fireEvent.click(screen.queryAllByRole('tab')[1]);
    expect(getCityData).toHaveBeenCalledTimes(2);
  });

  it('renders the <CityTree /> component when data is fetched from API', async () => {
    render(<Main />);
    await wait(() => expect(screen.queryByText('Loading...')).toBeFalsy());
    expect(screen.queryByTestId('city-tree')).toBeTruthy();
  });
});
