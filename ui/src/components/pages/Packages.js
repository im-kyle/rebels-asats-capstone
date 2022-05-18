import React, { useEffect } from 'react';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';

import { useApi } from '../../contexts/ApiContext';
import {useNavigate } from 'react-router-dom';

function Packages() {

  const {allPackages, filteredPackages, menteesPackages, getMenteesPackages, filteredMenteesPackages, getPackages, apiUser, mentees} = useApi();
  const navigate = useNavigate()

  useEffect(()=> {
    if(apiUser !== null){
      getPackages()
      getMenteesPackages()
    }
  },[apiUser])

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
          <DriveFileRenameOutlineIcon sx={{ fontSize: "80px" }} />
        </Grid>
        <Grid item xs={12} align='center' sx={{mt: -9, mb: -4}}>
          <Typography variant='overline' sx={{fontSize: 48}}>
            Packages
          </Typography>
        </Grid>

        {filteredPackages.map((draft, i)=>{
          return(
            <Grid item minWidth={"20vw"} maxWidth={"30vw"} sm={3} md={3} lg={2.5} xl={2} height={300} key={i}>
              <Card sx={{height: "100%"}}>
                <CardActionArea sx={{height: "100%"}} onClick={()=>{navigate(`${draft.id}`)}}>
                  <CardContent>
                    <Typography variant='h5'>{draft.title.length > 50 ? `${draft.title.slice(0,50)}...` : draft.title}</Typography>
                    <Typography variant='subtitle1'>Author: {draft.first_name} {draft.last_name}</Typography>
                    <Typography variant='body'>{draft.award_text.length > 100 ? `${draft.award_text.slice(0,100)}...` : draft.award_text}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          )
        })}

        {filteredMenteesPackages?.map((draft, i)=>{
          return(
            <Grid item minWidth={"20vw"} maxWidth={"30vw"} sm={3} md={3} lg={2.5} xl={2} height={300} key={i}>
              <Card sx={{height: "100%"}}>
                <CardActionArea sx={{height: "100%"}} onClick={()=>{navigate(`${draft.id}`)}}>
                  <CardContent>
                    <Typography variant='h5'>{draft.title.length > 50 ? `${draft.title.slice(0,50)}...` : draft.title}</Typography>
                    <Typography variant='subtitle1'>Author: {draft.first_name} {draft.last_name}</Typography>
                    <Typography variant='body'>{draft.award_text.length > 100 ? `${draft.award_text.slice(0,100)}...` : draft.award_text}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </Box>

  )
}

export default Packages;