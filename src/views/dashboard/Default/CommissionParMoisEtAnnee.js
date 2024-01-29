import PropTypes from 'prop-types';
import {useEffect, useState} from 'react';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import {
  Avatar,
  Box,
  Button,
  FormControl,
  getTableSortLabelUtilityClass,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography
} from '@mui/material';

// third-party
import Chart from 'react-apexcharts';

// project imports
import MainCard from '../../../ui-component/cards/MainCard';
import SkeletonTotalOrderCard from '../../../ui-component/cards/Skeleton/EarningCard';

import ChartDataMonth from './chart-data/total-order-month-line-chart';
import ChartDataYear from './chart-data/total-order-year-line-chart';

// assets
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {Input} from "@mui/base";
import axios from "axios";
import config from "../../../config";

const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: '#fff',
  overflow: 'hidden',
  position: 'relative',
  '&>div': {
    position: 'relative',
    zIndex: 5
  },
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: theme.palette.primary[800],
    borderRadius: '50%',
    zIndex: 1,
    top: -85,
    right: -95,
    [theme.breakpoints.down('sm')]: {
      top: -105,
      right: -140
    }
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    zIndex: 1,
    width: 210,
    height: 210,
    background: theme.palette.primary[800],
    borderRadius: '50%',
    top: -125,
    right: -15,
    opacity: 0.5,
    [theme.breakpoints.down('sm')]: {
      top: -155,
      right: -70
    }
  }
}));

// ==============================|| DASHBOARD - TOTAL ORDER LINE CHART CARD ||============================== //

const CommissionParMoisEtAnnee = ({ isLoading }) => {
  const theme = useTheme();

  const [timeValue, setTimeValue] = useState(false);
  const handleChangeTime = (event, newValue) => {
    setTimeValue(newValue);
  };

  const mois = [
    {
      id: 1,
      mois: 'Janvier'
    },
    {
      id: 2,
      mois: 'Février'
    },
    {
      id: 3,
      mois: 'Mars'
    },
    {
      id: 4,
      mois: 'Avril'
    },
    {
      id: 5,
      mois: 'Mai'
    },
    {
      id: 6,
      mois: 'Juin'
    },
    {
      id: 7,
      mois: 'Juillet'
    },
    {
      id: 8,
      mois: 'Aout'
    },
    {
      id: 9,
      mois: 'Septembre'
    },
    {
      id: 10,
      mois: 'Octobre'
    },
    {
      id: 11,
      mois: 'Novembre'
    },
    {
      id: 12,
      mois: 'Décembre'
    }
  ];

  const [years, setYears] = useState([]);
  const [selectedYears,setSelectedyears]=useState(new Date().getFullYear())
  const [selectedMonth,setSelectedMonth]=useState(new Date().getMonth() +1)

  useEffect(() => {
    const generateYears = () => {
      const currentYear = new Date().getFullYear();
      const startYear = 1960;
      const yearsArray = [];
      for (let year = startYear; year <= currentYear; year++) {
        yearsArray.push(year);
      }
      return yearsArray;
    };

    setYears(generateYears());
  }, []);
  const link = `${config.http}://${config.host}`;

  const [totalCommission,setTotalCommission]=useState(0)
  console.log(selectedYears+" "+selectedMonth)
  useEffect(() => {
    const getCommissions = async ()=>{
      const json={mois:
        selectedMonth,
        annee:selectedYears
      }
      const result = await axios.post(link+"/statistiques/totalCommissionMoisAnnee",json)
      setTotalCommission(result.data.donnee)
      console.log("ty "+result.data.donnee)
    }
    getCommissions()
  }, [selectedMonth,selectedYears]);
  return (
    <>
      {isLoading ? (
        <SkeletonTotalOrderCard />
      ) : (
        <CardWrapper border={false} content={false}>
          <Box sx={{ p: 2.25 }}>
            <Grid container direction="column">
              <Grid item>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Avatar
                      variant="rounded"
                      sx={{
                        ...theme.typography.commonAvatar,
                        ...theme.typography.largeAvatar,
                        backgroundColor: theme.palette.primary[800],
                        color: '#fff',
                        mt: 1
                      }}
                    >
                      <LocalMallOutlinedIcon fontSize="inherit" />
                    </Avatar>
                  </Grid>
                  <Grid item>
                    {/*marque du vehicule*/}
                    <FormControl style={{ width: '120px', margin: ' 3% 2%' }}>
                      <InputLabel id="demo-simple-select-label">Années :</InputLabel>
                      <Select
                          style={
                            {background:theme.palette.primary.light}
                          }
                        label={'Années'}
                          onChange={(e) => setSelectedyears( e.target.value )}
                      >
                        {years?.map((marq, index) => (
                          <MenuItem key={index} value={marq}>
                            {marq}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item>

                    <FormControl style={{ width: '120px', margin: ' 3% 2%' }}>
                      <InputLabel id="demo-simple-select-label">Mois :</InputLabel>
                      <Select
                          style={
                            {background: theme.palette.background.default}
                          }
                          label={'Mois'}
                          onChange={(e) => setSelectedMonth( e.target.value )}
                      >
                        {mois?.map((marq, index) => (
                            <MenuItem key={index} value={marq.id}>
                              {marq.mois}
                            </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ mb: 0.75 }}>
                <Grid container alignItems="center">
                  <Grid item xs={6}>
                    <Grid container alignItems="center">
                      <Grid item>
                          <Typography sx={{ fontSize: '2.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>Ar {totalCommission}</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography
                          sx={{
                            fontSize: '1rem',
                            fontWeight: 500,
                            color: theme.palette.primary[200]
                          }}
                        >
                          Commissions par mois et par année
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>

                </Grid>
              </Grid>
            </Grid>
          </Box>
        </CardWrapper>
      )}
    </>
  );
};

CommissionParMoisEtAnnee.propTypes = {
  isLoading: PropTypes.bool
};

export default CommissionParMoisEtAnnee;
