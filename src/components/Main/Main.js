import React, { useState, useEffect } from 'react';
import { CityTree } from '../CityTree/CityTree';
import { getCityData } from '../../actions';
import { useCityValue } from '../../context';

export const Main = () => {
  const [cityData, setCityData] = useState(null);
  const { city } = useCityValue();

  useEffect(() => {
    getCityData(city)
      .then((res) => {
        setCityData(res.data);
      })
      .catch(() => {
        throw new Error('Something went wrong');
      });
  }, [city]);

  return cityData && <CityTree cityData={cityData} />;
};
