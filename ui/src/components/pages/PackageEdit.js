import { Button, Grid, TextField, Typography, FormControlLabel, Checkbox } from '@mui/material';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import { useApi } from '../../contexts/ApiContext';
import axios from 'axios';

function PackageEdit(){
  const location = useLocation();
  const navigate = useNavigate();
  const packageID = location.pathname.split("/")[2]
  const {allPackages, apiUser, getPackages, menteesPackages, apiUrl} = useApi();
  const [draft, setDraft] = useState({
    award_text:"",
    comments:"",
    is_completed: false,
  })


  useEffect(()=>{
    getPackages()
  },[])

  useEffect(()=>{

    if(apiUser !== null && allPackages.length !== 0){
      getCurrentPackage()
    }
  },[apiUser, allPackages])

  const deletePackage = function(){
    axios.delete(`${apiUrl}/packages/${draft.id}`)
    .then(data =>{
      navigate("/packages")
    })
  }

  const updatePackage = function(){
    let postDraft = {...draft}
    delete postDraft.description
    delete postDraft.requirements_id
    delete postDraft.title
    axios.patch(`${apiUrl}/packages/${draft.id}`, postDraft)
    .then(data =>{
      navigate("/packages")
    })
  }

  const getCurrentPackage = function(){
    let searchResult = undefined;

    for(let item of allPackages){
      if (packageID == item.id ){//&& item.user_id == apiUser.id user login check
        searchResult = item
        break;
      }
    }
    if(searchResult !== undefined){
      setDraft(searchResult)
    } else{
      for(let item of menteesPackages){
        if (packageID == item.id ){//&& item.user_id == apiUser.id user login check
          searchResult = item
          break;
        }
      }
      if(searchResult !== undefined){
        setDraft(searchResult)
      } else{
        navigate("/packages")
      }
    }
  }

  return(
    <Box >
      <Grid container justifyContent={'center'} maxWidth={'1000px'} spacing={2}>
        <Grid item xs={12}>
          <Typography variant='h4'>{draft.title}</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField variant='outlined' label="Award Contents" fullWidth multiline={true} value={draft.award_text}
          onChange={(e)=>{setDraft({...draft, award_text: e.target.value})}}/>
        </Grid>
        <Grid item xs={12}>
          <TextField variant='outlined' label="Comments" fullWidth multiline={true} value={draft.comments}
          onChange={(e)=>{setDraft({...draft, comments: e.target.value})}}/>
        </Grid>
        <Grid item xs={3}>
        <FormControlLabel label="Complete"  control={
          <Checkbox checked={draft.is_completed} onChange={(e)=> setDraft({...draft, is_completed: e.target.checked})}/>}
        />
        </Grid>
        <Grid item xs={3}>
          <Button variant='contained' onClick={updatePackage}>Update</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant='contained' color="error" onClick={deletePackage}>Delete</Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default PackageEdit