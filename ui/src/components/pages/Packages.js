import React, { useEffect } from 'react';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import { useApi } from '../../contexts/ApiContext';
import {useNavigate } from 'react-router-dom';

function Packages() {

  const {packages, getPackages, apiUser} = useApi();
  const navigate = useNavigate()

  useEffect(()=>{
    if(apiUser !== null){
      getPackages()
    }
  },[apiUser])

  useEffect(()=>{
    console.log(packages)
  },[packages])


   return (
    <Box>
      <Typography variant='h1'>
        Packages
      </Typography>
      <Grid
        container
        alignItems="top"
        justifyContent={'flex-start'}
        style={{ minHeight: '10vh' }}
        gap={5}
      >
        {packages.map((draft, i)=>{
          return(
            <Grid item minWidth={"20vw"} maxWidth={"30vw"} key={i}>
              <Card sx={{height: "100%"}}>
                <CardActionArea sx={{height: "100%"}} onClick={()=>{navigate(`${draft.id}`)}}>
                  <CardContent>
                    <Typography variant='h5'>{draft.title}</Typography>
                    <Typography variant='body'>{draft.award_text}</Typography>
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