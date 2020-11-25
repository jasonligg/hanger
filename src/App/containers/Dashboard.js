import React, { useState, useEffect, useContext } from 'react';

import UserContainer from './UserContainer';
import MarketplaceContainer from './MarketplaceContainer';
import ClosetContainer from './ClosetContainer';
import Logout from '../components/Logout';
import Login from '../components/Login';
import Nav from '../components/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { UserContext } from '../Store/UserContext';

const Dashboard = () => {
  const [user, setUser] = useContext(UserContext);
  const id = user ? user.verified : null;

  console.log('user id', user ? user.verified : 'none');

  return id ? (
    <Router>
      <div className="dashboard">
        <Nav />
        <UserContainer />
        <Switch>
          <Route path="/closet" component={ClosetContainer} />
          <Route path="/marketplace" component={MarketplaceContainer} />
          <Route path="/logout" component={Logout} />
        </Switch>
      </div>
    </Router>
  ) : (
    <Login />
  );
};

export default Dashboard;
