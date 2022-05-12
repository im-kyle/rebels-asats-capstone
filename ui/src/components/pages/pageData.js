import React from 'react';
import RankFilter from '../filters/RankFilter';
import AfscFilter from '../filters/AfscFilter';
import DemographicsFilter from '../filters/DemographicsFilter';
import MyPackagesFilter from '../filters/MyPackagesFilter';
import PackagesReviewFilter from '../filters/PackagesReviewFilter';
import UserInfoFilter from '../filters/UserInfoFilter';
import MentorInfoFilter from '../filters/MentorInfoFilter';

const pageData = {
  '': {
    hasSideBar: false,
    filters: [
      <React.Fragment key={0}/>,
    ]
  },
  'dashboard': {
    hasSideBar: true,
    filters: [
      <UserInfoFilter key={0} />,
      <MentorInfoFilter key={1} />,
    ]
  },
  'awards': {
    hasSideBar: true,
    filters: [
      <RankFilter key={0} />,
      <AfscFilter key={1} />,
      <DemographicsFilter key={2} />
    ]
  },
  'packages': {
    hasSideBar: true,
    filters: [
      <MyPackagesFilter key={0}/>,
      <PackagesReviewFilter key={1}/>,
    ]
  },
  'edit-profile': {
    hasSideBar: false,
    filters: [
      <React.Fragment key={0}/>,
    ]
  },
}

export default pageData;