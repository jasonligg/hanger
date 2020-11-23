import React from 'react';

import ClosetContainer from './ClosetContainer';
import UserContainer from './UserContainer';
import Nav from '../components/Nav';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1> DASHBOARD </h1>
      <Nav />
      <UserContainer />
      <ClosetContainer />
    </div>
  );
};

export default Dashboard;
