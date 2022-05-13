import Layout from './components/layout/Layout';
import TopBar from './components/layout/TopBar';
import SideBar from './components/layout/SideBar';
import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';
import Awards from './components/pages/Awards';
import Packages from './components/pages/Packages';
import EditProfile from './components/pages/EditProfile';
import pageData from './components/pages/pageData';

import { useAuth } from './contexts/AuthContext';
import { ApiProvider } from './contexts/ApiContext';
import { ColorModeThemeProvider } from './contexts/ThemeContext';

import React from 'react';
import PropTypes from 'prop-types';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

function App() {
  const location = useLocation();
  const { firebaseUser } = useAuth();
  const [hasSideBar, setHasSideBar] = React.useState(false);
  const [filters, setFilters] = React.useState([]);

  React.useEffect(() => {
    const path = location.pathname.split('/')[1];
    setHasSideBar(pageData[path].hasSideBar);
    setFilters(pageData[path].filters);
  }, [location]);

  const AppRoutes = () => (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/dashboard' element={<ProtectedRoute user={firebaseUser}><Dashboard /></ProtectedRoute>} />
      <Route path='/awards/*' element={<Awards />} />
      <Route path='/packages/*' element={<ProtectedRoute user={firebaseUser}><Packages /></ProtectedRoute>} />
      <Route path='/edit-profile' element={<ProtectedRoute user={firebaseUser}><EditProfile /></ProtectedRoute>}/>
    </Routes>
  )

  return (
    <ApiProvider>
      <ColorModeThemeProvider>
        <Layout
          top={<TopBar />}
          left={<SideBar drawerWidth={300} filters={filters}/>}
          main={<AppRoutes />}
          showSideBar={hasSideBar}
        />
      </ColorModeThemeProvider>
    </ApiProvider>
  );
}

const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

ProtectedRoute.propTypes = {
  user: PropTypes.object,
  children: PropTypes.node,
};

export default App;
