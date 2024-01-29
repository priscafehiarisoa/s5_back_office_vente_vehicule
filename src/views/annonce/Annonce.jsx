// src/components/CarList.js
import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  IconButton,
  Avatar,
  CardActionArea,
  capitalize,
  Grid,
} from '@mui/material';
import { IconClipboardHeart, IconHeart, IconHeartOff, IconHeartPlus, IconInfoCircle, IconTrash } from '@tabler/icons';
import { useTheme } from '@mui/material/styles';
import config from '../../config';
import axios from 'axios';
import DetailAnnonce from './DetailAnnonce';
import StatutsAnnonce from '../../ui-component/annonce/StatutsAnnonce';

const Annonce = () => {
  const theme = useTheme();
  const link = `${config.http}://${config.host}`;

  const carData = [
    {
      id: 1,
      marque: 'Toyota',
      modele: 'Camry',
      annee: 2022,
      prix: 25000,
      image: '/images/1-porsche-911-gt3-2021-rt-hero-front.jpg',
      description: 'lorem ipsum car 1',
      date: '2023-07-01 07:00',
      utilisateur: {
        nom: 'vali',
        prenom: 'judith'
      }
    },
    {
      id: 2,
      marque: 'Honda',
      modele: 'Civic',
      annee: 2021,
      prix: 22000,
      date: '2024-07-01 08:00',
      image: '/images/1-porsche-911-gt3-2021-rt-hero-front.jpg',
      description: 'lorem ipsum car 2',
      utilisateur: {
        nom: 'prisca',
        prenom: 'fehiarisoa'
      }
    }
  ];

  const [image, setImage] = useState('/images/1-porsche-911-gt3-2021-rt-hero-front.jpg');
  const [inserted, setInserted] = useState(0);

  const [annonces, setAnnonces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(link + '/annonce/getAnnoncesEnCoursDeValidation');
      setAnnonces(response.data.donnee);
    };
    fetchData();
  }, []);
  const handleDetails = () => {
    console.log('lol');
  };
  const getFirstLetterFromName = (nom) => {
    return capitalize(nom.charAt(0));
  };

  function handleFavoriteClick(id) {
    console.log(id);
  }

  const handlevalider = async (id) => {
    const resp = await axios.put(link + `/annonce/validateAnnonce/${id}`);
    setInserted(inserted+1);
  };
  return (
    <>
      <Grid container spacing={3}>
        {annonces?.map((cars, index) => (
            <Card
                key={index}
                sx={{ position: 'relative', maxWidth: { xs: '100%', sm: '30%' }, bgcolor: '#ffffff', margin: '2%' }}
                m={5}
                elevation={1}
            >
              <div id="user" style={{ display: 'flex', padding: '5px', marginTop: '5px' ,position:'relative'}}>

                <Avatar
                    sx={{
                      bgcolor: theme.palette.secondary.light,
                      color: theme.palette.secondary.dark,
                      fontSize: '1rem',
                      width: '30px',
                      height: '30px'
                    }}
                    aria-label="recipe"
                >
                  {getFirstLetterFromName(cars.utilisateur.prenom)}
                </Avatar>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '16px', width: '100%' }}>
                  <Typography variant="subtitle1" component="div">
                    {cars.utilisateur.prenom}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    {cars.date_annonce}
                  </Typography>

                </div>
              </div>

              <div style={{ position: 'relative' }}>



                {/* Image */}
                <CardActionArea href="https://google.com">
                  <CardMedia component="img" image={require(`../../assets${image}`)} alt="image vehicule" />
                </CardActionArea>


                {/* Heart icon */}
                <IconButton
                    aria-label="add to favorites"
                    title="ajouter aux favoris"
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      color: cars.inFavorites ? '#fff' : '#fff',
                      // backgroundColor: cars.inFavorites ? '#fff' : 'none', // Ajoutez cette ligne pour définir la couleur de fond sur blanc
                      borderRadius: '50%',
                      fontWeight: "bolder",
                    }}
                    onClick={() => handleFavoriteClick(cars.id_annonce)} // Replace with your click handling function
                >
                  <IconHeart enableBackground="new 0 0 24 24" style={{
                    width: 25,
                    height: 25,
                    // backgroundColor:'red',
                    borderRadius:300,
                    strokeWidth: 2,
                    fill:cars.inFavorites ? '#fff':'none',
                  }}/>
                  <span style={{fontSize:12}}>9</span>

                </IconButton><IconButton
                  aria-label="add to favorites"
                  title="ajouter aux favoris"
                  style={{
                    position: 'absolute',
                    bottom: 10,
                    right: '10%',
                  }}
              >
                <StatutsAnnonce etat={cars.etat}  style={{
                  marginRight:'10%',
                  marginBottom:'20%',
                  left: 100}}></StatutsAnnonce>

              </IconButton>


              </div>

              <CardContent margin>
                <Grid container spacing={2}>
                  <Grid item xs={8}>
                    <Typography fontSize={'20px'} color={theme.palette.grey.dark} align="left">
                      {cars.vehicule.modele.marque.nom_marque} , {cars.vehicule.modele.nom_modele} , {cars.vehicule.annee_fabrication}
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography fontSize={'18px'} color={theme.palette.primary.dark} align="right">
                      {cars.prixVehiculeAvecCommission} Ar
                    </Typography>
                  </Grid>
                </Grid>
                <IconButton aria-label="delete" style={{ color: theme.palette.warning.dark }} onClick={() => handlevalider(cars.id_annonce)}>
                  <IconTrash fontSize="small" />
                </IconButton>
              </CardContent>
            </Card>
        ))}
      </Grid>
    </>
  );
};

export default Annonce;
