import { lazy } from 'react';

// project imports
import MainLayout from '../layout/MainLayout';
import Loadable from '../ui-component/Loadable';
import InsertCategorie from '../views/pages/Vehicule/categorie/insertCategorie';

// dashboard routing
const Login = Loadable(lazy(() => import('../views/pages/authentication/authentication3/Login3')));


const AuthRoutes = {
  path: '/',
  children: [
    {
      path: '/login',
      element: <Login />
    }
  ]
};

export default AuthRoutes;
