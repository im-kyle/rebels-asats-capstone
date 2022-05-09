import TopBar from './components/layout/TopBar';
import Landing from './components/pages/Landing';

import { ColorModeThemeProvider } from './contexts/ThemeContext';
import config from './config'

import React, { useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';

const API_URL = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;

function App() {


  useEffect(() => {
    console.log(API_URL);
  }, []);


  return (
    <ColorModeThemeProvider>
      <TopBar />
      <Routes>
        <Route exact path='/' element={<Landing />} />
      </Routes>
    </ColorModeThemeProvider>
  );
}

export default App;
