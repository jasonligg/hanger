/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

/*
{
    id: 781,
    username: 'mggower',
    firstName: 'Michael',
    lastName: 'Gower',
    nickName: 'Mikey',
    gender: 'Male',
    city: 'Lowell',
    state: 'Massachusetts',
    interests: 'LOVES CHARITY AND FASHUN',
    age: 27,
    birthday: {
      day: 23,
      month: 2,
      year: 1993,
    },
  }
*/
