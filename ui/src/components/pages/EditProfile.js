import React, { useEffect, useState } from 'react';
import {
  Typography,
  Grid,
  TextField,
  Button,
  Select,
  MenuItem,
  Autocomplete,
  InputLabel,
  FormControl
} from '@mui/material';
import { useApi } from '../../contexts/ApiContext';
import { Box } from '@mui/system';

function EditProfile() {
  const { apiUser, units, getUnits } = useApi()
  
  const [userUpdate, setUserUpdate] = useState(apiUser)

  useEffect(()=>{
    getUnits()
  },[])

  return (
    <Box>
       <Typography variant='h1'>
      Edit Profile
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <TextField variant='outlined' value={userUpdate?.first_name} label='First Name'
          onChange={(e) =>{setUserUpdate({...userUpdate, first_name: e.target.value})}}/>
        </Grid>
        <Grid item>
          <TextField variant='outlined' value={userUpdate?.last_name} label='Last Name'
            onChange={(e) =>{setUserUpdate({...userUpdate, last_name: e.target.value})}}/>
        </Grid>
        <Grid item>
          <TextField variant='outlined' value={userUpdate?.middle_initial} label='Middle Initial'
            onChange={(e) =>{setUserUpdate({...userUpdate, middle_initial: e.target.value})}}/>
        </Grid>
        <Grid item>
          <TextField variant='outlined' value={userUpdate?.rank_grade} label='Rank/Grade'
            onChange={(e) =>{setUserUpdate({...userUpdate, rank_grade: e.target.value})}}/>
        </Grid>
        <Grid item>
          <TextField variant='outlined' value={userUpdate?.afsc} label='AFSC'
            onChange={(e) =>{setUserUpdate({...userUpdate, afsc: e.target.value})}}/>
        </Grid>
        <Grid item>
          <TextField variant='outlined' value={userUpdate?.duty_title} label='Duty Title'
            onChange={(e) =>{setUserUpdate({...userUpdate, duty_title: e.target.value})}}/>
        </Grid>
        <Grid item>
          <TextField variant='outlined' value={userUpdate?.majcom_foa_dru} label='Majcom/FOA/DRU'
            onChange={(e) =>{setUserUpdate({...userUpdate, majcom_foa_dru: e.target.value})}}/>
        </Grid>
        <Grid item>
          <TextField variant='outlined' value={userUpdate?.phone_dsn} label='Phone DSN'
            onChange={(e) =>{setUserUpdate({...userUpdate, phone_dsn: e.target.value})}}/>
        </Grid>
        <Grid item>
          <TextField variant='outlined' value={userUpdate?.phone_comm} label='Phone Comm'
            onChange={(e) =>{setUserUpdate({...userUpdate, phone_comm: e.target.value})}}/>
        </Grid>
        <Grid item>
          <FormControl>
            <InputLabel id='unitDropdown'>Unit</InputLabel>
            <Select
            sx={{ minWidth: 120 }}
            labelId="unitDropdown"
            label='Unit'
            value={userUpdate?.user_id ? userUpdate.user_id : ""}
            onChange={(e)=>{setUserUpdate({...userUpdate, unit_id: e.target.value})}}
            >
              {/* <MenuItem value={""}>Null</MenuItem> */}
              {units.map((unit, i)=>{
                return <MenuItem key={i} value={unit.id}>{unit.name}</MenuItem>
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <Button variant='contained'>Update Profile</Button>
        </Grid>
      </Grid>
      
    </Box>
   
  )
}

export default EditProfile;