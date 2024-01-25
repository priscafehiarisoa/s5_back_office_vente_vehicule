import { lazy } from 'react';

// project imports
import MainLayout from '../layout/MainLayout';
import Loadable from '../ui-component/Loadable';
import InsertCategorie from '../views/pages/Vehicule/categorie/insertCategorie';

// dashboard routing
const InsertImage = Loadable(lazy(() => import('../views/pages/image/uploadimage')));


// ==============================|| MAIN ROUTING ||============================== //

const ImageRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/InsertImage',
      element: <InsertImage />
    }
  ]
};

export default ImageRoutes;
