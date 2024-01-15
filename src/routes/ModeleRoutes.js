import { lazy } from 'react';

// project imports
import MainLayout from '../layout/MainLayout';
import Loadable from '../ui-component/Loadable';

// dashboard routing
const InsertModele = Loadable(lazy(() => import('../views/pages/Vehicule/modele/insertModele')));


// ==============================|| MAIN ROUTING ||============================== //

const ModeleRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/Insertmodele',
      element: <InsertModele />
    }
  ]
};

export default ModeleRoutes;
