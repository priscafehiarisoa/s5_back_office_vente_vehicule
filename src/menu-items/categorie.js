// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
  IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: 'Categorie',
  type: 'group',
  children: [
    {
      id: 'categorie',
      title: 'Categorie',
      type: 'collapse',
      icon: icons.IconKey,

      children: [
        {
          id: 'InsertCategorie',
          title: 'Ajouter une categorie',
          type: 'item',
          url: '/InsertCategorie',
          target: true
        }

      ]
    }
  ]
};

export default pages;
