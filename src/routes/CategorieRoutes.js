import { lazy } from 'react';

// project imports
import MainLayout from '../layout/MainLayout';
import Loadable from '../ui-component/Loadable';
import InsertCategorie from '../views/pages/Vehicule/categorie/insertCategorie';

// dashboard routing
const InsertCategori = Loadable(lazy(() => import('../views/pages/Vehicule/categorie/insertCategorie')));


// ==============================|| MAIN ROUTING ||============================== //

const CategorieRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/InsertCategorie',
      element: <InsertCategori />
    }
  ]
};

export default CategorieRoutes;
