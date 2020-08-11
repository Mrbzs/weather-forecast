import React, { useState, useEffect } from 'react';
import { CityTree } from '../CityTree/CityTree';
import { getCityData } from '../../actions';
import { useCityValue } from '../../context';
import { Spin } from 'antd';
import * as styles from './Main.module.css';

export const Main = () => {
  const [cityData, setCityData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { city } = useCityValue();

  useEffect(() => {
    setLoading(true);
    getCityData(city)
      .then((res) => {
        setLoading(false);
        setCityData(res.data);
      })
      .catch(() => {
        setLoading(false);
        throw new Error('Something went wrong');
      });
  }, [city]);

  return loading || !cityData ? (
    <div className={styles.spinContainer}>
      <Spin tip="Loading..." />
    </div>
  ) : (
    <CityTree cityData={cityData} />
  );
};
