import React, { useState } from 'react';
import { CITIES } from '../../constants';

const Home = () => {
  // Declare city state variable
  const [currentCity, setCity] = useState(CITIES[0]);

  const onChangedCity = (event) => {
    setCity(event.target.value);
  };

  return (
    <>
      <select value={currentCity} onBlur={onChangedCity}>
        {CITIES.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </>
  );
};

export default Home;
