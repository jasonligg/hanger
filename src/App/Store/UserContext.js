/* eslint-disable react/prop-types */
import React, { createContext, useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

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
