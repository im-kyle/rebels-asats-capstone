// import { Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/material';
// import React, { useEffect, useState } from 'react';
import React from 'react';
// import {useLocation, useNavigate} from 'react-router-dom';
// import { useApi } from '../../contexts/ApiContext';

function PackageEdit(){

  // const location = useLocation();
  // const navigate = useNavigate();
  // const packageID = location.pathname.split("/")[2]
  // const {packages, apiUser, getPackages} = useApi();
  // const [draft, setDraft] = useState({
  //   award_text:""
  // })


  // useEffect(()=>{
  //   getPackages()
  // },[])

  // useEffect(()=>{
    
  //   if(apiUser !== null && packages.length !== 0){
  //     getCurrentPackage()
  //   }
  // },[apiUser, packages])

  // // useEffect(()=>{
  // //   console.log(draft)
  // //   if(allAwards.length !== 0){
  // //     let searchResult = "";
      
  // //   for(let item of allAwards){
  // //     console.log(`${item.id} : ${draft.award_id}`)
  // //     if(item.id === draft.award_id){
  // //       searchResult = item;
  // //       break;
  // //     }
  // //   }
  // //   if(searchResult === ""){
  // //     console.log("did not find")
  // //   } else{
  // //     setAward(searchResult)
  // //   }
  // //   }
  // // }, [draft])

  // const getCurrentPackage = function(){
  //   let searchResult = undefined;
  //   for(let item of packages){
  //     if (packageID == item.id && item.user_id == apiUser.id){
  //       searchResult = item
  //       break;
  //     }
  //   }
  //   if(searchResult !== undefined){
  //     setDraft(searchResult)
  //   } else{
  //     navigate("/packages")
  //   }
  // }

  return(
    <Box >
      {/* <Grid container justifyContent={'center'} width={"60%"}>
        <Grid item xs={12}>
          <Typography variant='h4'>{draft.title}</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField variant='outlined' label="Award Contents" fullWidth multiline={true} value={draft.award_text}/>
        </Grid>
        <Grid item xs={3}>
          <Button variant='contained'>Update</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant='contained' color="error">Delete</Button>
        </Grid>
      </Grid> */}
    </Box>
  )
}

export default PackageEdit