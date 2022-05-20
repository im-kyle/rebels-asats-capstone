import { useApi } from '../../contexts/ApiContext';
import React, { useState } from 'react';
import {
  Typography,
  Grid,
  FormControlLabel,
  FormGroup,
  Checkbox
} from '@mui/material';

function PackagesReviewFilter() {
  const { mentees, menteesPackages, filterMenteePackages } = useApi();
  const [selected, setSelected] = useState(null)

  React.useEffect(() => {
    if(mentees.length !== 0) {
      setSelected(mentees.reduce((acc, mentee) => ({...acc, [mentee.user_id]: false}), {}))
    }
  }, [mentees])

  React.useEffect(() => {
    if(menteesPackages.length !== 0 && selected !== null ) {
      filterMenteePackages(selected)
    }
  }, [selected, menteesPackages])

  const handleMenteePackageFilter = (event, mentee) => {
    setSelected({...selected, [mentee.user_id]: event.target.checked})
  }

  return (
    <Grid sx={{ width: 280, m: 1}}>

      <Grid item>
        <Typography variant='caption'>
          Mentee Packages For Review
        </Typography>
      </Grid>

      {selected && mentees.map((mentee) => {
        return (

          <Grid item key={mentee?.user_id}>

            <FormGroup>
              <FormControlLabel
                control={<Checkbox
                onChange={(event) => handleMenteePackageFilter(event, mentee)}
                checked={selected[mentee.user_id]}
                />}
                label={mentee?.last_name}/>
            </FormGroup>

          </Grid>
        )
      })}

    </Grid>
  )
}

export default PackagesReviewFilter;