import React from 'react';
import 'antd/dist/antd.css';
import { Main } from './components/Main/Main';

export const App = () => {
  return (
    <span data-testid="application">
      <Main />
    </span>
  );
};
