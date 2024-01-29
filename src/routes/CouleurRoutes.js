import React, { lazy } from 'react';

// project imports
import MainLayout from '../layout/MainLayout';
import Loadable from '../ui-component/Loadable';
import InsertCategorie from '../views/pages/Vehicule/categorie/insertCategorie';
import {Navigate} from "react-router";

// dashboard routing
const InsertCouleur = Loadable(lazy(() => import('../views/pages/Vehicule/couleur/insertCouleur')));


const isAuthenticated = localStorage.getItem("adminUserCarSell")!==null;

const CouleurRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/InsertCouleur',
      element: isAuthenticated?<InsertCouleur />: <Navigate to="/login" replace={true} />
    }
  ]
};

export default CouleurRoutes;
