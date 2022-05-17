import { useColorMode } from '../../contexts/ThemeContext';
import { useAuth } from '../../contexts/AuthContext';
import UserMenu from './UserMenu';

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import {
  AppBar,
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
import PropTypes from 'prop-types';

const MenuButton = function({text, icon, cb}) {

  return (
    <Button
      variant="text"
      startIcon={icon}
      size="large"
      edge="start"
      color="inherit"
      sx={{ mr: 1 }}
      onClick={cb}
      style={{minWidth: '150px'}}
      tabIndex={-1}>
      {text}
    </Button>
  )
}

MenuButton.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  cb: PropTypes.func.isRequired,
};

const TopBar = function() {
  const theme = useTheme();
  const colorMode = useColorMode();
  const{ firebaseUser } = useAuth();
  const navigate = useNavigate();

  const menuItems = [
    {text: 'Dashboard', icon: <DashboardIcon />, route: () => navigate('/dashboard'), protected: true},
    {text: 'Awards', icon: <MilitaryTechIcon />, route: () => navigate('/awards'), protected: false},
    {text: 'Packages', icon: <DriveFileRenameOutlineIcon />, route: () => navigate('/packages'), protected: true},
  ]

  const handleClick = (item) => {
    if (firebaseUser) {
      item.route();
    } else {
      !item.protected && item.route();
    }
  }

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, maxHeight: 75 }}>
      <Toolbar id="back-to-top-anchor">
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Link
              to="/"
              style={{
                color: 'white',
                  textDecoration: 'none',
                  '&:hover': {
                    color: 'white'
                  }
              }}
            >
              <Typography
                variant="overline"
                sx={{ flexGrow: 1, lineHeight: 2, display: { xs: 'none', sm: 'block', fontSize: 36 }}}
              >
                ASATS
              </Typography>
            </Link>
          </Grid>
          <Grid item>
            {menuItems.map((item, i) => (
                <MenuButton key={i} text={item.text} icon={item.icon} cb={() => handleClick(item)} />
              ))
            }
          </Grid>
          <Grid item display="flex">
            <UserMenu />
            <Tooltip title={`set ${theme.palette.mode === 'dark' ? 'light' : 'dark'} mode`} arrow>
              <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit" tabIndex={-1}>
                {theme.palette.mode === 'light' ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;