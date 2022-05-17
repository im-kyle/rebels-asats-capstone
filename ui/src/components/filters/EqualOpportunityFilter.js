import { useApi } from '../../contexts/ApiContext';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Grid,
  TextField,
  Autocomplete,
  Typography,
  Switch,
  FormControlLabel,
  FormGroup
} from '@mui/material';

function EqualOpportunityFilter() {
  const [active, setActive] = useState(false);

  const handleSwitch = () => {
    setActive(true)
  }

  return (
    <Grid container justifyContent='center'>
      <Grid item>
      <FormGroup>
        <FormControlLabel control={<Switch onClick={handleSwitch}/>} label="View Equal Opportunity Awards" />
      </FormGroup>
      </Grid>
    </Grid>
  )
}

export default EqualOpportunityFilter;
