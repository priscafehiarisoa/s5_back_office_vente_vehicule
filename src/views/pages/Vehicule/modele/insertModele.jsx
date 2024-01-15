import React, { useEffect, useState } from 'react';
import config from '../../../../config';
import axios from 'axios';
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField
} from '@mui/material';

const InsertMoteur = () => {
  const link = `${config.http}://${config.host}:${config.port}`;

  const [modele, setModele] = useState([]);
  const [marque, setMarque] = useState([]);

  const [formData, setFormData] = useState({
    nom_modele: '',
    marque: {
      id_marque: ''
    }
  });

  const handleSubmit = async () => {
    try {
      const resp = await axios.post(link + '/modele', formData);
    } catch (e) {
      console.log(e);
    }
  };
  console.log(formData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fo = await axios.get(link + '/modele');
        const mar = await axios.get(link + '/marque');
        setMarque(mar.data);
        setModele(fo.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    console.log('Deleting modele with id:', id);

    try {
      await axios.delete(`${link}/modele/${id}`);
      // Update the state after deletion
    } catch (e) {
      console.log(e);
    }
  };

  //////////fonction pour la table//////////////////////

  //////////////////////////////////////////////////////
  return (
    <>
      <h1>Insertion modele de vehicule</h1>
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
                label="Modele"
                variant="standard"
                name="nom_modele"
                onChange={(e) => setFormData({ ...formData, nom_modele: e.target.value })}
                required
              />
              <FormControl variant="standard" sx={{ m: 1, minWidth: 170 }}>
                <InputLabel id="demo-simple-select-label">Marque</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="marque"
                  style={{ marginTop: '20px' }}
                  onChange={(e) => setFormData({ ...formData, marque: { id_marque: e.target.value } })}
                >
                  {marque.map((f) => (
                    <MenuItem key={f.id_marque} value={f.id_marque}>
                      {f.nom_marque} {f.id_marque}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <div>
                <Button variant="contained" type="submit" onClick={handleSubmit} style={{ marginTop: '20px' }}>
                  Ajouter modele
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
                    <TableCell>Modele</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {modele.map((f) => (
                    <TableRow key={f.id_modele}>
                      <TableCell className=" align-middle ">{f.nom_modele}</TableCell>
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
                          onClick={() => handleDelete(f.id_modele)}
                          style={{
                            color: 'errorDark'
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
    </>
  );
};

export default InsertMoteur;
