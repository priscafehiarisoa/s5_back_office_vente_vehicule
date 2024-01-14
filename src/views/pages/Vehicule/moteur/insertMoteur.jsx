import React, { useEffect, useState } from 'react';
import config from '../../../../config';
import axios from 'axios';
import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';

const InsertMoteur = () => {
  const link = `${config.http}://${config.host}:${config.port}`;

  const [moteur, setMoteur] = useState([]);

  const [formData, setFormData] = useState({
    nom_moteur: '',
    puissance: ''
  });

  const handleSubmit = async () => {
    console.log(formData);
    try {
      const resp = await axios.post(link + '/moteur', formData);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fo = await axios.get(link + '/moteur');
        setMoteur(fo.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  //////////fonction pour la table//////////////////////

  //////////////////////////////////////////////////////
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} sm={3} m={0}>
        <Paper
          elevation={3}
          style={{
            padding: '3% 3% 3%',
            maxWidth: '100%',
            display: 'flex',
            margin: '2% auto',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <form className="">
            <TextField
              id="standard-basic"
              label="Moteur"
              variant="standard"
              name="nom_moteur"
              onChange={(e) => setFormData({ ...formData, nom_moteur: e.target.value })}
              required
            />

            <TextField
              id="standard-basic"
              label="Puissance"
              variant="standard"
              name="puissance"
              style={{ marginTop:"20px"}}
              onChange={(e) => setFormData({ ...formData, puissance: e.target.value })}
              required
            />
            <div>
              <Button variant="contained" type="submit" onClick={handleSubmit} style={{ marginTop:"20px"}} >
                Ajouter moteur
              </Button>
            </div>
          </form>
        </Paper>
      </Grid>
      <Grid item xs={6} md={4}>
        <Paper
          elevation={3}
          style={{
            padding: '3% 3% 3%',
            maxWidth: '100%',
            display: 'flex',
            margin: '2% auto',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>Moteur</TableCell>
                  <TableCell>puissance</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {moteur.map((f) => (
                  <TableRow key={f.id}>
                    <TableCell className=" align-middle ">{f.nom_moteur}</TableCell>
                    <TableCell className="">{f.puissance}</TableCell>
                    <TableCell>
                      <Button
                        className="bg-indigo-500 text-white active:bg-indigo-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Modifier
                      </Button>

                      <Button
                        className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        style={{
                          color:'errorDark'
                        }}
                      >
                        {' '}
                        Supprimer
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default InsertMoteur;
