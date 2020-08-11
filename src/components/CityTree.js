import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Tree } from 'antd';
import { OPTIONS } from '../constants';

export const CityTree = memo(({ cityData }) => {
  let treeData = OPTIONS.map((option) => ({
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

      treeData[index].children[index2].children.push({
        title: `Temperature: ${data.temp.day || data.temp}`,
        key: `temp${index}-${index2}`
      });
    });
  });

  return <Tree treeData={treeData} />;
});

CityTree.propTypes = {
  cityData: PropTypes.object,
  option: PropTypes.string
};
