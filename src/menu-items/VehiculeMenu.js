import { IconCar } from '@tabler/icons';

const icons = { IconCar };

const VehiculeMenu = {
  id: 'pages',
  title: 'Gestion Des Vehicules',
  type: 'group',
  children: [
    {
      id: 'vehicule',
      title: 'vehicule',
      type: 'collapse',
      icon: icons.IconCar,

      children: [
        {
          id: 'InsertCouleur',
          title: 'Ajouter une couleur',
          type: 'item',
          url: '/InsertCouleur',
        },
        {
          id: 'InsertPays',
          title: 'Ajouter un Pays',
          type: 'item',
          url: '/InsertPays',
        },
        {
          id: 'InsertMoteur',
          title: 'Ajouter un moteur',
          type: 'item',
          url: '/Insertmoteur',
        },
        {
          id: 'InsertModele',
          title: 'Ajouter un Modele',
          type: 'item',
          url: '/Insertmodele',
        },
        {
          id: 'InsertMarque',
          title: 'Ajouter une marque',
          type: 'item',
          url: '/InsertMarque',
        },
        {
          id: 'InsertCategorie',
          title: 'Ajouter une categorie',
          type: 'item',
          url: '/InsertCategorie',
        }
      ]
    }
  ]
};
export default VehiculeMenu;
