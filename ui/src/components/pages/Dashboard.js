import React from 'react';
import {
  Typography,
  Grid,
  Box,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';

function Dashboard() {

  return (
    <Box>
      <Grid
        container

        direction="row"
        alignItems="center"
        justifyContent={'center'}
        style={{ minHeight: '10vh' }}
        gap={2}
      >
        <Grid item xs={12} align='center'>
          <DashboardIcon sx={{ fontSize: "70px" }} />
        </Grid>
        <Grid item xs={12} align='center' sx={{mt: -7, mb: -4}}>
          <Typography variant='overline' sx={{fontSize: 48}}>
            Dashboard
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Dashboard;