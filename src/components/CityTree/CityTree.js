import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Tree } from 'antd';
import { OPTIONS } from '../../constants';
import { FaThermometerHalf, FaTint } from 'react-icons/fa';
import * as styles from './CityTree.module.css';

export const CityTree = memo(({ cityData }) => {
  const treeData = OPTIONS.map((option) => ({
    title: option.charAt(0).toUpperCase() + option.slice(1),
    key: option,
    children: []
  }));

  OPTIONS.forEach((option, index) => {
    const dataArray =
      option === 'current' ? [cityData[option]] : cityData[option];

    dataArray.forEach((data, index2) => {
      const date = new Date();
      date.setTime(data.dt * 1000);

      treeData[index].children.push({
        title: `${
          option === 'daily' ? date.toLocaleDateString() : date.toLocaleString()
        }`,
        key: `date${index}-${index2}`,
        children: []
      });

      const leafData = [
        {
          title: (
            <>
              <FaThermometerHalf className={styles.weatherIcon} />
              {((data.temp.day || data.temp) - 273.15).toFixed(2)}°C
            </>
          ),
          key: `temp${index}-${index2}`
        },
        {
          title: (
            <>
              <FaTint className={styles.weatherIcon} />
              {data.humidity}%
            </>
          ),
          key: `humid${index}-${index2}`
        },
        {
          title: (
            <>
              <img
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt="Icon"
              />
              {data.weather[0].description.charAt(0).toUpperCase() +
                data.weather[0].description.slice(1)}
            </>
          ),
          key: `weather${index}-${index2}`
        }
      ];

      leafData.forEach((leaf) =>
        treeData[index].children[index2].children.push(leaf)
      );
    });
  });

  return (
    <Tree
      className={styles.tree}
      treeData={treeData}
      defaultExpandedKeys={['date0-0']}
    />
  );
});

CityTree.propTypes = {
  cityData: PropTypes.object,
  option: PropTypes.string
};
