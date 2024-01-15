// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
  IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const modele = {
  id: 'pages',
  title: 'Modele',
  type: 'group',
  children: [
    {
      id: 'modele',
      title: 'Modele',
      type: 'collapse',
      icon: icons.IconKey,

      children: [
        {
          id: 'InsertModele',
          title: 'Ajouter un Modele',
          type: 'item',
          url: '/Insertmodele',
          target: true
        }
      ]
    }
  ]
};

export default modele;
