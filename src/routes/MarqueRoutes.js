import React, { lazy } from 'react';

// project imports
import MainLayout from '../layout/MainLayout';
import Loadable from '../ui-component/Loadable';
import InsertCategorie from '../views/pages/Vehicule/categorie/insertCategorie';
import {Navigate} from "react-router";

// dashboard routing
const InsertMarque = Loadable(lazy(() => import('../views/pages/Vehicule/marque/insertMarque')));


const isAuthenticated = localStorage.getItem("adminUserCarSell")!==null;

const MarqueRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/InsertMarque',
      element: isAuthenticated?<InsertMarque />: <Navigate to="/login" replace={true} />
    }
  ]
};

export default MarqueRoutes;
