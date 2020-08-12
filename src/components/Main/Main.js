import React, { useState, useEffect } from 'react';
import { Layout, Spin } from 'antd';
import { CityTree } from '../CityTree/CityTree';
import { CitySelect } from '../CitySelect/CitySelect';
import { getCityData } from '../../actions';
import { CITIES } from '../../constants';
import * as styles from './Main.module.css';

export const Main = () => {
  const [cityData, setCityData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState(CITIES[0]);

  useEffect(() => {
    setLoading(true);
    getCityData(city).then((res) => {
      setLoading(false);
      setCityData(res.data);
    });
  }, [city]);

  const content =
    loading || !cityData ? (
      <div className={styles.spinContainer}>
        <Spin tip="Loading..." />
      </div>
    ) : (
      <CityTree cityData={cityData} />
    );

  return (
    <Layout className={styles.layout} data-testid="main">
      <Layout.Header className={styles.header}>
        <CitySelect city={city} setCity={setCity} />
      </Layout.Header>
      <Layout.Content className={styles.content}>{content}</Layout.Content>
    </Layout>
  );
};
