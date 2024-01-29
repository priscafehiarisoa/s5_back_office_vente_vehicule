// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
  IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: 'Carburant',
  type: 'group',
  children: [
    {
      id: 'carburant',
      title: 'Carburant',
      type: 'collapse',
      icon: icons.IconKey,

      children: [
        {
          id: 'InsertCarburant',
          title: 'Ajouter un carburant',
          type: 'item',
          url: '/InsertCarburant',
          target: true
        }

      ]
    }
  ]
};

export default pages;
