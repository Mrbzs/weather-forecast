import React, { useState, useContext, createContext } from 'react';
import PropTypes from 'prop-types';
import { CITIES } from '../constants';

export const CityContext = createContext();
export const CityProvider = ({ children }) => {
  const [city, setCity] = useState(CITIES[0]);

  return (
    <CityContext.Provider value={{ city, setCity }}>
      {children}
    </CityContext.Provider>
  );
};

export const useCityValue = () => useContext(CityContext);

CityProvider.propTypes = {
  children: PropTypes.any
};
