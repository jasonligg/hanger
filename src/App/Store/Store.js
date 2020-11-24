import React from 'react';

import UserProvider from './UserContext';
import ClosetProvider from './ClosetContext';

const Store = ({ children }) => (
  <UserProvider>
    <ClosetProvider>{children}</ClosetProvider>
  </UserProvider>
);

export default Store;
