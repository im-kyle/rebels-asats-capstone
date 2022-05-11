import React from 'react';
import RankFilter from '../filters/RankFilter';
import AfscFilter from '../filters/AfscFilter';
import DemographicsFilter from '../filters/DemographicsFilter';
import MyPackagesFilter from '../filters/MyPackagesFilter';
import PackagesReviewFilter from '../filters/PackagesReviewFilter';
import UserInfoFilter from '../filters/UserInfoFilter';
import MentorInfoFilter from '../filters/MentorInfoFilter';

const pageData = {
  '/': {
    hasSideBar: false,
    filters: [
      <React.Fragment />,
    ]
  },
  '/dashboard': {
    hasSideBar: true,
    filters: [
      <UserInfoFilter />,
      <MentorInfoFilter />,
    ]
  },
  '/awards': {
    hasSideBar: true,
    filters: [
      <RankFilter />,
      <AfscFilter />,
      <DemographicsFilter />
    ]
  },
  '/packages': {
    hasSideBar: true,
    filters: [
      <MyPackagesFilter/>,
      <PackagesReviewFilter/>,
    ]
  },
  '/edit-profile': {
    hasSideBar: false,
    filters: [
      <React.Fragment />,
    ]
  },
}

export default pageData;