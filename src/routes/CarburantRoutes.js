import React, { lazy } from 'react';

// project imports
import MainLayout from '../layout/MainLayout';
import Loadable from '../ui-component/Loadable';
import InsertCategorie from '../views/pages/Vehicule/categorie/insertCategorie';
import {Navigate} from "react-router";

// dashboard routing
const InsertCarburant = Loadable(lazy(() => import('../views/pages/Vehicule/carburant/insertCarburant')));


const isAuthenticated = localStorage.getItem("adminUserCarSell")!==null;

const CarburantRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/InsertCarburant',
      element: isAuthenticated? <InsertCarburant />: <Navigate to="/login" replace={true} />
    }
  ]
};

export default CarburantRoutes;
