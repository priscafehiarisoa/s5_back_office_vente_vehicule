// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
  IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: 'Pays',
  type: 'group',
  children: [
    {
      id: 'pays',
      title: 'Pays',
      type: 'collapse',
      icon: icons.IconKey,

      children: [
        {
          id: 'InsertPays',
          title: 'Ajouter un Pays',
          type: 'item',
          url: '/InsertPays',
          target: true
        }

      ]
    }
  ]
};

export default pages;
