import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';

export const Navigation = () => {
  const routes = [
    {
      path: 'current',
      breadcrumbName: 'Current'
    },
    {
      path: 'hourly',
      breadcrumbName: 'Hourly'
    },
    {
      path: 'daily',
      breadcrumbName: 'Daily'
    }
  ];

  return (
    <Breadcrumb separator={'|'}>
      {routes.map((route) => (
        <Breadcrumb.Item key={route.path}>
          <Link to={route.path}>{route.breadcrumbName}</Link>
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};
