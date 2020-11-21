import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <Link to="/home">
        <li>Home</li>
      </Link>
      <Link to="/closet">
        <li>Closet</li>
      </Link>
      <Link to="/donation">
        <li>Donation</li>
      </Link>
    </div>
  );
};

export default Nav;
