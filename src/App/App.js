import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './components/Nav';
import ClosetContainer from './containers/ClosetContainer';
import Landing from './components/Landing';
import DonationPage from './components/DonationPage';

import '../stylesheets/styles.scss';

const App = () => (
  <Router>
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/closet" component={ClosetContainer} />
        <Route path="/donation" component={DonationPage} />
      </Switch>
    </div>
  </Router>
);

export default App;
