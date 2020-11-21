import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="navBar">
      <Link to="/home">
        <li className="Nav">Home</li>
      </Link>
      <Link to="/closet">
        <li className="Nav">Closet</li>
      </Link>
      <Link to="/donation">
        <li className="Nav">Donation</li>
      </Link>
    </div>
  );
};

export default Nav;
