import React, { useContext } from 'react';

import UserContainer from './UserContainer';
import MarketplaceContainer from './MarketplaceContainer';
import ClosetContainer from './ClosetContainer';
import Logout from '../components/Logout';
import Login from '../components/Login';
import Nav from '../components/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { UserContext } from '../Store/UserContext';

const Dashboard = () => {
  const [user] = useContext(UserContext);
  console.log(user);

  // fetch --> '/api/user/id
  // useEffect(async () => {
  //   const approveUser = await fetch(`/api/${user.verified}`);
  //   console.log(approveUser);
  //   return () => {
  //     console.log('unmount');
  //   };
  // }, []);

  return (
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
  );
};

export default Dashboard;
