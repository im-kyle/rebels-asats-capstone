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
  const { firebaseUser, apiPosted } = useAuth();
  const [apiUser, setApiUser] = React.useState(null);
  const [allAwards, setAllAwards] = React.useState([]);
  const [filteredAwards, setFilteredAwards] = React.useState([]);
  const rankFilter = React.useRef(null);
  const afscFilter = React.useRef([]);
  const [packages, setPackages] = React.useState([]);
  const [afscs, setAfscs] = React.useState([]);
  const [units, setUnits] = React.useState([]);
  const [mentors, setMentors] = React.useState([]);

  useEffect(()=>{
    if(firebaseUser !== null && apiPosted){
      axios.get(`${apiUrl}/users?fb_uid=${firebaseUser.uid}`)
      .then(data =>{
        setApiUser(data.data[0])
      })
    }
  }, [firebaseUser, apiPosted])

  useEffect(()=>{
    if(apiUser !== null){
      getPackages();
    }
  },[apiUser])

  function getAfscs() {
    return axios.get(`${apiUrl}/afscs`)
      .then((data)=>{
        setAfscs(data.data)
      })
  }

  function getPackages() {
    axios.get(`${apiUrl}/packages/${apiUser.id}`)
    .then((data)=>{
      setPackages(data.data)
    })
  }

  function getAwards() {
    axios.get(`${apiUrl}/awards`)
      .then((data)=>{
        setAllAwards(data.data)
        setFilteredAwards(data.data)
      })
  }

  function getUnits(){
    axios.get(`${apiUrl}/units`)
    .then((data)=>{
      setUnits(data.data)
    })
  }

  function getMentors(id) {
    axios.get(`${apiUrl}/users/mentors/${id}`)
    .then((data) =>{
      console.log('mentors data:', data.data)
      setMentors(data.data);
    })
  }

  function filterAwards(updatedFilter) {
    if (updatedFilter.rank) rankFilter.current = updatedFilter.rank;
    const rankFilterEmpty = Object.entries(rankFilter.current).filter(x => x[1]).length === 0;

    if (updatedFilter.afsc) afscFilter.current = updatedFilter.afsc;
    const afscFilterEmpty = afscFilter.current.length === 0;

    setFilteredAwards(
      allAwards.filter(award => {
        for (const rank in rankFilter.current) {
          if (!rankFilter.current[rank]) continue;
          if (award.rank_category === rank) return true;
        }

        for (const afsc of afscFilter.current) {
          if (award.afscs_code === afsc.code) return true;
        }

        if (rankFilterEmpty && afscFilterEmpty) {
          return true;
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
    packages,
    getPackages,
    afscs,
    getAfscs,
    units,
    getUnits,
    mentors,
    getMentors
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