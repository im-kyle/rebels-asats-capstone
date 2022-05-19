import { Button, Grid, TextField, Typography, FormControlLabel, Checkbox } from '@mui/material';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useApi } from '../../contexts/ApiContext';
import axios from 'axios';

function PackageEdit(){
  const location = useLocation();
  const navigate = useNavigate();
  const packageID = location.pathname.split("/")[2]
  const { allPackages, apiUser, commander, getPackages, menteesPackages, apiUrl } = useApi();
  const [draft, setDraft] = useState({
    title: "",
    award_text:"",
    comments:"",
    is_completed: false,
    award_period: ""
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
    .then(() =>{
      navigate("/packages")
    })
  }

  const updatePackage = function(){
    let postDraft = {...draft}
    delete postDraft.description
    delete postDraft.requirements_id
    delete postDraft.title
    delete postDraft.first_name
    delete postDraft.last_name
    delete postDraft.is_equal_opportunity_award
    delete postDraft.mentor_id
    axios.patch(`${apiUrl}/packages/${draft.id}`, postDraft)
    .then(() => {
      navigate("/packages")
    })
  }

  const getCurrentPackage = function(){
    let searchResult = undefined;

    for(let item of allPackages){
      if (packageID == item.id ){
        searchResult = item
        break;
      }
    }
    if(searchResult !== undefined){
      setDraft(searchResult)
    } else{
      for(let item of menteesPackages){
        if (packageID == item.id ){
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
    apiUser &&
      <Box display='flex' justifyContent='center'>
      <Grid container justifyContent='center' alignItems='center' maxWidth='1000px' spacing={2}>
        <Grid item xs={12} align='center'>
          <Typography variant='h5'>NOMINATION FOR AWARD</Typography>
        </Grid >
            <Grid item xs={6}>
              <TextField
                fullWidth
                disabled
                variant='outlined'
                label="AWARD"
                value={draft.title}
              />
            </Grid>
            {draft?.user_id === apiUser?.id &&
            <Grid item xs={3}>
              <TextField
                fullWidth
                disabled
                variant='outlined'
                label="CATEGORY"
                value={apiUser?.rank_category}
              />
            </Grid>}
            <Grid item xs={3}>
              <TextField
                fullWidth
                disabled = {draft?.user_id !== apiUser?.id}
                variant='outlined'
                label="AWARD PERIOD"
                value={draft.award_period}
                onChange={(e) => setDraft({...draft, award_period: e.target.value})}
              />
            </Grid>
            {draft?.user_id === apiUser?.id && <React.Fragment>
            <Grid item xs={7}>
              <TextField
                fullWidth
                disabled
                variant='outlined'
                label="RANK/NAME OF NOMINEE (First, Middle Initial, Last)"
                value={`${apiUser?.rank_grade}/${apiUser?.first_name} ${apiUser?.middle_initial}. ${apiUser?.last_name}`}
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                fullWidth
                disabled
                variant='outlined'
                label="MAJCOM, FOA, OR DRU"
                value={apiUser?.majcom_foa_dru}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                disabled
                variant='outlined'
                label="DAFSC/DUTY TITLE"
                value={`${apiUser?.afsc_code}/${apiUser?.duty_title}`}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                disabled
                variant='outlined'
                label="NOMINEE's TELEPHONE (DSN & Commercial)"
                value={`DSN: ${apiUser?.phone_dsn} & COMM: ${apiUser?.phone_comm}`}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                disabled
                variant='outlined'
                label="UNIT/OFFICE SYMBOL/STREET ADDRESS/BASE/STATE/ZIP CODE"
                value={`${apiUser?.unit_name}/${apiUser?.office_symbol}/${apiUser?.street_address}/${apiUser?.base}/${apiUser?.state}/${apiUser?.zipcode}`}
              />
            </Grid>
            {commander &&
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  disabled
                  variant='outlined'
                  label="RANK/NAME OF UNIT COMMANDER (First, Middle Initial, Last)/COMMANDER'S TELEPHONE (DSN & Commercial)"
                  value={`${commander?.rank_grade}/${commander?.first_name} ${commander?.middle_initial}. ${commander?.last_name}/DSN: ${commander?.phone_dsn} & COMM: ${commander?.phone_comm}`}
                />
              </Grid>
            }
            </React.Fragment>}
            {draft?.user_id === apiUser?.id ?
            <React.Fragment>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                variant='outlined'
                label="SPECIFIC ACCOMPLISHMENTS (Use single-spaced, bullet format)"
                value={draft.award_text}
                onChange={(e) => setDraft({...draft, award_text: e.target.value})}
              />
              <React.Fragment>
              <Grid item xs={12}>
                <Typography align='center' variant='h5' color='primary'>{'Your Mentor\'s Comments'}</Typography>
                <Typography textAlign="left" variant='paragraph' color='primary'>{draft.comments}</Typography>
              </Grid>
              </React.Fragment>
            </Grid>
          </React.Fragment>
          :
          <React.Fragment>
            <Grid item xs={12} >
              <Typography align='center' variant='h5' color='primary'>SPECIFIC ACCOMPLISHMENTS</Typography>
              {/* <Typography color='secondary' style={{whiteSpace: 'pre-line'}}>{draft.award_text}</Typography> */}
              <TextField
                fullWidth
                multiline
                disabled
                variant='outlined'
                label="SPECIFIC ACCOMPLISHMENTS (Use single-spaced, bullet format)"
                value={draft.award_text}
                onChange={(e) => setDraft({...draft, award_text: e.target.value})}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                variant='outlined'
                label="Comments"
                value={draft.comments}
                onChange={(e) => setDraft({...draft, comments: e.target.value})}
              />
            </Grid>
          </React.Fragment>
        }
        <Grid item xs={3}>
        {draft?.user_id === apiUser?.id &&<FormControlLabel label="Complete"  control={
          <Checkbox checked={draft.is_completed} onChange={(e)=> setDraft({...draft, is_completed: e.target.checked})}/>}
        />}
        </Grid>
        <Grid item xs={3}>
          <Button variant='contained' onClick={updatePackage}>Update</Button>
        </Grid>
        {draft?.user_id === apiUser?.id && <Grid item xs={3}>
          <Button variant='contained' color="error" onClick={deletePackage}>Delete</Button>
        </Grid>}
      </Grid>
    </Box>
  )
}

export default PackageEdit