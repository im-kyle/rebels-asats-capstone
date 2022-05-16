import React from 'react';
import { useApi } from '../../contexts/ApiContext';
import { useAuth } from '../../contexts/AuthContext';
import {
  Box,
} from '@mui/material';

function UserInfoFilter() {
  const apiContext = useApi();
  const authContext = useAuth();

  return (
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <img src={authContext.firebaseUser.multiFactor.user.photoURL} width='150px' height='150px' style={{borderRadius: '50%'}} />
        <h3>{`${apiContext.apiUser.first_name} ${apiContext.apiUser.last_name}`}</h3>
        <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
          <li key='rank'>Rank: {apiContext.apiUser.rank_grade} </li>
          <li key='afsc'>AFSC: {apiContext.apiUser.code} - {apiContext.apiUser.title}</li>
          <li key='duty'>Duty Title: {apiContext.apiUser.duty_title}</li>
          <li key='org'>Organization: {apiContext.apiUser.majcom_foa_dru}</li>
        </ul>
      </Box>
  )
}

export default UserInfoFilter;