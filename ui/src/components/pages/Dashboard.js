import React from 'react';
import {
  Typography,
  Paper,
  List,
  ListItem,
  Grid,
  Box,
  Button,
} from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useNavigate } from 'react-router-dom';
import { useApi } from '../../contexts/ApiContext';

function CarouselItem (props) {
  const navigateTo = useNavigate();
  const openPackage = () => {
    navigateTo(`/packages/${props.item.id}`);
  };

  return (
    <Paper>
      <h3>{props.item.title}</h3>
      <List>
        <ListItem>Nominee: {props.item.first_name} {props.item.last_name}</ListItem>
        <ListItem>Description: {props.item.description}</ListItem>
      </List>
      <Grid item xs={12} align='center'>
        <Button variant="outlined" onClick={openPackage}>Resume Editing</Button>
      </Grid>
    </Paper>
  );
};

function Dashboard() {
  const { filteredPackages, menteesPackages } = useApi();

  React.useEffect(() => {
    console.log("User's packages:", filteredPackages);
    console.log("Mentees' packages:", menteesPackages);
  }, [])

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
      {
        filteredPackages.length ?
          <Carousel height="256px" animation="slide" autoPlay={false}>
            {
              filteredPackages.map((item, index) => {
                return (
                  <CarouselItem key={index} item={item}/>
                );
              })
            }
          </Carousel>
        :
          <Grid item xs={12} align='center'>
            <p>You have no active packages.</p>
          </Grid>
      }
      {
        menteesPackages.length ?
          <Carousel height="256px" animation="slide" autoPlay={false}>
            {
              menteesPackages.map((item, index) => {
                return (
                  <CarouselItem key={`${index}m`} item={item}/>
                );
              })
            }
          </Carousel>
        :
          <Grid item xs={12} align='center'>
            <p>Your mentees have no active packages.</p>
          </Grid>
      }
    </Box>
  )
}

export default Dashboard;