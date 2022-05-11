import Layout from './components/layout/Layout';
import TopBar from './components/layout/TopBar';
import SideBar from './components/layout/SideBar';
import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';
import Awards from './components/pages/Awards';
import Packages from './components/pages/Packages';
import EditProfile from './components/pages/EditProfile';
import pageData from './components/pages/pageData';

import { AuthProvider } from './contexts/AuthContext';
import { ApiProvider } from './contexts/ApiContext';
import { ColorModeThemeProvider } from './contexts/ThemeContext';

import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const [hasSideBar, setHasSideBar] = React.useState(false);
  const [filters, setFilters] = React.useState([]);

  React.useEffect(() => {
    setHasSideBar(pageData[location.pathname].hasSideBar);
    setFilters(pageData[location.pathname].filters);
  }, [location]);

  const AppRoutes = () => (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/awards' element={<Awards />} />
      <Route path='/packages' element={<Packages />} />
      <Route path='/edit-profile' element={<EditProfile />} />
    </Routes>
  )
  return (
    <AuthProvider>
      <ApiProvider>
        <ColorModeThemeProvider>
          <Layout
            top={<TopBar />}
            left={<SideBar drawerWidth={240} filters={filters}/>}
            main={<AppRoutes />}
            showSideBar={hasSideBar}
          />
        </ColorModeThemeProvider>
      </ApiProvider>
    </AuthProvider>
  );
}

export default App;
