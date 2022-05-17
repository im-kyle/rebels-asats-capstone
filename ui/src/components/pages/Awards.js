import { useApi } from '../../contexts/ApiContext';
import AwardPopUp from './AwardPopUp';
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
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

function Awards() {
  const { filteredAwards, getAwards } = useApi();
  const navigate = useNavigate()

  useEffect(()=>{
    getAwards()
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
          <MilitaryTechIcon sx={{ fontSize: "80px" }} />
        </Grid>
        <Grid item xs={12} align='center' sx={{mt: -9, mb: -4}}>
          <Typography variant='overline' sx={{fontSize: 48}}>
            Awards
          </Typography>
        </Grid>

        {filteredAwards.map((award, i)=>{
            return(
              <Grid item minWidth={"20vw"} maxWidth={"30vw"} sm={3} md={3} lg={2.5} xl={2} height={200} key={i}>
                <Card sx={{height: "100%"}}>
                  <CardActionArea sx={{height: "100%"}} onClick={()=>{navigate(`${award.title.replaceAll("/","%2F")}`)}}>
                    <CardContent>
                      <Typography variant='h5'>{award.title.length > 50 ? `${award.title.slice(0,50)}...` : award.title}</Typography>
                      <Typography variant='body'>{award.description.length > 100 ? `${award.description.slice(0,100)}...` : award.description}</Typography>
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
{/* <Grid
          container
          alignItems="top"
          justifyContent={'flex-start'}
          style={{ minHeight: '10vh' }}
          gap={5}
        >

        </Grid> */}