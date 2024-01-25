import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import MoteurRoutes from './MoteurRoutes';
import AnnonceRoutes from "./AnnonceRoutes";

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([MainRoutes, AuthenticationRoutes, MoteurRoutes,AnnonceRoutes]);
}
