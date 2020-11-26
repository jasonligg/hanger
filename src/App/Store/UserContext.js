/* eslint-disable react/prop-types */
import React, { createContext, useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

/*
Our most important Global State is the user information.
It is initialized as null, and then stored with the response
from authentication under the property "verified". 'react-cookie'
allows us to check the browser for cookies. Our authentication route
assigns a cookie with the value of our users ID. Which can then allow
a user access.
*/

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [cookies, setCookie] = useCookies();

  useEffect(() => {
    setUser({ ...user, verified: cookies.success });
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
