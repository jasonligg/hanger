import React from 'react';

import { CookiesProvider } from 'react-cookie';
import UserProvider from './UserContext';
import ClosetProvider from './ClosetContext';
import ItemProvider from './ItemContext';

const Store = ({ children }) => (
  <CookiesProvider>
    <UserProvider>
      <ClosetProvider>
        <ItemProvider>{children}</ItemProvider>
      </ClosetProvider>
    </UserProvider>
  </CookiesProvider>
);

export default Store;
