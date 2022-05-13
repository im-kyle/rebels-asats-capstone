import { useApi } from '../../contexts/ApiContext';

import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export default function AfscFilter() {
  const { afscs, getAfscs, apiUser } = useApi();
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await getAfscs(); // For demo purposes.

      if (active) {
        setOptions([...afscs]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete
      id="asynchronous-demo"
      sx={{ width: 300 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option.code === value.code}
      getOptionLabel={(option) => `${option.code} - ${option.title}`}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Asynchronous"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}


// import { useApi } from '../../contexts/ApiContext';

// import React from 'react';
// import axios from 'axios';
// import {
//   Typography,
//   IconButton,
//   Grid,
//   TextField,
//   Autocomplete,
// } from '@mui/material';
// import CancelIcon from '@mui/icons-material/Cancel';

// function AfscFilter() {
//   const { afscs, getAfscs, apiUser } = useApi();
//   const [options, setOptions] = React.useState(['']);
//   const [value, setValue] = React.useState(options[0]);
//   const [inputValue, setInputValue] = React.useState('');
//   const [selected, setSelected] = React.useState([]);

//   React.useEffect(() => {
//     getAfscs();
//   }, []);

// React.useEffect(() => {
//   const afscDisplay = afscs.map(x => `${x.code} - ${x.title}`)
//   setOptions([...options, ...afscDisplay]);
//   setSelected([apiUser?.code])
// }, [afscs, apiUser]);

//   const handleDeselect = (afsc) => {
//     setSelected(selected.filter(x => x !== afsc))
//   }

//   return (
//     <React.Fragment>
//       <Grid container direction="row" alignItems="center" justifyContent='center' sx={{m: 1, p: 1}}>
//         {selected?.map((afsc, i) => (
//           <React.Fragment key={i}>
//             <Grid item>
//               <IconButton onClick={() => handleDeselect(afsc)}>
//                 <CancelIcon />
//               </IconButton>
//             </Grid>
//             <Grid item>
//               <Typography variant='h5'>
//                 {afsc}
//               </Typography>
//             </Grid>
//           </React.Fragment>
//       ))
//       }
//       </Grid>
//       <Autocomplete
//         value={value}
//         onChange={(event, newValue) => {
//           setValue(newValue);
//         }}
//         inputValue={inputValue}
//         onInputChange={(event, newInputValue) => {
//           setInputValue(newInputValue);
//         }}
//         options={options}
//         sx={{ width: 280, m: 1}}
//         renderInput={(params) => <TextField {...params} label="AFSC" />}
//       />
//     </React.Fragment>
//   )
// }

// export default AfscFilter;