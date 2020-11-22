import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';

const Landing = () => {
  return (
    <div className="main">
      <img id="logo" src="./src/Images/HangerLogo.png" alt="hangerLogo" />
      <button id="viewCloset">
        <NavLink to="/closet">
          <span id="viewCloset">View Closet</span>
        </NavLink>
      </button>
    </div>
  );
};

export default Landing;
