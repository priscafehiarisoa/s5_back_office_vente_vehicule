import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Button, CardActions, CardContent, Divider, Grid, Menu, MenuItem, Typography } from '@mui/material';

// project imports
import BajajAreaChartCard from './BajajAreaChartCard';
import MainCard from '../../../ui-component/cards/MainCard';
import SkeletonPopularCard from '../../../ui-component/cards/Skeleton/PopularCard';
import { gridSpacing } from '../../../store/constant';

// assets
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import axios from 'axios';
import config from '../../../config';
import {IconArrowAutofitDown} from "@tabler/icons";

// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

const TopNMarques = ({ isLoading }) => {
  const theme = useTheme();
  const [nombre, setNombre] = useState(10);
  const link = `${config.http}://${config.host}`;
  const [anchorEl, setAnchorEl] = useState(null);
  const [topMarque, setTopMarque] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(link + '/statistiques/classementMarqueVendues', { pages: nombre });
        setTopMarque(response.data.donnee);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [nombre]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {isLoading ? (
        <SkeletonPopularCard />
      ) : (
        <MainCard content={false}>
          <CardContent>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12}>
                <Grid container spacing={2} alignContent="center" justifyContent="space-between">
                  <Grid item xs={10}>
                    <Typography variant="h4">Top {nombre} des Marques les plus vendues</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <IconArrowAutofitDown
                      fontSize="small"
                      sx={{
                        color: theme.palette.primary[200],
                        cursor: 'pointer'
                      }}
                      aria-controls="menu-popular-card"
                      aria-haspopup="true"
                      onClick={handleClick}
                    />
                    <Menu
                      id="menu-popular-card"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                      variant="selectedMenu"
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right'
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                      }}
                    >
                      <MenuItem onClick={() => setNombre(5)}> top 5</MenuItem>
                      <MenuItem onClick={() => setNombre(10)}> top 10</MenuItem>
                      <MenuItem onClick={() => setNombre(20)}> top 20 </MenuItem>
                    </Menu>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                {topMarque?.map((topN, index) => (
                  <div key={index}>
                    <Grid container direction="column">
                      <Grid item>
                        <Grid container alignItems="center" justifyContent="space-between">
                          <Grid item>
                            <Typography variant="subtitle1" color="inherit">
                              {topN.marque.nom_marque}
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Grid container alignItems="center" justifyContent="space-between">
                              <Grid item>
                                <Typography variant="subtitle1" color="inherit">
                                  {topN.nombre}
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Avatar
                                  variant="rounded"
                                  sx={{
                                    width: 16,
                                    height: 16,
                                    borderRadius: '5px',
                                    backgroundColor: theme.palette.success.light,
                                    color: theme.palette.success.dark,
                                    ml: 2
                                  }}
                                >
                                  <KeyboardArrowUpOutlinedIcon fontSize="small" color="inherit" />
                                </Avatar>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Divider sx={{ my: 1.5 }} />
                  </div>
                ))}
              </Grid>
            </Grid>
          </CardContent>
        </MainCard>
      )}
    </>
  );
};

TopNMarques.propTypes = {
  isLoading: PropTypes.bool
};

export default TopNMarques;
