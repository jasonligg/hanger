import React from 'react';

import UserProvider from './UserContext';
import ClosetProvider from './ClosetContext';
import ItemProvider from './ItemContext';

const Store = ({ children }) => (
  <UserProvider>
    <ClosetProvider>
      <ItemProvider>{children}</ItemProvider>
    </ClosetProvider>
  </UserProvider>
);

export default Store;
