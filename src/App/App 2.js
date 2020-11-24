/* eslint-disable no-console */
import React, { useEffect, useState, createContext } from 'react';

import Dashboard from './containers/Dashboard';
import Login from './components/Login';

import '../stylesheets/styles.scss';

export const UserContext = createContext(null);

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser({
      id: 781,
      username: 'mggower',
      firstName: 'Michael',
      lastName: 'Gower',
      nickName: 'Mikey',
      gender: 'Male',
      location: 'Massachusetts',
      interests: 'LOVES CHARITY AND FASHUN',
      age: 27,
      birthday: {
        day: 23,
        month: 2,
        year: 1993,
      },
    });

    return () => {
      console.log('unmounted APP');
    };
  }, []);

  return user ? (
    <div className="App">
      <UserContext.Provider value={[user, setUser]}>
        <Dashboard />
      </UserContext.Provider>
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
