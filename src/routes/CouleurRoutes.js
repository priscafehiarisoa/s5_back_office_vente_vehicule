import { lazy } from 'react';

// project imports
import MainLayout from '../layout/MainLayout';
import Loadable from '../ui-component/Loadable';
import InsertCategorie from '../views/pages/Vehicule/categorie/insertCategorie';

// dashboard routing
const InsertCouleur = Loadable(lazy(() => import('../views/pages/Vehicule/couleur/insertCouleur')));


// ==============================|| MAIN ROUTING ||============================== //

const CouleurRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/InsertCouleur',
      element: <InsertCouleur />
    }
  ]
};

export default CouleurRoutes;
