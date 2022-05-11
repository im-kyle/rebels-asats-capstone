import React from 'react';
import PropTypes from 'prop-types';
import config from '../config';

const ApiContext = React.createContext()

export function useApi() {
  return React.useContext(ApiContext);
}

export function ApiProvider({ children }) {
  const apiUrl = config[process.env.NODE_ENV || "development"].apiUrl;
  const [apiUser, setApiUser] = React.useState(null);

  const value = {
    apiUrl,
    apiUser,
    setApiUser,
  };

  return (
    <ApiContext.Provider value={value}>
      {children}
    </ApiContext.Provider>
  )
}

ApiProvider.propTypes = {
  children: PropTypes.node.isRequired,
};