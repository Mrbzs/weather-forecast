import axios from 'axios';
import { BASE_URL, API_KEY } from '../constants';

export const getCityData = (city) => {
  return axios.get(
    `${BASE_URL}?lat=${city.lat}&lon=${city.lon}&exclude=minutely&appid=${API_KEY}`
  );
};
