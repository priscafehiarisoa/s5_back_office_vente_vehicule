import React, { lazy } from 'react';

// project imports
import MainLayout from '../layout/MainLayout';
import Loadable from '../ui-component/Loadable';
import InsertCategorie from '../views/pages/Vehicule/categorie/insertCategorie';
import {Navigate} from "react-router";

// dashboard routing
const InsertPays = Loadable(lazy(() => import('../views/pages/Vehicule/pays/insertPays')));


const isAuthenticated = localStorage.getItem("adminUserCarSell")!==null;

const PaysRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/InsertPays',
      element: isAuthenticated? <InsertPays />:  <Navigate to="/login" replace={true} />
    }
  ]
};

export default PaysRoutes;
