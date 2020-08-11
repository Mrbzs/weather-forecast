import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import { CitySelect } from './components/CitySelect';
import { Main } from './components/Main';
import { CityProvider } from './context';

const { Content } = Layout;

export const App = () => {
  return (
    <CityProvider>
      <Layout className="layout">
        <Content>
          <CitySelect />
          <Main />
        </Content>
      </Layout>
    </CityProvider>
  );
};
