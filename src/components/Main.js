import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CITIES, BASE_URL, API_KEY } from '../constants';
import { Select } from 'antd';
import axios from 'axios';
import { withRouter } from 'react-router';
import { CityCard } from './CityCard';

export const Main = withRouter(({ location }) => {
  const [city, setCity] = useState(CITIES[0]);
  const [cityData, setCityData] = useState(null);
  const wantedOption = location.pathname.substr(1);

  useEffect(() => {
    const exclude = ['minutely', 'hourly', 'daily', 'current']
      .filter((option) => option !== wantedOption)
      .join(',');

    axios
      .get(
        `${BASE_URL}?lat=${city.lat}&lon=${city.lon}&exclude=${exclude}&appid=${API_KEY}`
      )
      .then((res) => {
        setCityData(res.data);
      });
  }, [city, wantedOption]);

  const onChangedCity = (cityName) => {
    const selectedCity = CITIES.find((city) => city.name === cityName);
    setCity(selectedCity);
  };

  return (
    <>
      <Select value={city.name} onChange={onChangedCity}>
        {CITIES.map(({ name }) => (
          <Select.Option key={name} value={name}>
            {name}
          </Select.Option>
        ))}
      </Select>
      <CityCard cityData={cityData} />
    </>
  );
});

Main.propTypes = {
  location: PropTypes.object
};
