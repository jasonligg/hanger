import React from 'react';

import Store from './Store/Store';
import Dashboard from './containers/Dashboard';

import '../stylesheets/styles.scss';

const App = () => {
  return (
    <Store>
      <Dashboard />
    </Store>
  );
};

export default App;
