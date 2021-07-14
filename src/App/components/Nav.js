import React from 'react';
import { Link } from 'react-router-dom';

/*
Our Primary Nav bar uses React Router,
*/

const Nav = () => {
  return (
    <div className="nav">
      {/* <Link to="/">
        <li className="login">
          <span>Login</span>
        </li>
      </Link> */}
      <img
        id="navlogo"
        src="https://res.cloudinary.com/dfu8r9blo/image/upload/v1606164894/HangerImages/HangerTextLogo_qnxaho.png"
        alt="hangerLogo"
      />
      <Link to="/closet">
        <li className="Nav">
          <span className="navHeaders">Closet</span>
        </li>
      </Link>
      <Link to="/marketplace">
        <li className="Nav">
          <span className="navHeaders">Marketplace</span>
        </li>
      </Link>
      <a href="/auth/logout">
        <li className="Nav">
          <span className="navHeaders">Logout</span>
        </li>
      </a>
    </div>
  );
};

export default Nav;
