import TopBar from './components/layout/TopBar';
import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';
import Awards from './components/pages/Awards';
import Packages from './components/pages/Packages';
import EditProfile from './components/pages/EditProfile';

import { AuthProvider } from './contexts/AuthContext';
import { ApiProvider } from './contexts/ApiContext';
import { ColorModeThemeProvider } from './contexts/ThemeContext';

import React from 'react';
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
            <Route path='/edit-profile' element={<EditProfile />} />
          </Routes>
        </ColorModeThemeProvider>
      </ApiProvider>
    </AuthProvider>
  );
}

export default App;
