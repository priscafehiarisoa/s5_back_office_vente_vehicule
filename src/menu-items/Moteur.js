// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
  IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: 'Moteur',
  type: 'group',
  children: [
    {
      id: 'moteur',
      title: 'Moteur',
      type: 'collapse',
      icon: icons.IconKey,

      children: [
        {
          id: 'InsertMoteur',
          title: 'Ajouter un moteur',
          type: 'item',
          url: '/Insertmoteur',
          target: true
        }

      ]
    }
  ]
};

export default pages;
