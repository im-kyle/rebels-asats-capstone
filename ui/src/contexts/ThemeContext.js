import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  CssBaseline,
} from '@mui/material';

import PropTypes from 'prop-types';

ColorModeThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export function useColorMode() {
  return React.useContext(ColorModeContext)
}

export function ColorModeThemeProvider({ children }) {
  const [mode, setMode] = React.useState('light');

  const theme = React.useMemo(() => createTheme({
    palette: {
      mode,
    },
    typography: {
      overline: {
        fontFamily: [
          'Black Ops One',
          'cursive',
        ].join(','),
      },
    },
  }), [mode]);

  const colorMode = React.useMemo(() => (
    {toggleColorMode: () => {
      setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    },
  }), []);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}