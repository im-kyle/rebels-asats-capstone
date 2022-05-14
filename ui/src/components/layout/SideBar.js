import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Drawer,
  Toolbar,
  Divider,
} from '@mui/material';


const SideBar = function({ drawerWidth, filters}) {

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        {filters?.map((filter, i) => (
          <React.Fragment key={i}>
            {i !== 0 && <Divider />}
            {filter}
          </React.Fragment>
          ))
        }
      </Box>
    </Drawer>
  );
}

SideBar.propTypes = {
  drawerWidth: PropTypes.number.isRequired,
  filters: PropTypes.array
};

export default SideBar;