import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

const Layout = function({ top, left, main, showSideBar }) {
  const { drawerWidth } = left.props;

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex' }}>
        {top}
        {showSideBar && left}
      </Box>
      {showSideBar ?
        <Box component="main" sx={{ flexGrow: 1, 
                                    p: 3, 
                                    width: `calc(100% - ${drawerWidth}px)`, 
                                    marginTop: "75px",
                                    float: "right"}}>
          {main}
        </Box>
        :
        <Box component="main" sx={{ flexGrow: 1, p: 3}}>
          {main}
        </Box>
      }
    </React.Fragment>
  )
}

Layout.propTypes = {
  top: PropTypes.node.isRequired,
  left: PropTypes.node.isRequired,
  main: PropTypes.node.isRequired,
  showSideBar: PropTypes.bool.isRequired,
};

export default Layout;