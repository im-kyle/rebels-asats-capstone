import React from 'react';
import axios from 'axios';
import config from '../../config';
import { useApi } from '../../contexts/ApiContext';
import { Box, List, ListItem, Typography } from '@mui/material';

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
      <List>
        {mentors.map(user => {
          return (<ListItem key={user.user_id}>{`${user.first_name} ${user.last_name}`}</ListItem>);
        })}
      </List>
      <Typography variant='h6'>
        Mentees:
      </Typography>
      <List>
        {mentees.map(user => {
          return (<ListItem key={user.user_id}>{`${user.first_name} ${user.last_name}`}</ListItem>);
        })}
      </List>
    </Box>
  )
}

export default MentorsFilter;