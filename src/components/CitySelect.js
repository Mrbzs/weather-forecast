import React from 'react';
import { Tabs } from 'antd';
import { useCityValue } from '../context';
import { CITIES } from '../constants';

export const CitySelect = () => {
  const { city, setCity } = useCityValue();

  const onChangedCity = (cityName) => {
    const selectedCity = CITIES.find((city) => city.name === cityName);
    setCity(selectedCity);
  };

  return (
    <Tabs value={city.name} onChange={onChangedCity}>
      {CITIES.map(({ name }) => (
        <Tabs.TabPane key={name} tab={name}></Tabs.TabPane>
      ))}
    </Tabs>
  );
};
