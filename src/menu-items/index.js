import dashboard from './dashboard';
import pages from './pages';
import Moteur from './Moteur';
import modele from './modele';
import categorie from './categorie';
import pays from './pays';
import couleur from './couleur';
import marque from './marque';
import AnnonceMenu from './AnnonceMenu';
import image from './image';
import carburant from './carburant';

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  items: [dashboard, pages, Moteur, modele, categorie, pays, couleur, marque,image,AnnonceMenu, carburant]
};

export default menuItems;
