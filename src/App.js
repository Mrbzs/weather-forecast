import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import { CitySelect } from './components/CitySelect/CitySelect';
import { Main } from './components/Main/Main';
import { CityProvider } from './context';
import * as styles from './App.module.css';

export const App = () => {
  return (
    <CityProvider>
      <Layout className={styles.layout}>
        <Layout.Header className={styles.header} theme="light">
          <CitySelect />
        </Layout.Header>
        <Layout.Content className={styles.content}>
          <Main />
        </Layout.Content>
      </Layout>
    </CityProvider>
  );
};
