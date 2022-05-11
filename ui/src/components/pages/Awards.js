import React, { useEffect, useState } from 'react';
import {
  Box,
  Grid,
  Typography,
} from '@mui/material';
import { useApi } from '../../contexts/ApiContext';

function Awards() {
  const { apiURL, apiAwards, getAwards } = useApi();

  useEffect(()=>{
    //getAwards()
  }, [])

  return (
    <Box>
      <Typography variant='h1'>
      Awards
      </Typography>
      <Grid container rowSpacing={2}>


      </Grid>
    </Box>
    
  )
}

export default Awards;