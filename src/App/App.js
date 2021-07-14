import React from 'react';

import Store from './Store/Store';
import Dashboard from './containers/Dashboard';

import '../stylesheets/styles.scss';

/* 
App is abstracted, and wrapped with our Store
the Store consists of our Contexts: { UserContext, ItemContext, ClosetContext }
along with our CookieProvider which allows react-cookie to access
our browser's cookie storage.
*/

const App = () => {
  return (
    <Store>
      <Dashboard />
    </Store>
  );
};

export default App;
