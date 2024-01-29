import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import EarningCard from './EarningCard';
import TopNMarques from './TopNMarques';
import TotalOrderLineChartCard from './CommissionParMoisEtAnnee';
import TotalIncomeDarkCard from './TotalIncomeDarkCard';
import TotalIncomeLightCard from './TotalIncomeLightCard';
import VenteParMoisEtAnneeChart from './VenteParMoisEtAnneeChart';
import { gridSpacing } from '../../../store/constant';
import CommissionParMoisEtAnnee from "./CommissionParMoisEtAnnee";
import VenteParMarqueChart from "./VenteParMarqueChart";
import TopNCategories from "./TopNCategories";

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
console.log("tsy mety ")
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <EarningCard isLoading={isLoading} />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <CommissionParMoisEtAnnee isLoading={isLoading} />
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <TotalIncomeDarkCard isLoading={isLoading} />
              </Grid>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <TotalIncomeLightCard isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={8}>
            <VenteParMoisEtAnneeChart isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} md={4}>
            <TopNMarques isLoading={isLoading} />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={8}>
            <VenteParMarqueChart isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} md={4}>
            <TopNCategories isLoading={isLoading} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
