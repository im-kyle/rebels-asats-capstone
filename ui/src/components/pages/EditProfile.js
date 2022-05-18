import React, { useEffect, useState } from 'react';
import {
  Typography,
  Grid,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl
} from '@mui/material';
import {useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useApi } from '../../contexts/ApiContext';
import { Box } from '@mui/system';

function EditProfile() {
  const { apiUser, getApiUser,  units, getUnits, apiUrl, getAfscs, afscs } = useApi()
  const navigate = useNavigate()

  const [userUpdate, setUserUpdate] = useState({
    first_name:"",
    last_name:"",
    middle_initial: "",
    rank_grade: "",
    rank_category: "",
    afsc_id:"",
    duty_title:"",
    majcom_foa_dru:"",
    phone_dsn:"",
    phone_comm:"",
    unit_id:""
  })

  useEffect(()=>{
    getUnits()
    getAfscs()
  },[])

  useEffect(()=>{
    if(apiUser !== null){
      setUserUpdate(apiUser)
    }
  },[apiUser])


  const updateUser = function(){
  const {afsc_code, afsc_title, base, cc_user_id,
    office_symbol, street_address, zipcode,
    unit_name, state, fb_uid, is_admin, id, ...user} = userUpdate
    axios.patch(`${apiUrl}/users/${apiUser.id}`, user)
    .then(data =>{
      getApiUser()
      navigate("/dashboard")
    })
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
       <Typography variant='h1'>
      Edit Profile
      </Typography>
      <Grid container spacing={2} width={"1000px"} justifyContent="center" >
        <Grid item xs={4}>
          <TextField variant='outlined' fullWidth value={userUpdate?.first_name} label='First Name'
          onChange={(e) =>{setUserUpdate({...userUpdate, first_name: e.target.value})}}/>
        </Grid>
        <Grid item xs={4}>
          <TextField variant='outlined' fullWidth value={userUpdate?.last_name} label='Last Name'
            onChange={(e) =>{setUserUpdate({...userUpdate, last_name: e.target.value})}}/>
        </Grid>
        <Grid item xs={4}>
          <TextField variant='outlined' fullWidth value={userUpdate?.middle_initial} label='Middle Initial'
            onChange={(e) =>{setUserUpdate({...userUpdate, middle_initial: e.target.value})}}/>
        </Grid>
        <Grid item xs={4}>
          <TextField variant='outlined' fullWidth value={userUpdate?.rank_grade} label='Rank/Grade'
            onChange={(e) =>{setUserUpdate({...userUpdate, rank_grade: e.target.value})}}/>
        </Grid>
        <Grid item xs={4}>
          <TextField variant='outlined' fullWidth value={userUpdate?.rank_category} label='Rank Category'
            onChange={(e) =>{setUserUpdate({...userUpdate, rank_category: e.target.value})}}/>
        </Grid>
        <Grid item xs={4}>
          <TextField variant='outlined' fullWidth value={userUpdate?.duty_title} label='Duty Title'
            onChange={(e) =>{setUserUpdate({...userUpdate, duty_title: e.target.value})}}/>
        </Grid>
        <Grid item xs={4}>
          <TextField variant='outlined' fullWidth value={userUpdate?.majcom_foa_dru} label='Majcom/FOA/DRU'
            onChange={(e) =>{setUserUpdate({...userUpdate, majcom_foa_dru: e.target.value})}}/>
        </Grid>
        <Grid item xs={4}>
          <TextField variant='outlined' fullWidth value={userUpdate?.phone_dsn} label='Phone DSN'
            onChange={(e) =>{setUserUpdate({...userUpdate, phone_dsn: e.target.value})}}/>
        </Grid>
        <Grid item xs={4}>
          <TextField variant='outlined' fullWidth value={userUpdate?.phone_comm} label='Phone Comm'
            onChange={(e) =>{setUserUpdate({...userUpdate, phone_comm: e.target.value})}}/>
        </Grid>
        <Grid item xs={4}>
          <FormControl sx={{width:'100%'}}>
            <InputLabel id='unitDropdown'>Unit</InputLabel>
            <Select
            sx={{ minWidth: 120 }}
            labelId="unitDropdown"
            label='Unit'
            value={userUpdate.unit_id }
            onChange={(e)=>{setUserUpdate({...userUpdate, unit_id: e.target.value})}}
            >
              {units.map((unit, i)=>{
                return <MenuItem key={i} value={unit.id}>{unit.name}</MenuItem>
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl sx={{width:'100%'}}>
            <InputLabel id='AFSCDropdown'>AFSC</InputLabel>
            <Select
            sx={{ minWidth: 120 }}
            labelId="AFSCDropdown"
            label='AFSC'
            value={userUpdate.afsc_id }
            onChange={(e)=>{setUserUpdate({...userUpdate, afsc_id: e.target.value})}}
            >
              {afscs.map((afsc, i)=>{
                return <MenuItem key={i} value={afsc.id}>{afsc.code}</MenuItem>
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} textAlign="center" >
          <Button variant='contained' onClick={updateUser}>Update Profile</Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default EditProfile;