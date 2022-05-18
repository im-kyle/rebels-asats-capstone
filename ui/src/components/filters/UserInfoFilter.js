import React from 'react';
import { useApi } from '../../contexts/ApiContext';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Grid,
  List,
  ListItem,
  Badge,
  IconButton,
  Avatar,
  Typography,
  Paper,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const rankInsignia = {
  'Spc1': 'https://veteran.com/wp-content/uploads/2022/02/Space-Force-E1-Specialist-One.png',
  'Spc2': 'https://veteran.com/wp-content/uploads/2022/02/Space-Force-E2-Specialist-Two.png',
  'Spc3': 'https://veteran.com/wp-content/uploads/2022/02/Space-Force-E3-Specialist-Three.png',
  'Spc4': 'https://veteran.com/wp-content/uploads/2022/02/Space-Force-E4-Specialist-Four.png',
  'Sgt': 'https://veteran.com/wp-content/uploads/2022/02/Space-Force-E5-Sergeant.png',
  'TSgt': 'https://veteran.com/wp-content/uploads/2022/02/Space-Force-E6-Technical-Sergeant.png',
  'MSgt': 'https://veteran.com/wp-content/uploads/2022/02/Space-Force-E7-Master-Sergeant-522x750.png',
  'SMSgt': 'https://veteran.com/wp-content/uploads/2022/02/Space-Force-E8-Senior-Master-Sergeant-522x750.png',
  'CMSgt': 'https://veteran.com/wp-content/uploads/2022/02/Space-Force-E9-Chief-Master-Sergeant-495x750.png',
  'CMSSF': 'https://veteran.com/wp-content/uploads/2022/02/Space-Force-Chief-Master-Sergeant-of-the-Space-Force-495x750.png',
  '1Lt': 'https://veteran.com/wp-content/uploads/2022/02/Space-Force-O1-Second-Lieutenant.png',
  '2Lt': 'https://veteran.com/wp-content/uploads/2022/02/Space-Force-O2-First-Lieutenant.png',
  'Capt': 'https://veteran.com/wp-content/uploads/2022/02/Space-Force-O3-Captain.png',
  'Maj': 'https://veteran.com/wp-content/uploads/2022/02/Space-Force-O4-Major.png',
  'Lt Col': 'https://veteran.com/wp-content/uploads/2022/02/Space-Force-O5-Lieutenant-Colonel.png',
  'Col': 'https://veteran.com/wp-content/uploads/2022/02/Space-Force-O6-Colonel.png',
  'Brig Gen': 'https://veteran.com/wp-content/uploads/2022/02/Space-Force-O7-Brigadier-General.png',
  'Maj Gen': 'https://veteran.com/wp-content/uploads/2022/02/Space-Force-O8-Major-General.png',
  'Lt Gen': 'https://veteran.com/wp-content/uploads/2022/02/Space-Force-O9-Lieutenant-General.png',
  'Gen': 'https://veteran.com/wp-content/uploads/2022/02/Space-Force-O10-General.png',
}

function UserInfoFilter() {
  const { firebaseUser } = useAuth();
  const { apiUser } = useApi();
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="space-between"
        style={{ height: '50vh' }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', mt: 5 }}>
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
            badgeContent={
              rankInsignia[apiUser?.rank_grade] ?
                <Box
                  component="img"
                  alt={`${apiUser?.rank_grade}`}
                  src={rankInsignia[apiUser?.rank_grade]}
                  sx={{ height: '50px' }}
                />
                :
                <React.Fragment />
            }
          >
            <Avatar
              component={Paper}
              elevation={4}
              alt={`${firebaseUser.email}`}
              src={firebaseUser?.photoURL}
              sx={{ height: '200px', width: '200px' }}
            />
          </Badge>
          <Typography variant='h5' sx={{fontWeight: 'bold', mt: 4}}>
            {`${apiUser?.rank_grade} ${apiUser?.first_name} ${apiUser?.last_name}`}
          </Typography>
          <Typography variant='subtitle1' sx={{ fontStyle: 'italic', mt: -1}}>
            {apiUser?.afsc_title}
          </Typography>
          <Typography variant='body2' sx={{ mt: -1, mb: 1}}>
            {apiUser?.afsc_code}
          </Typography>
          <Typography variant='h6' sx={{ mt: 2, mb: -1}}>
            {apiUser?.duty_title}
          </Typography>
          <Typography variant='subtitle1' sx={{ mt: 0 }}>
            {apiUser?.majcom_foa_dru}
          </Typography>
          <Typography variant='subtitle1' sx={{ mt: -1 }}>
            {`${apiUser?.base}, ${apiUser?.state}`}
          </Typography>
        </Box>
        <Grid item sx={{marginLeft: 'auto', p: 1, mt: -4}}>
          <IconButton onClick={() => navigate('/edit-profile')}>
            <EditIcon />
          </IconButton>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default UserInfoFilter;