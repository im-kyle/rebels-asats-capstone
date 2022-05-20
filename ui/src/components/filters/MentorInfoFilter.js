import React from 'react';
import axios from 'axios';
import { useApi } from '../../contexts/ApiContext';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  Grid,
  AvatarGroup,
  Avatar,
  Tooltip,
  Badge,
  IconButton,
  Dialog,
  DialogTitle,
  Divider,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

const WiggleAvatar = styled(Avatar) ({
  '@keyframes wiggle': {
    '0%': {
      transform: 'rotate(0deg)'
    },
    '25%': {
      transform: 'rotate(-3deg)'
    },
    '50%': {
      transform: 'rotate(5deg)'
    },
    '75%': {
      transform: 'rotate(-1deg)'
    },
    '100%': {
      transform: 'rotate(4deg)'
    },
  },
  animation: "wiggle 500ms infinite ease",
});

function MentorsFilter() {
  const { mentors, mentees, getMentors, getMentees, apiUrl, apiUser } = useApi();
  const [edit, setEdit] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [allUsers, setAllUsers] = React.useState(null);

  const addMentor = () => {
    setOpenDialog(true);
    axios.get(`${apiUrl}/users`)
      .then(data =>{
        setAllUsers(data.data)
      })
  }

  const selectMentor = (selected) => {
    axios.post(`${apiUrl}/users/mentors`, {
      user_id: apiUser.id,
      mentor_id: selected.id,
    })
    .then(() => {
      getMentors(apiUser.id, () => setOpenDialog(false));
    })
  }

  const deleteMentor = (selected) => {
    axios.delete(`${apiUrl}/users/mentors?user=${selected.user_id}&mentor=${selected.mentor_id}`)
    .then(() => {
      getMentors(apiUser.id, () => setOpenDialog(false));
    })
  }

  const deleteMentee = (selected) => {
    axios.delete(`${apiUrl}/users/mentors?user=${selected.user_id}&mentor=${selected.mentor_id}`)
    .then(() => {
      getMentees(apiUser.id, () => setOpenDialog(false));
    })
  }

  return(
    <React.Fragment>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item sx={{marginLeft: 'auto', p: 1}}>
          <IconButton onClick={() => setEdit(!edit)}>
            <EditIcon />
          </IconButton>
        </Grid>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant='h5' sx={{fontWeight: 'bold', mt: 3}}>
            Your Mentors
          </Typography>
          {edit ?
            <Grid container alignItems="center" justifyContent='center'>
              <Grid>
                <AvatarGroup max={5} sx={{mt: 1}}>
                  {mentors && mentors.map((user, i) => (
                    <Tooltip key={i} title={`${user.first_name} ${user.last_name}`}>
                      <Badge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        badgeContent={
                          <IconButton onClick={() => deleteMentor(user)}>
                            <CloseIcon sx={{ height: '10px', width: '10px' }}/>
                          </IconButton>
                        }
                      >
                        <WiggleAvatar sx={{ height: '50px', width: '50px' }}>
                          {`${user.first_name[0]}${user.last_name[0]}`}
                        </WiggleAvatar>
                      </Badge>
                    </Tooltip>
                  ))}
                </AvatarGroup>
              </Grid>
              <Grid>
                <IconButton onClick={addMentor}>
                  <AddIcon />
                </IconButton>
              </Grid>
            </Grid>
          :
            <AvatarGroup max={5} sx={{mt: 1}}>
              {mentors && mentors.map((user, i) => (
                <Tooltip key={i} title={`${user.first_name} ${user.last_name}`}>
                  <Avatar sx={{ height: '50px', width: '50px' }}>
                    {`${user.first_name[0]}${user.last_name[0]}`}
                  </Avatar>
                </Tooltip>
              ))}
            </AvatarGroup>
          }
          <Typography variant='h5' sx={{fontWeight: 'bold', mt: 5}}>
            Your Mentees
          </Typography>
          {edit ?
            <AvatarGroup max={5} sx={{mt: 1}}>
              {mentees && mentees.map((user, i) => (
                <Tooltip key={i} title={`${user.first_name} ${user.last_name}`}>
                  <Badge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    badgeContent={
                      <IconButton onClick={() => deleteMentee(user)}>
                        <CloseIcon sx={{ height: '10px', width: '10px' }}/>
                      </IconButton>
                    }
                  >
                    <WiggleAvatar sx={{ height: '50px', width: '50px' }}>
                      {`${user.first_name[0]}${user.last_name[0]}`}
                    </WiggleAvatar>
                  </Badge>
                </Tooltip>
              ))}
            </AvatarGroup>
          :
            <AvatarGroup max={5} sx={{mt: 1}}>
              {mentees && mentees.map((user, i) => (
                <Tooltip key={i} title={`${user.first_name} ${user.last_name}`}>
                  <Avatar sx={{ height: '50px', width: '50px' }}>
                    {`${user.first_name[0]}${user.last_name[0]}`}
                  </Avatar>
                </Tooltip>
              ))}
            </AvatarGroup>
          }
        </Box>
      </Grid>
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Choose a Mentor</DialogTitle>
        <List
          component="nav"
          sx={{
            width: '100%',
            maxWidth: 300,
            maxHeight: 500,
            bgcolor: 'background.paper',
          }}
        >
          {allUsers && allUsers.map((user, i) => (
            <React.Fragment key={i}>
              <ListItem button onClick={() => selectMentor(user)}>
                <ListItemText primary={`${user.rank_grade} ${user.first_name} ${user.last_name}`} />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </Dialog>
    </React.Fragment>
  )
}

export default MentorsFilter;

// const deleteMovie = (movie) => {
//   return axios.delete(serverURL,
//     {data:
//       {id: movie.id, title: movie.title, description: movie.description, watched: movie.watched}})
// }