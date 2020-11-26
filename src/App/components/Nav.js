import React from 'react';
import { Link } from 'react-router-dom';

/*
Our Primary Nav bar uses React Router,
*/

const Nav = () => {
  return (
    <div className="nav">
      <Link to="/">
        <li className="login">
          <span>Login</span>
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
