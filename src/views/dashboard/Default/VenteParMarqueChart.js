import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import {capitalize, Grid, MenuItem, TextField, Typography} from '@mui/material';

// third-party
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';

// project imports
import SkeletonTotalGrowthBarChart from '../../../ui-component/cards/Skeleton/TotalGrowthBarChart';
import MainCard from '../../../ui-component/cards/MainCard';
import { gridSpacing } from '../../../store/constant';

import axios from "axios";
import config from "../../../config";





const VenteParMarqueChart = ({ isLoading }) => {
  const [years, setYears] = useState([]);

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
  const theme = useTheme();
  const customization = useSelector((state) => state.customization);


  const { navType } = customization;
  const { primary } = theme.palette.text;
  const darkLight = theme.palette.dark.light;
  const grey200 = theme.palette.grey[200];
  const grey500 = theme.palette.grey[500];

  const primary200 = theme.palette.primary[200];
  const primaryDark = theme.palette.primary.dark;
  const secondaryMain = theme.palette.secondary.main;
  const secondaryLight = theme.palette.secondary.light;

  const [donnee,setDonnee]=useState({})
  const [listMaque,setListMarque]=useState([])
  const [selectedYear,setSelectedYear]=useState(new Date().getFullYear())
  const [selectedMarque,setSelectedMarque]=useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const marques = await axios.get(link + '/marque');
        setListMarque(marques.data.donnee);
        setSelectedMarque(marques.data.donnee[0]?.id_marque || ""); // Set default marque
      } catch (e) {
        console.log(e);
      }
    };

    const fetchDonnee = async () => {
      try {
        const response = await axios.post(link + "/statistiques/statistiqueVenteParMarque", { marque: selectedMarque, annee: selectedYear });
        setDonnee(response.data.donnee);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
    fetchDonnee();
  }, [selectedYear, selectedMarque]);

  console.log("here "+JSON.stringify(donnee))
  const chartData = {
    height: 480,
    type: 'bar',
    options: {
      chart: {
        id: 'bar-chart',
        stacked: true,
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '50%'
        }
      },
      xaxis: {
        type: 'category',
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      legend: {
        show: true,
        fontSize: '14px',
        fontFamily: `'Roboto', sans-serif`,
        position: 'bottom',
        offsetX: 20,
        labels: {
          useSeriesColors: false
        },
        markers: {
          width: 16,
          height: 16,
          radius: 5
        },
        itemMargin: {
          horizontal: 15,
          vertical: 8
        }
      },
      fill: {
        type: 'solid'
      },
      dataLabels: {
        enabled: false
      },
      grid: {
        show: true
      }
    },
    series: [
      {
        name: 'Sales',
        data: donnee?.statistique?.map((item) => item.nombre) || []  // Ajout de vérifications de nullité
      }
    ]
  };


  useEffect(() => {
    const newChartData = {
      ...chartData.options,
      colors: [primary200, primaryDark, secondaryMain, secondaryLight],
      xaxis: {
        labels: {
          style: {
            colors: [primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary]
          }
        },

      },
      yaxis: {
        labels: {
          style: {
            colors: [primary]
          }
        }
      },
      grid: {
        borderColor: grey200
      },
      tooltip: {
        theme: 'light'
      },
      legend: {
        labels: {
          colors: grey500
        }
      }

    };

    // do not load chart when loading
    if (!isLoading) {
      ApexCharts.exec(`bar-chart`, 'updateOptions', newChartData);
    }
  }, [donnee, isLoading]);




  console.log("MNNMS "+JSON.stringify(selectedMarque))

  return (
    <>
      {isLoading ? (
        <SkeletonTotalGrowthBarChart />
      ) : (
        <MainCard>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
              <Grid container alignItems="center" justifyContent="space-between">
                <Grid item>
                  <Grid container direction="column" spacing={1}>
                    <Grid item>
                      <Typography variant="subtitle2">{donnee?donnee.title:""}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h3"></Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <TextField id="standard-select-currency" label={"année"} select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
                    {years.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item>
                  <TextField id="standard-select-currency" label={"marque"} select value={selectedMarque} onChange={(e) => setSelectedMarque(e.target.value)}>
                    {listMaque?.map((option) => (
                      <MenuItem key={option.id_marque} value={option.id_marque}>
                        {option.nom_marque}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Chart {...chartData} />
            </Grid>
          </Grid>
        </MainCard>
      )}
    </>
  );
};

VenteParMarqueChart.propTypes = {
  isLoading: PropTypes.bool
};

export default VenteParMarqueChart;
