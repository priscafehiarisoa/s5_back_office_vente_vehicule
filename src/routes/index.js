import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import MoteurRoutes from './MoteurRoutes';
import ModeleRoutes from './ModeleRoutes';
import CategorieRoutes from './CategorieRoutes';
import PaysRoutes from './PaysRoutes';
import CouleurRoutes from './CouleurRoutes';
import MarqueRoutes from './MarqueRoutes';
import ImageRoutes from './ImageRoutes';
import AnnonceRoutes from './AnnonceRoutes';
import AuthRoutes from "./AuthRoutes";
import CarburantRoutes from './CarburantRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([MainRoutes, AuthenticationRoutes, MoteurRoutes, ModeleRoutes, CategorieRoutes, PaysRoutes, CouleurRoutes, MarqueRoutes, AnnonceRoutes,AuthRoutes,ImageRoutes,CarburantRoutes]);
}
