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
  const [draftUser, setDraftUser] = useState(apiUser);
  const [draft, setDraft] = useState({
    title: "",
    award_text:"",
    comments:"",
    is_completed: false,
    award_period: ""
  })

  useEffect(()=>{
    getPackages()

  }, [])

  useEffect(() => {
    if (draft?.user_id) {
      axios.get(`${apiUrl}/users/${draft.user_id}`)
      .then(data => {
        setDraftUser(data.data)
      })
    }
  }, [draft])

  useEffect(() => {
    if (draftUser?.afsc_id && draftUser?.afsc_code === undefined) {
      axios.get(`${apiUrl}/afscs/${draftUser.afsc_id}`)
        .then(data => {
          setDraftUser({...draftUser, afsc_code: data.data[0].code})
        })
    }
    if (draftUser?.unit_id && draftUser?.unit_name === undefined) {
      axios.get(`${apiUrl}/units/${draftUser.unit_id}`)
        .then(data => {
          setDraftUser({
            ...draftUser,
            unit_name: data.data[0].name,
            office_symbol: data.data[0].office_symbol,
            street_address: data.data[0].street_address,
            base: data.data[0].base,
            state: data.data[0].state,
            zipcode: data.data[0].zipcode,
          })
        })
    }
  }, [draftUser])

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
    apiUser ?
      <Box display='flex' justifyContent='center'>
        <Grid container justifyContent='center' alignItems='center' maxWidth='1000px' spacing={2}>
          <Grid item xs={12} align='center'>
            <Typography variant='h5'>NOMINATION FOR AWARD</Typography>
          </Grid >
            <Grid item xs={8}>
              <TextField
                fullWidth
                disabled
                variant='outlined'
                label="AWARD"
                value={draft.title}
              />
            </Grid>
            <Grid item xs={1.5}>
              <TextField
                fullWidth
                disabled
                variant='outlined'
                label="CATEGORY"
                value={draftUser?.rank_category}
              />
            </Grid>
            <Grid item xs={2.5}>
              <TextField
                fullWidth
                disabled = {draft?.user_id !== apiUser?.id}
                variant='outlined'
                label="AWARD PERIOD"
                value={draft.award_period}
                onChange={(e) => setDraft({...draft, award_period: e.target.value})}
              />
            </Grid>
            <Grid item xs={7}>
              <TextField
                fullWidth
                disabled
                variant='outlined'
                label="RANK/NAME OF NOMINEE (First, Middle Initial, Last)"
                value={`${draftUser?.rank_grade}/${draftUser?.first_name} ${draftUser?.middle_initial}. ${draftUser?.last_name}`}
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                fullWidth
                disabled
                variant='outlined'
                label="MAJCOM, FOA, OR DRU"
                value={draftUser?.majcom_foa_dru}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                disabled
                variant='outlined'
                label="DAFSC/DUTY TITLE"
                value={`${draftUser?.afsc_code}/${draftUser?.duty_title}`}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                disabled
                variant='outlined'
                label="NOMINEE's TELEPHONE (DSN & Commercial)"
                value={`DSN: ${draftUser?.phone_dsn} & COMM: ${draftUser?.phone_comm}`}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                disabled
                variant='outlined'
                label="UNIT/OFFICE SYMBOL/STREET ADDRESS/BASE/STATE/ZIP CODE"
                value={`${draftUser?.unit_name}/${draftUser?.office_symbol}/${draftUser?.street_address}/${draftUser?.base}/${draftUser?.state}/${draftUser?.zipcode}`}
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
                <Typography align='center' variant='h5' color='primary' sx={{mt: 2}}>{'Your Mentor\'s Comments'}</Typography>
                <Typography textAlign="left" variant='paragraph' color='primary'>{draft.comments}</Typography>
              </Grid>
              </React.Fragment>
            </Grid>
          </React.Fragment>
          :
          <React.Fragment>
            <Grid item xs={12} >
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
            <Typography align='center' variant='h5' color='primary' sx={{mt: 2}}>{'Your Comments'}</Typography>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                variant='outlined'
                value={draft.comments}
                onChange={(e) => setDraft({...draft, comments: e.target.value})}
              />
            </Grid>
          </React.Fragment>
        }
        <Grid item xs={12} align='center'>
          {draft?.user_id === apiUser?.id &&
            <FormControlLabel
              label="Complete"
              control={
                <Checkbox
                  checked={draft.is_completed}
                  onChange={(e)=> setDraft({...draft, is_completed: e.target.checked})}
                />}
            />
          }
        </Grid>
        {draft?.user_id === apiUser?.id ?
          <React.Fragment>
            <Grid item xs={6} align='center'>
              <Button variant='contained' onClick={updatePackage}>Update</Button>
            </Grid>
            <Grid item xs={6} align='center'>
              <Button variant='contained' color="error" onClick={deletePackage}>Delete</Button>
            </Grid>
          </React.Fragment>
          :
          <Grid item xs={12} align='center'>
            <Button variant='contained' onClick={updatePackage}>Update</Button>
          </Grid>
        }
      </Grid>
    </Box>
    :
    <React.Fragment />
  )
}

export default PackageEdit