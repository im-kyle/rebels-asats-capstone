import { useApi, packages } from '../../contexts/ApiContext'
import React, { useState, useEffect } from 'react';
import {
  Typography,
  Grid,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from '@mui/material';

const filterOptions = ['Completed', 'In Draft']

function MyPackagesFilter() {
  const { allPackages, getPackages, filterPackages } = useApi();
  const [selected, setSelected] = useState({
    completed: true,
    inDraft: true,
  });

  React.useEffect(() => {
    getPackages();
  }, []);

  React.useEffect(() => {
    filterPackages({completed: selected.completed, inDraft: selected.inDraft})
  }, [selected])

  const filterByComplete = () => {
    setSelected({...selected, completed: !selected.completed})
  }

  const filterByDraft = () => {
    setSelected({...selected, inDraft: !selected.inDraft})
  }

  return (
    <Grid sx={{ width: 280, m: 1}}>

    <Grid item>
      <Typography variant='caption'>
        Filter by Status
      </Typography>
    </Grid>
    <FormGroup>
      <FormControlLabel control={<Checkbox onChange={filterByComplete} checked={selected.completed} />} label="Completed" />
      <FormControlLabel control={<Checkbox onChange={filterByDraft} checked={selected.inDraft} />} label="In Draft" />
    </FormGroup>
    <Grid item>

    </Grid>

    </Grid>
  )
}

export default MyPackagesFilter;