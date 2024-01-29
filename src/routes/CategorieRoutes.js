import React, { lazy } from 'react';

// project imports
import MainLayout from '../layout/MainLayout';
import Loadable from '../ui-component/Loadable';
import InsertCategorie from '../views/pages/Vehicule/categorie/insertCategorie';
import {Navigate} from "react-router";

// dashboard routing
const InsertCategori = Loadable(lazy(() => import('../views/pages/Vehicule/categorie/insertCategorie')));


const isAuthenticated = localStorage.getItem("adminUserCarSell")!==null;

const CategorieRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/InsertCategorie',
      element: isAuthenticated? <InsertCategori />: <Navigate to="/login" replace={true} />
    }
  ]
};

export default CategorieRoutes;
