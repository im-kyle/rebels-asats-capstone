import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import { useApi } from '../../contexts/ApiContext';
import AwardPopUp from './AwardPopUp';

function Awards() {
  const { filteredAwards, getAwards } = useApi();
  const navigate = useNavigate()
  
  useEffect(()=>{
    getAwards()
  }, [])

  return (
    <Box>
      <Typography variant='h1'>
        Awards
      </Typography>
      <Grid
        container
        alignItems="top"
        justifyContent={'flex-start'}
        style={{ minHeight: '10vh' }}
        gap={5}
      >
        {filteredAwards.map((award, i)=>{
          return(
            <Grid item minWidth={"20vw"} maxWidth={"30vw"} key={i}>
              <Card sx={{height: "100%"}}>
                <CardActionArea sx={{height: "100%"}} onClick={()=>{navigate(`${award.title.replaceAll("/","%2F")}`)}}>
                  <CardContent>
                    <Typography variant='h5'>{award.title} </Typography>
                    <Typography variant='body'>{award.description}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          )
        })}  
      </Grid>
      <Routes>
        <Route path='/:awardTitle' element={<AwardPopUp/>}></Route>
      </Routes>
    </Box>
    
  )
}

export default Awards;

//sm={3.5} md={2.75} lg={2} xl={1.5} 