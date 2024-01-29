import React, { useEffect, useState } from 'react';
import config from '../../../../config';
import axios from 'axios';
import {
  Button,
  Card,
  FormControl,
  Grid,
  IconButton,
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
  TextField,
  Typography
} from '@mui/material';
import { maxWidth } from '@mui/system';
import { useTheme, styled } from '@mui/material/styles';
import MainCard from 'ui-component/cards/MainCard';
import { IconPencil, IconTrash } from '@tabler/icons';
import TablePagination from '@mui/material/TablePagination';
import ErrorAlert from "../../../../ui-component/alert/ErrorAlert";

const InsertModele = () => {
  const link = `${config.http}://${config.host}`;
  const [inserted, setInserted] = useState(0);
  const theme = useTheme();

  // ito ihany no ovaina
  const [modele, setModele] = useState([]);
  const [marque, setMarque] = useState([]);
  //pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const indexOfLastRow = (page + 1) * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = modele.slice(page * rowsPerPage, (page + 1) * rowsPerPage);
  const [error, setError] = useState(null);

  //

  const [formData, setFormData] = useState({
    nom_modele: '',

    id_marque: ''
  });

  // donnees de connexion + token
  const [userToken, setUserToken] = useState({});
  useEffect(() => {
    setUserToken(JSON.parse(localStorage.getItem('adminUserCarSell')));
  }, []);

  // data momba ny token et tout
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${userToken.token}`
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const config = {
        headers: headers
      };
      const resp = await axios.post(link + '/modele', formData,config);
      setInserted(inserted + 1);
    } catch (e) {
      if (e.isAxiosError) {
        if (e.code === 'ERR_NETWORK') {
          setError('une erreur est survenue');
        }
      } else {
        // Non-Axios error
        console.error('Non-Axios Error:', err.message);
        setError('une erreur est survenue');

      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fo = await axios.get(link + '/modele');
        const mar = await axios.get(link + '/marque');

        setModele(fo.data.donnee);
        setMarque(mar.data.donnee);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [inserted]);

  const CardWrapper = styled(MainCard)(({ theme }) => ({
    position: 'relative',
    width: '100%',
    margin: '0',
    border: 'none',
    borderBottomRightRadius: 0,
    height: '75px',
    '&:hover': {
      // Aucun style de survol
      backgroundColor: 'transparent',
      boxShadow: 'none'
      // ... autres styles de survol que vous souhaitez désactiver
    },

    '&:after': {
      content: '""',
      position: 'absolute',
      width: 210,
      height: 140,
      background: `linear-gradient(210.04deg, ${theme.palette.secondary.dark} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
      borderRadius: '50%',
      top: -30,
      right: -180
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      width: 210,
      height: 210,
      background: `linear-gradient(140.9deg, ${theme.palette.secondary.dark} -14.02%, rgba(144, 202, 249, 0) 70.50%)`,
      borderRadius: '50%',
      top: -160,
      right: -130
    }
  }));

  const CardWrapperwarning = styled(MainCard)(({ theme }) => ({
    position: 'relative',
    width: '100%',
    margin: '0',
    border: 'none',
    borderBottomRightRadius: 0,
    height: '75px',
    '&:hover': {
      // Aucun style de survol
      backgroundColor: 'transparent',
      boxShadow: 'none'
      // ... autres styles de survol que vous souhaitez désactiver
    },

    '&:after': {
      content: '""',
      position: 'absolute',
      width: 210,
      height: 140,
      background: `linear-gradient(210.04deg, ${theme.palette.warning.dark} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
      borderRadius: '50%',
      top: -30,
      right: -180
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      width: 210,
      height: 210,
      background: `linear-gradient(140.9deg, ${theme.palette.warning.dark} -14.02%, rgba(144, 202, 249, 0) 70.50%)`,
      borderRadius: '50%',
      top: -160,
      right: -130
    }
  }));

  const OverflowContainer = styled('div')({
    position: 'absolute',
    top: 0,
    right: 0
    // ... autres styles ...
  });

  //////////fonction pour la table//////////////////////
  const handledelete = async (id) => {
    const resp = await axios.put(link + `/modele/updateEtat/${id}`);
    setInserted(inserted+1);
  };
  //////////////////////////////////////////////////////
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={5} m={0}>
        <Card
          elevation={1}
          style={{
            maxWidth: '100%',
            display: 'flex',
            margin: '2% auto',
            flexDirection: 'column',
            // alignItems: 'center',
            paddingBottom: '2%'
          }}
        >
          <CardWrapper>
            <Typography variant="h4" color={theme.palette.grey.A700}>
              Inserer un nouveau modele
            </Typography>
          </CardWrapper>
          <form className="">
            <TextField
              id="standard-basic"
              label="Modele"
              variant="standard"
              style={{ flexGrow: 1, width: '80%', margin: '3% 10%' }}
              fullWidth
              name="nom_modele"
              onChange={(e) => setFormData({ ...formData, nom_modele: e.target.value })}
              required
            />

            <FormControl variant="standard" sx={{ m: 1, minWidth: 170 }} style={{ flexGrow: 1, width: '80%', margin: '3% 10%' }}>
              <InputLabel id="demo-simple-select-label">Marque</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="marque"
                style={{ marginTop: '20px' }}
                onChange={(e) => setFormData({ ...formData, id_marque: e.target.value })}
              >
                {marque.map((f) => (
                  <MenuItem key={f.id_marque} value={f.id_marque}>
                    {f.nom_marque} {f.id_marque}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <div style={{margin:"0 10%"}}>
              {error && <ErrorAlert message={error } ></ErrorAlert>}

            </div>
            <div>
              <Button
                variant="contained"
                type="submit"
                onClick={handleSubmit}
                style={{ margin: '3% 10%', backgroundColor: theme.palette.primary.dark }}
              >
                Ajouter modele
              </Button>
            </div>
          </form>
        </Card>
      </Grid>
      <Grid item xs={12} sm={7}>
        <Paper
          elevation={1}
          style={{
            maxWidth: '100%',
            height: '48rem',
            display: 'flex',
            margin: '2% auto',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <CardWrapperwarning>
            <Typography variant="h4" color={theme.palette.grey.A700}>
              Liste des Models
            </Typography>
          </CardWrapperwarning>
          <TableContainer sx={{ maxHeight: '80%', minHeight: '59%', margin: '3% 3%' }}>
            <Table style={{ margin: '2%', width: '95%' }} stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell style={{ backgroundColor: theme.palette.secondary.light }} align={'center'}>
                    Modele
                  </TableCell>
                  <TableCell style={{ backgroundColor: theme.palette.secondary.light }} align={'center'}>
                    Marque
                  </TableCell>
                  <TableCell style={{ backgroundColor: theme.palette.secondary.light }} align={'center'}></TableCell>
                  <TableCell style={{ backgroundColor: theme.palette.secondary.light }} align={'center'}></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {currentRows?.map((f) => (
                  <TableRow key={f.id}>
                    <TableCell align={'center'} className=" align-middle ">
                      {f.nom_modele}
                    </TableCell>
                    <TableCell align={'center'} className="">
                      {f.marque.nom_marque}
                    </TableCell>
                    <TableCell align={'center'} width={'10%'}>
                      <IconButton aria-label="delete" style={{ color: theme.palette.warning.dark }} onClick={() => handledelete(f.id_modele)}>
                        <IconTrash fontSize="small" />
                      </IconButton>
                    </TableCell>
                    <TableCell align={'center'} width={'10%'}>
                      <IconButton aria-label="modify" style={{ color: theme.palette.secondary.dark }}>
                        <IconPencil fontSize="small" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            style={{ marginTop: '8%' }}
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={modele.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={(event, newPage) => setPage(newPage)}
            onRowsPerPageChange={(event) => {
              setRowsPerPage(parseInt(event.target.value, 10));
              setPage(0);
            }}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default InsertModele;
