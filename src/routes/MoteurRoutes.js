import { lazy } from 'react';

// project imports
import MainLayout from '../layout/MainLayout';
import Loadable from '../ui-component/Loadable';

// dashboard routing
const InsertMoteur = Loadable(lazy(() => import('../views/pages/Vehicule/moteur/insertMoteur')));


// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/Insertmoteur',
      element: <InsertMoteur />
    }
  ]
};

export default MainRoutes;
