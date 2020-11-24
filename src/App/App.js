import React from 'react';

import UserProvider from './Store/UserContext';
import ClosetProvider from './Store/ClosetContext';
import Dashboard from './containers/Dashboard';

import '../stylesheets/styles.scss';

const App = () => {
  return (
    <UserProvider>
      <ClosetProvider>
        <Dashboard />
      </ClosetProvider>
    </UserProvider>
  );
};

export default App;
