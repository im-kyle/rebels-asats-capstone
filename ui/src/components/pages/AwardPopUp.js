import React, { useEffect, useState } from 'react';
import {useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Modal,
  Typography,
} from '@mui/material';
import { useApi } from '../../contexts/ApiContext';
import { useAuth } from '../../contexts/AuthContext';
import axios from 'axios';

function AwardPopUp() {
  const navigate = useNavigate()
  const {firebaseUser} = useAuth()
  const {allAwards, apiUser, apiUrl} = useApi();
  const [award, setAward] = useState({})
  const location = useLocation();
  const awardTitle = location.pathname.split("/")[2].replaceAll("%20"," ").replaceAll("%2F","/")

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "80%",
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    // '&::selection':{
    //   backgroundColor: "white"
    // }
  };

  useEffect(()=>{
    if(allAwards.length !== 0){
      let searchResult = "";
    for(let item of allAwards){
      if(item.title === awardTitle){
        searchResult = item;
        break;
      }
    }
    if(searchResult === ""){
      navigate("/awards")
    } else{
      setAward(searchResult)
    }
    }
  }, [allAwards])

  const handlePackageCreation = ()=>{
    console.log("here")
    axios.post(`${apiUrl}/packages`, {user_id: apiUser.id, 
      award_id: award.id, 
      award_text: '', 
      is_completed: false})
      .then(data=>{
        console.log(data)
        navigate(`/packages/${data.data[0].id}`)
      })
  }

  return (
    <Modal open={true}
      onClose={()=>{navigate('/awards')}}>
      <Box sx={style}>
        <Typography variant='h4'>{award?.title}</Typography>
        <Typography variant='body'>{award?.description}</Typography><br/>
        {firebaseUser !== null && <Button onClick={()=>{handlePackageCreation()}}>Create Package</Button>}
      </Box>
    </Modal>
  )
}

export default AwardPopUp;
