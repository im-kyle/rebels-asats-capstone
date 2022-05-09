import { useColorMode } from '../../contexts/ThemeContext';
// import UserMenu from './UserMenu';

import React from 'react';
import { useTheme } from '@mui/material/styles';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Button,
  Typography,
  Tooltip,
  Grid,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const TopBar = function() {
  const theme = useTheme();
  const colorMode = useColorMode();

  const handleClick = () => {

  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar id="back-to-top-anchor" variant="dense">
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography
              variant="overline"
              sx={{ flexGrow: 1, lineHeight: 2, display: { xs: 'none', sm: 'block', fontSize: 36 }}}
            >
              ASATS
            </Typography>
            </Grid>
            <Grid item>
              <Button 
                variant="text" 
                startIcon={<DashboardIcon />}
                size="large"
                edge="start"
                color="inherit"
                sx={{ mr: 1 }}
                onClick={handleClick}
                style={{minWidth: '150px'}}>
                Dashboard
              </Button>
              <Button 
                variant="text" 
                startIcon={<MilitaryTechIcon />}
                size="large"
                edge="start"
                color="inherit"
                sx={{ mr: 1 }}
                onClick={handleClick}
                style={{minWidth: '150px'}}>
                Awards
              </Button>
              <Button 
                variant="text" 
                startIcon={<DriveFileRenameOutlineIcon />}
                size="large"
                edge="start"
                color="inherit"
                sx={{ mr: 1 }}
                onClick={handleClick}
                style={{minWidth: '150px'}}>
                Packages
              </Button>
            </Grid>
            <Grid item >
              {/* <UserMenu /> */}
              <Tooltip title={`set ${theme.palette.mode === 'dark' ? 'light' : 'dark'} mode`} arrow>
                <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                  {theme.palette.mode === 'light' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default TopBar;