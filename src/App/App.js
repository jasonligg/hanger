/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import Dashboard from './containers/Dashboard';
import Login from './components/Login';

import '../stylesheets/styles.scss';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setUser({
        id: 781,
        username: 'mggower',
        firstName: 'Michael',
        lastName: 'Gower',
        nickName: 'Mikey',
        gender: 'Male',
        age: 27,
        birthday: {
          day: 23,
          month: 2,
          year: 1993,
        },
      });
    }, 5000);
    return () => {
      console.log('unmounted APP');
    };
  }, []);

  return user ? (
    <div className="App">
      <Dashboard />
    </div>
  ) : (
    <div className="login">
      <Login />
    </div>
  );
};

export default App;

/*


 <Router>
<Nav />
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/closet" component={ClosetContainer} />
            <Route path="/donation" component={DonationPage} />
          </Switch>
          </Router>
*/
