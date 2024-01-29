import React, { lazy } from 'react';

// project imports
import MainLayout from '../layout/MainLayout';
import Loadable from '../ui-component/Loadable';
import {Navigate} from "react-router";

// dashboard routing
const InsertModele = Loadable(lazy(() => import('../views/pages/Vehicule/modele/insertModele')));


const isAuthenticated = localStorage.getItem("adminUserCarSell")!==null;

const ModeleRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/Insertmodele',
      element: isAuthenticated?<InsertModele />: <Navigate to="/login" replace={true} />
    }
  ]
};

export default ModeleRoutes;
