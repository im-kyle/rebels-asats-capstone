import Login from './Login';
import Signup from './Signup';

import React from 'react';
import PropTypes from 'prop-types';

import {
  Tabs,
  Tab,
  Box,
  Typography,
} from '@mui/material';

function TabPanel({ children, value, index, ...other }) {

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

const LoginOrSignup = function() {
  const [value, setValue] = React.useState(0);

  const handleTabSwitch = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    return setValue(0);
  }, []);

  return (
    <div className='signin_signup'>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleTabSwitch}
        variant="fullWidth"
          
      >
        <Tab label="Sign In" />
        <Tab label="Sign Up" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Login />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Signup />
      </TabPanel>
    </div>
  )
}

export default LoginOrSignup;