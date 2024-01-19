import { lazy } from 'react';

// project imports
import MainLayout from '../layout/MainLayout';
import Loadable from '../ui-component/Loadable';
import InsertCategorie from '../views/pages/Vehicule/categorie/insertCategorie';

// dashboard routing
const InsertPays = Loadable(lazy(() => import('../views/pages/Vehicule/pays/insertPays')));


// ==============================|| MAIN ROUTING ||============================== //

const PaysRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/InsertPays',
      element: <InsertPays />
    }
  ]
};

export default PaysRoutes;
