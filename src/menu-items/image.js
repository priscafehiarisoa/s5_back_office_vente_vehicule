// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
  IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: 'Image',
  type: 'group',
  children: [
    {
      id: 'image',
      title: 'Image',
      type: 'collapse',
      icon: icons.IconKey,

      children: [
        {
          id: 'InsertPays',
          title: 'Ajouter image',
          type: 'item',
          url: '/InsertImage',
          target: true
        }

      ]
    }
  ]
};

export default pages;
