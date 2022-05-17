import React from 'react';
import RankFilter from '../filters/RankFilter';
import AfscFilter from '../filters/AfscFilter';
import MyPackagesFilter from '../filters/MyPackagesFilter';
import PackagesReviewFilter from '../filters/PackagesReviewFilter';
import UserInfoFilter from '../filters/UserInfoFilter';
import MentorInfoFilter from '../filters/MentorInfoFilter';
import EqualOpportunityFilter from '../filters/EqualOpportunityFilter';

const pageData = {
  '': {
    sideBar: false,
    filters: [
      <React.Fragment key={0}/>,
    ]
  },
  'dashboard': {
    sideBar: true,
    filters: [
      <UserInfoFilter key={0} />,
      <MentorInfoFilter key={1} />,
    ]
  },
  'awards': {
    sideBar: true,
    filters: [
      <RankFilter key={0} />,
      <AfscFilter key={1} />,
      <EqualOpportunityFilter key={2} />
    ]
  },
  'packages': {
    sideBar: true,
    filters: [
      <MyPackagesFilter key={0}/>,
      <PackagesReviewFilter key={1}/>,
    ]
  },
  'edit-profile': {
    sideBar: false,
    filters: [
      <React.Fragment key={0}/>,
    ]
  },
}

export default pageData;