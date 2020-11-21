/* eslint-disable react/prefer-stateless-function */
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import ClosetContainer from './containers/ClosetContainer';
import Landing from './components/Landing';
import DonationPage from './components/DonationPage'
import "../stylesheets/styles.scss"

const App = () => {
  // return <h1>Hello Jordan!</h1>;
  return (
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
};

export default App;
