import React, { lazy, useEffect } from 'react';

// project imports
import MainLayout from '../layout/MainLayout';
import Loadable from '../ui-component/Loadable';
import { Navigate } from 'react-router';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('../views/dashboard/Default')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('../views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //
const isAuthenticated = localStorage.getItem('adminUserCarSell') !== null;


const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: isAuthenticated ? <DashboardDefault /> : <Navigate to="/login" replace={true} />
    },
    // {
    //   path: '/free',
    //   element: <DashboardDefault />
    // },
    {
      path: '/dashboard',
      children: [
        {
          path: 'default',
          element: isAuthenticated ? <DashboardDefault /> : <Navigate to="/login" replace={true} />
        }
      ]
    }
  ]
};

export default MainRoutes;
