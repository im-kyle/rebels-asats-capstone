import React from 'react';
import { useApi } from '../../contexts/ApiContext';
import {
  Box,
  List,
  ListItem,
  Typography,
  Grid,
  AvatarGroup,
  Avatar,
  Tooltip,
} from '@mui/material';

function MentorsFilter() {
  const { mentors, mentees } = useApi();

  return(
    <React.Fragment>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant='h5' sx={{fontWeight: 'bold', mt: 5}}>
            Your Mentors
          </Typography>
          <AvatarGroup max={5} sx={{mt: 1}}>
            {mentors && mentors.map(user => (
              <Tooltip key={user.user_id} title={`${user.first_name} ${user.last_name}`}>
                <Avatar sx={{ height: '50px', width: '50px' }}>
                  {`${user.first_name[0]}${user.last_name[0]}`}
                </Avatar>
              </Tooltip>
            ))}
          </AvatarGroup>
          <Typography variant='h5' sx={{fontWeight: 'bold', mt: 5}}>
            Your Mentees
          </Typography>
          <AvatarGroup max={5} sx={{mt: 1}}>
            {mentees && mentees.map(user => (
              <Tooltip key={user.user_id} title={`${user.first_name} ${user.last_name}`}>
                <Avatar sx={{ height: '50px', width: '50px' }}>
                  {`${user.first_name[0]}${user.last_name[0]}`}
                </Avatar>
              </Tooltip>
            ))}
          </AvatarGroup>
        </Box>
      </Grid>
    </React.Fragment>
  )
}

export default MentorsFilter;