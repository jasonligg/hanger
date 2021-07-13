import React, { useState, useEffect, useContext } from 'react';

import UserContainer from './UserContainer';
import MarketplaceContainer from './MarketplaceContainer';
import ClosetContainer from './ClosetContainer';
import Logout from '../components/Logout';
import Login from '../components/Login';
import Nav from '../components/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { UserContext } from '../Store/UserContext';

/*
Our Dashboard is the view a user would see upon authentication
It checks our global state to see if the user has a property of verified
the value at this property would be the users id within the database.

if this id is successfully retrieved we weill render the dashboard,
if not, the application will be directed to our Login component
*/

const Dashboard = () => {
  const [user] = useContext(UserContext);
  const id = user ? user.verified : null;

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
