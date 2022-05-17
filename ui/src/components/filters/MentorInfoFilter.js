import React from 'react';
import axios from 'axios';
import config from '../../config';
import { useApi } from '../../contexts/ApiContext';
import { Box, Typography } from '@mui/material';

function MentorsFilter() {
  const apiUrl = config[process.env.NODE_ENV || "development"].apiUrl;
  const { apiUser, mentors, mentees } = useApi();
  const [ options, setOptions ] = React.useState(['']);

  return(
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Typography variant='h5'>
        Mentorship:
      </Typography>
      <Typography variant='h6'>
        Mentors:
      </Typography>
      <ul>
        {mentors.map(user => {
          return (<li key={user.user_id}>{`${user.first_name} ${user.last_name}`}</li>);
        })}
      </ul>
      <Typography variant='h6'>
        Mentees:
      </Typography>
      <ul>
        {mentees.map(user => {
          return (<li key={user.user_id}>{`${user.first_name} ${user.last_name}`}</li>);
        })}
      </ul>
    </Box>
  )
}

export default MentorsFilter;