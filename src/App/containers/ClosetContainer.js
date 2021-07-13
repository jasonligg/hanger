import React, { useState, useEffect, useContext } from 'react';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { ClosetContext } from '../Store/ClosetContext';
import { UserContext } from '../Store/UserContext';
import NewItem from '../components/NewItem';
import Closet from '../components/Closet';

/*
  ClosetContainer is the top-level component that holds all of
  the data from a user's closet

  We access the UserContext in order to make a fetch request to the backend.
  We save our response to the global state of ClosetContext

  The component passes the data to a single component with optional paths
  default to closet, but the user is also allowed ot add items into their closet
*/

const ClosetContainer = () => {
  const [user] = useContext(UserContext);
  const [closet, setCloset] = useContext(ClosetContext);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    fetch(`/api/closet/${user.verified}`)
      .then((response) => response.json())
      .then((data) => {
        setCloset(data);
        setHasLoaded(true);
      })
      .catch((error) => console.log(error));
  }, []);

  return hasLoaded ? (
    <div className="content-container">
      <Router>
        <div className="content-nav">
          <Link to="/closet">My Closet</Link>
          <Link to="/newitem">Add Item</Link>
        </div>

        <Switch>
          <Route path="/newitem">
            <NewItem />
          </Route>
          <Route path="/closet">
            <Closet closetData={closet} />
          </Route>
        </Switch>
      </Router>
    </div>
  ) : (
    <div className="content-container">
      <h1>Still loading...</h1>
    </div>
  );
};

export default ClosetContainer;
