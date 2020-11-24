import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Nav = () => {
  //#region old
  return (
    <div className="nav">
      <Link to="/">
        <li className="Nav">
          <span>Home</span>
        </li>
      </Link>
      <Link to="/closet">
        <li className="Nav">
          <span>Closet</span>
        </li>
      </Link>
      <Link to="/marketplace">
        <li className="Nav">
          <span>Marketplace</span>
        </li>
      </Link>
      <Link to="/logout">
        <li className="Nav">
          <span>Logout</span>
        </li>
      </Link>
    </div>
  );
};

export default Nav;
