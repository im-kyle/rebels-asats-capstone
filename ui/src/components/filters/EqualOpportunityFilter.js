import { useApi } from '../../contexts/ApiContext';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Grid,
  TextField,
  Autocomplete,
  Typography,
  Switch,
} from '@mui/material';

function EqualOpportunityFilter() {
  const { apiUrl, filterAwards } = useApi();
  const [active, setActive] = useState(false);

  React.useEffect(() => {
  }, []);

  React.useEffect(() => {
  }, []);

  const handleSwitch = () => {
    setActive(true)
  }

  return (
    <Grid container justifyContent='center'>
      <Grid item>
        <Switch
        onChange={handleSwitch}
        size="large"
        label="View Equal Opportunity Awards"
        />
      </Grid>
    </Grid>
  )
}

export default EqualOpportunityFilter;
