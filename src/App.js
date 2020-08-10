import React from 'react';
import { Main } from './components/Main';
import { Navigation } from './components/Navigation';
import 'antd/dist/antd.css';

const App = () => {
  return (
    <>
      <Navigation />
      <Main />
    </>
  );
};

export default App;
