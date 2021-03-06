import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  CssBaseline,
} from '@mui/material';

import PropTypes from 'prop-types';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export function useColorMode() {
  return React.useContext(ColorModeContext)
}

export function ColorModeThemeProvider({ children }) {
  const [mode, setMode] = React.useState('light');

  const theme = React.useMemo(() => createTheme({
    palette: {
      mode,
      primary: {
        main: mode === 'light' ? '#0F044C' : '#787A91',
      },
      secondary: {
        main: mode === 'light' ? '#141E61' : '#73777B',
      },
      background: {
        default: mode === 'light' ? '#fff' : '#0f041b',
      }
    },

    typography: {
      overline: {
        fontFamily: [
          'Black Ops One',
          'cursive',
        ].join(','),
      },
      body2: {
        fontFamily: [
          'Source Code Pro',
          'monospace',
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

ColorModeThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};