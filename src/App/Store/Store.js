import React from 'react';

import { CookiesProvider } from 'react-cookie';
import UserProvider from './UserContext';
import ClosetProvider from './ClosetContext';
import ItemProvider from './ItemContext';

/*
Our Store combines all of our Providers around their children components,
this allows us to abstract App.js as much as possible and pass Global State 
as one, but still access each piece on its own.
*/

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
