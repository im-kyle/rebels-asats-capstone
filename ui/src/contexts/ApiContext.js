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
  const [allPackages, setAllPackages] = React.useState([]);
  const [filteredPackages, setFilteredPackages] = React.useState([]);
  const rankFilter = React.useRef(null);
  const afscFilter = React.useRef([]);
  const eoFilter = React.useRef(false);
  const [afscs, setAfscs] = React.useState([]);
  const [units, setUnits] = React.useState([]);
  const [commander, setCommander] = React.useState(null);
  const [mentors, setMentors] = React.useState([]);
  const [mentees, setMentees] = React.useState([]);
  const [filteredMenteesPackages, setFilteredMenteesPackages] = React.useState([]);
  const [menteePackagesReviewFilter, setMenteePackagesReviewFilter] = React.useState([]);
  const [menteesPackages, setMenteesPackages] = React.useState([]);

  function resetState() {
    setApiUser(null);
    setAllAwards([]);
    setFilteredAwards([]);
    setAllPackages([]);
    setFilteredPackages([]);
    rankFilter.current = null;
    afscFilter.current = [];
    setAfscs([]);
    setUnits([]);
    setCommander(null);
    setMentors([]);
    setMentees([]);
    setFilteredMenteesPackages([]);
    setMenteesPackages([]);
  }

  useEffect(()=>{
    if(firebaseUser !== null && apiPosted){
      getApiUser()
    }

    if(firebaseUser === null) {
      resetState();
    }
  }, [firebaseUser, apiPosted])

  useEffect(()=>{
    if(apiUser !== null){
      getPackages();
      getMentees(apiUser?.id);
      getMentors(apiUser?.id);
    }
  }, [apiUser])

  useEffect(()=>{
    if(mentees.length !== 0){
      getMenteesPackages()
    }
  },[mentees])


  function getAfscs() {
    return axios.get(`${apiUrl}/afscs`)
      .then((data)=>{
        setAfscs(data.data)
      })
  }
  function getApiUser(){
    axios.get(`${apiUrl}/users?fb_uid=${firebaseUser.uid}`)
      .then(data =>{
        setApiUser(data.data[0])
        axios.get(`${apiUrl}/users/${data.data[0].cc_user_id}`)
          .then(data => {
            setCommander(data.data);
          })
      })
  }

  function getPackages() {
    if(apiUser?.id !== undefined){
      axios.get(`${apiUrl}/packages/${apiUser.id}`)
      .then((data)=>{
        let combinedData = []
        for (let pack of data.data) {
          combinedData.push({...pack, first_name: apiUser.first_name, last_name: apiUser.last_name})
        }
        setAllPackages(combinedData)
        setFilteredPackages(combinedData)
    })
    }

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
    axios.get(`${apiUrl}/users/mentees/${id}`)
      .then(response => {
        setMentors(response.data);
      })
  }

  function getMentees(id) {
    axios.get(`${apiUrl}/users/mentors/${id}`)
    .then((data) =>{
      setMentees(data.data);
    })
  }

  async function getMenteesPackages(){
    let promiseArr = []
    let menteesData = []
    let data;
    for(let mentee of mentees){
      data = await axios.get(`${apiUrl}/packages/${mentee.user_id}`)
      promiseArr.push(data.data)
    }
    Promise.all(promiseArr)
    .then(data =>{
      for(let userPackages of data){
        menteesData = menteesData.concat(userPackages)
      }
      let combinedData = []
      for(let pack of menteesData){
        for(let mentee of mentees){
          if(pack.user_id === mentee.user_id){
            combinedData.push({...pack, ...mentee})
          }
        }
      }
      setMenteesPackages(combinedData)
    })
  }

  function filterAwards(updatedFilter) {
    if (updatedFilter.rank) rankFilter.current = updatedFilter.rank;
    const rankFilterEmpty = Object.entries(rankFilter.current).filter(x => x[1]).length === 0;

    if (updatedFilter.afsc) afscFilter.current = updatedFilter.afsc;
    const afscFilterEmpty = afscFilter.current.length === 0;

    if (updatedFilter.eo !== undefined) eoFilter.current = updatedFilter.eo;

    setFilteredAwards(
      allAwards.filter(award => {
        if (eoFilter.current && !award.is_equal_opportunity_award) return false

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

  function filterPackages({completed, inDraft}) {
    setFilteredPackages(
      allPackages.filter(p => {
        if (completed && p.is_completed === true) return true;
        if (inDraft && p.is_completed === false) return true;
        return false;
      })
    )
  }

  async function filterMenteePackages(selected) {
    setFilteredMenteesPackages(menteesPackages.filter((pack => selected[pack?.user_id] && !pack?.is_completed)))
  }


  const value = {
    apiUrl,
    apiUser,
    getApiUser,
    commander,
    allAwards,
    getAwards,
    filteredAwards,
    filterAwards,
    allPackages,
    getPackages,
    filteredPackages,
    filterPackages,
    afscs,
    getAfscs,
    units,
    getUnits,
    mentors,
    mentees,
    getMentees,
    getMenteesPackages,
    filterMenteePackages,
    filteredMenteesPackages,
    menteesPackages
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