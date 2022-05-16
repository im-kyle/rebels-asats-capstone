import React from 'react';
//import axios from 'axios';
import { useApi } from '../../contexts/ApiContext';
import { Box } from '@mui/material';

function MentorsFilter() {
  const { apiUser, mentors, getMentors } = useApi();
  // const [ options, setOptions ] = React.useState(['']);
  // const [ mentorshipInfo, setMentorshipInfo] = React.useState(
  //   {
  //     mentors: [],
  //     mentees: []
  //   }
  // );

  
  React.useEffect(() => {
    getMentors(apiUser.id);
    console.log(mentors);
  }, [])

  return(
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h3>Mentorship:</h3>
      <h4>Mentors:</h4>
      <h4>Mentees:</h4>
    </Box>
  )
}

export default MentorsFilter;