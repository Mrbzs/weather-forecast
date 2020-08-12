import React from 'react';
import PropTypes from 'prop-types';
import { Tabs } from 'antd';
import { CITIES } from '../../constants';
import * as styles from './CitySelect.module.css';

export const CitySelect = ({ city, setCity }) => {
  const onChangedCity = (cityName) => {
    const selectedCity = CITIES.find((city) => city.name === cityName);
    setCity(selectedCity);
  };

  return (
    <div data-testid="city-select">
      <Tabs
        className={styles.tabs}
        value={city.name}
        onChange={onChangedCity}
        centered
      >
        {CITIES.map(({ name }) => (
          <Tabs.TabPane key={name} tab={name} aria-label="lol"></Tabs.TabPane>
        ))}
      </Tabs>
    </div>
  );
};

CitySelect.propTypes = {
  city: PropTypes.object.isRequired,
  setCity: PropTypes.func.isRequired
};
