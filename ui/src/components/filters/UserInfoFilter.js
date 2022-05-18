import React from 'react';
import { useApi } from '../../contexts/ApiContext';
import { useAuth } from '../../contexts/AuthContext';
import {
  Box,
  Grid,
  List,
  ListItem,
  Badge,
  IconButton,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Button,
  Typography,
  Paper,
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
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
  const { firebaseUser, updatePhoto } = useAuth();
  const { apiUser } = useApi();
  const [openDialog, setOpenDialog] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState(null);

  const handleCloseDialog = () => {
    setTimeout(() => {
      setOpenDialog(false);
    }, 500);
  }

  const handleSubmitPhoto = () => {
    updatePhoto(userInfo.url)
    handleCloseDialog();
  }

  const handleCancelPhoto = () => {
    handleCloseDialog();
  }

  return (
    <React.Fragment>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '50vh' }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
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
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              badgeContent={
                <IconButton onClick={() => setOpenDialog(true)}>
                  <SettingsIcon />
                </IconButton>
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

          <List dense={true} style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
            <ListItem key='org'>Organization: {apiUser?.majcom_foa_dru}</ListItem>
          </List>
        </Box>
      </Grid>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Profile Photo</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To change your profile photo, please enter a link to the image.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Image URL"
            type="url"
            fullWidth
            variant="standard"
            onChange={(event) => setUserInfo({...userInfo, url: event.target.value})}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelPhoto}>Cancel</Button>
          <Button onClick={handleSubmitPhoto}>Submit</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}

export default UserInfoFilter;