import dashboard from './dashboard';
import pages from './pages';
import Moteur from './Moteur';
import modele from './modele';
import categorie from './categorie';
import pays from './pays';
import couleur from './couleur';
import marque from './marque';
import AnnonceMenu from './AnnonceMenu';
import vehiculeMenu from "./VehiculeMenu";

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  items: [dashboard, vehiculeMenu,  AnnonceMenu]
};

export default menuItems;
