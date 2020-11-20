/* eslint-disable react/prefer-stateless-function */
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Nav from './components/Nav';

const App = () => {
  // return <h1>Hello Jordan!</h1>;
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          {/* <Route path="/" exact component={Home} /> */}
          {/* <Route path="/closet" component={Closet} /> */}
          {/* <Route path="/donation" component={Donation} /> */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
