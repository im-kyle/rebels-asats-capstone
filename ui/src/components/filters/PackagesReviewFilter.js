import { useApi } from '../../contexts/ApiContext';
import React, { useState, useEffect } from 'react';
import {
  Typography,
  Grid,
  FormControlLabel,
  FormGroup,
  Checkbox
} from '@mui/material';

function PackagesReviewFilter() {
  const { mentees, menteesPackages, filterMenteePackages } = useApi();
  const [selected, setSelected] = useState({checked: false, menteeID: 0});

  React.useEffect(() => {
    console.log('mentees:', mentees);
    console.log('mentees packages:', menteesPackages);
  }, [])

  React.useEffect(() => {
    //filterMenteePackages(selected)
  }, [selected])

  const handleMenteePackageFilter = (mentee) => {
    setSelected({...selected, checked: true, menteeID: mentee.target.value})
    console.log(selected);
  }

  return (
    <Grid sx={{ width: 280, m: 1}}>

      <Grid item>
        <Typography variant='caption'>
          Mentee Packages For Review
        </Typography>
      </Grid>

      {mentees.map((mentee) => {
        return (
          <Grid item key={mentee?.user_id}>
            <FormGroup>
              <FormControlLabel control={<Checkbox onChange={handleMenteePackageFilter}
              defaultChecked={false}
              checked={true}
              value={mentee.user_id}/>}
              label={mentee?.last_name}
              />
            </FormGroup>
          </Grid>
        )
      })}

    </Grid>
  )
}

export default PackagesReviewFilter;