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
import { Routes, Route, useNavigate } from 'react-router-dom';
import PackageEdit from './PackageEdit';

function Packages() {

  const {packages, getPackages} = useApi();
  const navigate = useNavigate()

  // useEffect(()=>{
  //   getPackages()
  // },[])


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
                    <Typography variant='body'>{draft.award_text}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          )
        })}  
      </Grid>
      <Routes>
        <Route path='/:packageID' element={<PackageEdit/>}/>
      </Routes>
    </Box>
    
  )
}

export default Packages;