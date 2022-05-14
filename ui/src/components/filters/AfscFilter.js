import { useApi } from '../../contexts/ApiContext';

import React from 'react';
import axios from 'axios';
import {
  Grid,
  TextField,
  Autocomplete,
  Typography,
} from '@mui/material';

function AfscFilter() {
  const { afscs, getAfscs, apiUser, apiUrl, filterAwards } = useApi();
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState(['']);
  const [inputValue, setInputValue] = React.useState('');
  const [selected, setSelected] = React.useState([]);
  const error = selected.length === 5 && inputValue.length > 0;

  React.useEffect(() => {
    getAfscs();
  }, []);

  React.useEffect(() => {
    if (apiUser) {
      axios.get(`${apiUrl}/afscs/${apiUser.afsc_id}`)
        .then((data)=>{
          setSelected(data.data);
        })
    }
  }, [apiUser]);

  React.useEffect(() => {
    setOptions(afscs);
  }, [afscs]);

  React.useEffect(() => {
    filterAwards({afscFilter: selected});
  }, [selected])

  const handleInputChange = (event, newInputValue) => {
    setInputValue(newInputValue);
    if (newInputValue.length > 0) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }

  return (
    <Grid container justifyContent='center'>
      {error &&
        <Grid item>
          <Typography variant='caption' color='error'>
            Maximum allowed AFSC's selected.
          </Typography>
        </Grid>
      }
      <Grid item>
        <Autocomplete
          multiple
          open={open}
          value={selected}
          onChange={(event, newValue) => setSelected(newValue)}
          inputValue={inputValue}
          onInputChange={handleInputChange}
          renderInput={(params) => (
            <TextField {...params} error={error} label="Filter by AFSC" />
          )}
          options={options}
          getOptionLabel={x => `${x?.code} - ${x?.title}`}
          isOptionEqualToValue={(option, value) => option.code === value.code}
          getOptionDisabled={() => (selected.length < 5 ? false : true)}
          disablePortal={false}
          sx={{ width: 280, m: 1}}
        />
      </Grid>
    </Grid>
  )
}

export default AfscFilter;
