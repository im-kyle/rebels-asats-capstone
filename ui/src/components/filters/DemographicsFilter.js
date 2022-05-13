import React, { useState } from 'react';
import { useApi } from '../../contexts/ApiContext';
import {
  Typography,
  IconButton,
  Grid,
  TextField,
  Autocomplete
} from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

function DemographicsFilter() {
  const { demographics, getDemographics } = useApi();
  const [ options, setOptions ] = useState(['']);

  
  React.useEffect(() => {
    getDemographics();
  }, [])
  
  let optionsArray = [];

  React.useEffect(() => {
    const demographicOptions = demographics.map(x => `${x.id}`)
    optionsArray.push(demographicOptions);
  }, [demographics])

  React.useEffect(() => {
      optionsArray.map((option) => {
      console.log('original option', option);
      if(option[0] === '1') {
        option[0] = 'Hispanic'
      }
      if(option[1] === '2') {
        option[1] = 'Asian/Pacific American'
      }
      if(option[2] === '3') {
        option[2] = 'African American'
      }
      if(option[3] === '4') {
        option[3] = 'Female'
      }
      return optionsArray;
    })
    optionsArray.forEach((option) => console.log('converted:', option))
  }, [optionsArray])

  return (
    <React.Fragment>
      <Grid container direction="row" alignItems="center" justifyContent='center' sx={{m: 1, p: 1}}>
        <Grid item>
          <IconButton>
            <CancelIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <Typography variant='h5'>
            Demographic
          </Typography>
        </Grid>
      </Grid>
      </React.Fragment>
  )
};
  


export default DemographicsFilter;