import React, { useEffect, useState } from 'react';
import config from '../../../../config';
import axios from 'axios';
import {
  Button,
  Card,
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Dialog, DialogTitle, DialogContent, DialogActions
} from '@mui/material';
import { maxWidth } from '@mui/system';
import { useTheme, styled } from '@mui/material/styles';
import MainCard from 'ui-component/cards/MainCard';
import { IconPencil, IconTrash } from '@tabler/icons';
import TablePagination from '@mui/material/TablePagination';

const InsertCategorie = () => {
  const link = `${config.http}://${config.host}`;
  const [inserted, setInserted] = useState(0);
  const theme = useTheme();

  // ito ihany no ovaina
  const [categorie, setCategorie] = useState([]);

  //pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const indexOfLastRow = (page + 1) * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = categorie.slice(page * rowsPerPage, (page + 1) * rowsPerPage);

  //

  const [formData, setFormData] = useState({
    nom_categorie: ''
  });

  const handleSubmit = async () => {
    try {
      const resp = await axios.post(link + '/categorie', formData);
      setInserted(inserted + 1);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fo = await axios.get(link + '/categorie');
        setCategorie(fo.data.donnee);
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

  const handledelete = async (categoryId) => {
    const resp = await axios.put(link + `/categorie/updateEtat/${categoryId}`);
  setInserted(inserted+1);
  };
  //////////////////////////////////////////////////////
  const [editedCategoryName, setEditedCategoryName] = useState(null);
  const [editedCategoryValue, setEditedCategoryValue] = useState('');
  const [editedCategoryId, setEditedCategoryId] = useState(null);


  const [openDialog, setOpenDialog] = useState(false);
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleUpdate = async () => {
    try {
      await axios.put(`${link}/categorie/${editedCategoryId}`, { nom_categorie: editedCategoryValue });
      console.log(editedCategoryId);
      setInserted(inserted + 1);
      handleCloseDialog();
    } catch (error) {
      console.error('Error updating category:', error);
    }
  };

  const dialogContent = (
    <div>
      <TextField
        id="edit-category-name"
        label="Nom de la catégorie"
        variant="outlined"
        value={editedCategoryValue}
        onChange={(e) => setEditedCategoryValue(e.target.value)}
        fullWidth
        margin="normal"
      />
    </div>
  );

  const dialogActions = (
    <div>
      <Button onClick={handleCloseDialog} color="secondary">
        Annuler
      </Button>
      <Button onClick={handleUpdate} color="primary">
        Sauvegarder
      </Button>
    </div>
  );



  /////////////////////////////////
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
          <Dialog open={openDialog} onClose={handleCloseDialog}>
            <DialogTitle>Modifier la catégorie</DialogTitle>
            <DialogContent>{dialogContent}</DialogContent>
            <DialogActions>{dialogActions}</DialogActions>
          </Dialog>

          <CardWrapper>
            <Typography variant="h4" color={theme.palette.grey.A700}>
              Inserer une nouvelle categorie
            </Typography>
          </CardWrapper>
          <form className="">
            <TextField
              id="standard-basic"
              label="Categorie"
              variant="standard"
              style={{ flexGrow: 1, width: '80%', margin: '3% 10%' }}
              fullWidth
              name="nom_categorie"
              onChange={(e) => setFormData({ ...formData, nom_categorie: e.target.value })}
              required
            />

            <div>
              <Button
                variant="contained"
                type="submit"
                onClick={handleSubmit}
                style={{ margin: '3% 10%', backgroundColor: theme.palette.primary.dark }}
              >
                Ajouter categorie
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
              Liste des categories
            </Typography>
          </CardWrapperwarning>
          <TableContainer sx={{ maxHeight: '80%', minHeight: '59%', margin: '3% 3%' }}>
            <Table style={{ margin: '2%', width: '95%' }} stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell style={{ backgroundColor: theme.palette.secondary.light }} align={'center'}>
                    categorie
                  </TableCell>
                  <TableCell style={{ backgroundColor: theme.palette.secondary.light }} align={'center'}></TableCell>
                  <TableCell style={{ backgroundColor: theme.palette.secondary.light }} align={'center'}></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {currentRows?.map((f) => (
                  <TableRow key={f.id}>
                    <TableCell align={'center'} className=" align-middle ">
                      {f.nom_categorie}
                    </TableCell>
                    <TableCell align={'center'} width={'10%'}>
                      <IconButton aria-label="delete" style={{ color: theme.palette.warning.dark }} onClick={() => handledelete(f.id_categorie)}>
                        <IconTrash fontSize="small" />
                      </IconButton>
                    </TableCell>
                    <TableCell align={'center'} width={'10%'}>
                      <IconButton
                        aria-label="modify"
                        style={{ color: theme.palette.secondary.dark }}
                        onClick={() => {
                          setEditedCategoryId(f.id_categorie);
                          setEditedCategoryValue(f.nom_categorie);
                          handleOpenDialog();
                        }}
                      >
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
            count={categorie.length}
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

export default InsertCategorie;
