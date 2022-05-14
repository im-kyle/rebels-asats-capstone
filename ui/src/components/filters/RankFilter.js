import { useApi } from '../../contexts/ApiContext';

import React from 'react';
import {
  Box,
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
  Checkbox,
} from '@mui/material';

const rankTiers = [
  {short: 'CIV1', long: 'Civilian (Category I)'},
  {short: 'CIV2', long: 'Civilian (Category II)'},
  {short: 'CIV3', long: 'Civilian (Category III)'},
  {short: 'CDT', long: 'Cadet'},
  {short: 'JE', long: 'Junior Enlisted'},
  {short: 'NCO', long: 'Non-commissioned Officer'},
  {short: 'SNCO', long: 'Senior Non-commissioned Officer'},
  {short: 'CGO', long: 'Company Grade Officer'},
  {short: 'FGO', long: 'Field Grade Officer'},
]

function RankFilter() {
  const { filterAwards, apiUser } = useApi();
  const [selected, setSelected] = React.useState({
    CIV1: false,
    CIV2: false,
    CIV3: false,
    CDT: false,
    JE: false,
    NCO: false,
    SNCO: false,
    CGO: false,
    FGO: false,
  });

  const { CIV1, CIV2, CIV3, CDT, JE, NCO, SNCO, CGO, FGO } = selected;
  const error = [CIV1, CIV2, CIV3,  CDT, JE, NCO, SNCO, CGO, FGO].filter((v) => v).length < 1;

  React.useEffect(() => {
    if (apiUser) {
      const userRank = {};
      userRank[apiUser.rank_category] = true;
      setSelected({ ...selected, ...userRank });
    }
  }, [apiUser])

  React.useEffect(() => {
    filterAwards({rankFilter: selected})
  }, [selected])

  const handleChange = (event) => {
    setSelected({...selected, [event.target.id]: event.target.checked});
  };

  return (
    <Box m={3} pt={0}>
      <FormControl
        required
        error={error}
        component="fieldset"
        variant="standard"
      >
        <FormLabel component="legend">Filter by Rank</FormLabel>
        <FormGroup>
          {rankTiers.map((tier, i) => (
            <FormControlLabel
              key={i}
              control={
                <Checkbox
                  id={tier.short}
                  checked={selected[tier.short]}
                  onChange={handleChange}
                  name={`${tier.long} (${tier.short})`} />
              }
              label={tier.long}
            />
          ))}
        </FormGroup>
        <FormHelperText>{error && 'Please select a rank.'}</FormHelperText>
      </FormControl>
    </Box>
  )
}

export default RankFilter;