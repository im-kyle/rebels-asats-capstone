import { useApi } from '../../contexts/ApiContext';
import React, { useState, useEffect } from 'react';
import {
  Typography,
  Grid
} from '@mui/material';

function PackagesReviewFilter() {
  const { packages, apiUser, apiUrl, filterAwards } = useApi();

  React.useEffect(() => {
    console.log('packages review filter')
  }, []);

  return (
    <Grid sx={{ width: 280, m: 1}}>

      <Grid item>
        <Typography variant='caption'>
          Mentee Packages For Review
        </Typography>
      </Grid>

    </Grid>
  )
}

export default PackagesReviewFilter;