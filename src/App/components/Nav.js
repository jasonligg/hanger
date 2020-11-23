import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="navBar">
      <Link to="/home">
        <li className="Nav">
          <span>Home</span>
        </li>
      </Link>
      <Link to="/closet">
        <li className="Nav">
          <span>Closet</span>
        </li>
      </Link>
      <Link to="/donation">
        <li className="Nav">
          <span>Donation</span>
        </li>
      </Link>
    </div>
  );
};

export default Nav;
