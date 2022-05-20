import { useApi } from '../../contexts/ApiContext';
import React, { useState } from 'react';
import {
  Box,
  Switch,
  FormControlLabel,
  FormGroup
} from '@mui/material';

function EqualOpportunityFilter() {
  const { filterAwards } = useApi();
  const [active, setActive] = useState(false);

  const handleSwitch = () => {
    setActive(!active)
  }

  React.useEffect(() => {
    filterAwards({eo: active})
  }, [active]);

  return (
    <Box m={2} pt={0}>
      <FormGroup>
        <FormControlLabel control={
          <Switch
            checked={active}
            onChange={handleSwitch}
          />
        }
        label="Filter by Equal Opportunity" />
      </FormGroup>
    </Box>
  )
}

export default EqualOpportunityFilter;
