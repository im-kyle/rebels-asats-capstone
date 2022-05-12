import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import config from '../config';
import axios from 'axios';
import { useAuth } from './AuthContext';

const ApiContext = React.createContext()

export function useApi() {
  return React.useContext(ApiContext);
}

export function ApiProvider({ children }) {
  const apiUrl = config[process.env.NODE_ENV || "development"].apiUrl;
  const { firebaseUser } = useAuth();
  const [apiUser, setApiUser] = React.useState(null);
  const [allAwards, setAllAwards] = React.useState([]);
  const [filteredAwards, setFilteredAwards] = React.useState([]);
  const [userPackages, setUserPackages] = React.useState([]);

  useEffect(()=>{
    if(firebaseUser !== null){
      axios.get(`${apiUrl}/users?fb_uid=${firebaseUser.uid}`)
      .then(data =>{
        setApiUser(data.data[0])
      })
    }
  },[firebaseUser])

  function getUserPackages(){
    axios.get(`${apiUrl}/users/${apiUser.id}`)
  }
  
  function getAwards() {
    axios.get(`${apiUrl}/awards`)
      .then((data)=>{
        setAllAwards(data.data)
        setFilteredAwards(data.data)
      })
  }

  function filterAwards(filter) {
    const { rankFilter } = filter;

    setFilteredAwards(
      allAwards.filter(award => {
        for (const tier in rankFilter) {
          if (!rankFilter[tier]) continue;
          if (award.rank_category === tier || award.rank_category === null) return true;
        }
  
        return false;
      })
    )
  }

  const value = {
    apiUrl,
    apiUser,
    setApiUser,
    allAwards,
    getAwards,
    filteredAwards,
    filterAwards,
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