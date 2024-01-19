import { lazy } from 'react';

// project imports
import MainLayout from '../layout/MainLayout';
import Loadable from '../ui-component/Loadable';
import InsertCategorie from '../views/pages/Vehicule/categorie/insertCategorie';

// dashboard routing
const InsertMarque = Loadable(lazy(() => import('../views/pages/Vehicule/marque/insertMarque')));


// ==============================|| MAIN ROUTING ||============================== //

const MarqueRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/InsertMarque',
      element: <InsertMarque />
    }
  ]
};

export default MarqueRoutes;
