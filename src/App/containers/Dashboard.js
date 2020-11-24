import React from 'react';

import MarketplaceContainer from './MarketplaceContainer';
import ClosetContainer from './ClosetContainer';
import UserContainer from './UserContainer';
import Nav from '../components/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Dashboard = () => {
  return (
    <Router>
      <div className="dashboard">
        <Nav />
        <UserContainer />
        <Switch>
          <Route path="/closet" component={ClosetContainer} />
          <Route path="/marketplace" component={MarketplaceContainer} />
        </Switch>
      </div>
    </Router>
  );
};

export default Dashboard;
