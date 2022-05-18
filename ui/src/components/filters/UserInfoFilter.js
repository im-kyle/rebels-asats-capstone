import React from 'react';
import { useApi } from '../../contexts/ApiContext';
import { useAuth } from '../../contexts/AuthContext';
import {
  Box,
  Grid,
} from '@mui/material';

function UserInfoFilter() {
  const { firebaseUser } = useAuth();
  const { apiUser } = useApi();

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '50vh' }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <img src={firebaseUser?.multiFactor.user.photoURL} width='150px' height='150px' style={{borderRadius: '50%'}} />
        <h3>{`${apiUser?.first_name} ${apiUser?.last_name}`}</h3>
        <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
          <li key='rank'>Rank: {apiUser?.rank_grade} </li>
          <li key='afsc'>AFSC: {apiUser?.afsc_code} - {apiUser?.afsc_title}</li>
          <li key='duty'>Duty Title: {apiUser?.duty_title}</li>
          <li key='org'>Organization: {apiUser?.majcom_foa_dru}</li>
        </ul>
      </Box>
    </Grid>
  )
}

export default UserInfoFilter;