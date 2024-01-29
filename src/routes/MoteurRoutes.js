import React, { lazy } from 'react';

// project imports
import MainLayout from '../layout/MainLayout';
import Loadable from '../ui-component/Loadable';
import {Navigate} from "react-router";

// dashboard routing
const InsertMoteur = Loadable(lazy(() => import('../views/pages/Vehicule/moteur/insertMoteur')));


const isAuthenticated = localStorage.getItem("adminUserCarSell")!==null;

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/Insertmoteur',
      element: isAuthenticated? <InsertMoteur />: <Navigate to="/login" replace={true} />
    }
  ]
};

export default MainRoutes;
