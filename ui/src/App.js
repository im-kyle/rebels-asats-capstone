import TopBar from './components/layout/TopBar';
import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';
import Awards from './components/pages/Awards';
import Packages from './components/pages/Packages';

import { AuthProvider } from './contexts/AuthContext';
import { ApiProvider } from './contexts/ApiContext';
import { ColorModeThemeProvider } from './contexts/ThemeContext';

import React, { useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <AuthProvider>
      <ApiProvider>
        <ColorModeThemeProvider>
          <TopBar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/awards' element={<Awards />} />
            <Route path='/packages' element={<Packages />} />
          </Routes>
        </ColorModeThemeProvider>
      </ApiProvider>
    </AuthProvider>
  );
}

export default App;
