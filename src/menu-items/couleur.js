// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
  IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: 'Couleur',
  type: 'group',
  children: [
    {
      id: 'couleur',
      title: 'Couleur',
      type: 'collapse',
      icon: icons.IconKey,

      children: [
        {
          id: 'InsertCouleur',
          title: 'Ajouter une couleur',
          type: 'item',
          url: '/InsertCouleur',
          target: true
        }

      ]
    }
  ]
};

export default pages;
