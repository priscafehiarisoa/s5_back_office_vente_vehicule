// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
  IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: 'Marque',
  type: 'group',
  children: [
    {
      id: 'marque',
      title: 'Marque',
      type: 'collapse',
      icon: icons.IconKey,

      children: [
        {
          id: 'InsertMarque',
          title: 'Ajouter une marque',
          type: 'item',
          url: '/InsertMarque',
          target: true
        }

      ]
    }
  ]
};

export default pages;
