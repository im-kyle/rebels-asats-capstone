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
  {short: 'JE', long: 'Junior Enlisted'},
  {short: 'NCO', long: 'Non-commissioned Officer'},
  {short: 'SNCO', long: 'Senior Non-commissioned Officer'},
  {short: 'CGO', long: 'Company Grade Officer'},
  {short: 'FGO', long: 'Field Grade Officer'},
]
const displayRank = (tier) => `${tier.long} (${tier.short})`

function RankFilter() {
  const { filterAwards } = useApi();
  const [selected, setSelected] = React.useState({
    JE: true,
    NCO: false,
    SNCO: false,
    CGO: false,
    FGO: false,
  });

  const { JE, NCO, SNCO, CGO, FGO } = selected;
  const error = [JE, NCO, SNCO, CGO, FGO].filter((v) => v).length < 1;

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
        <FormLabel component="legend">Rank Tier</FormLabel>
        <FormGroup>
          {rankTiers.map((tier, i) => (
            <FormControlLabel
              key={i}
              control={
                <Checkbox 
                  id={tier.short}
                  checked={selected[tier.short]}
                  onChange={handleChange} 
                  name={displayRank(tier)} />
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