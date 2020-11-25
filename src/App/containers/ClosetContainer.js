import React, { useState, useEffect, useContext } from 'react';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { ClosetContext } from '../Store/ClosetContext';
import NewItem from '../components/NewItem';
import Closet from '../components/Closet';

//  #region useEffect && fetch() comments
/*
  invoke useEffect and make a fetch request to our backend endpoint
  to retrieve the table data and store it in state. this useEffect
  should only trigger once (and not each time the page re-renders
  (a la componentDidMount))

  NewItem does not need any props passed down to it
  pass down the appropriate props to the tableDisplay component

  not sure on this part...
  create a custom hook (useFetch) to pass down as a prop to NewItem
  (EDIT: or maybe define in separate file and import)
  this will allow NewItem to trigger the useEffect hook in here
  to re-fetch the latest data from the backend, which will then update
  and re-render the TableDisplay component
  */
//#endregion

// access ClosetContext for user's closet -->

const ClosetContainer = () => {
  const [closet, setCloset] = useContext(ClosetContext);
  const [hasLoaded, setHasLoaded] = useState(false);
  const num = 12;
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
            <Closet tableData={closet} />
          </Route>
          <Route path="/">
            <div>
              <h1>HANGER</h1>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  ) : (
    <div className="content-container">
      <p>Still loading...</p>
    </div>
  );
};

export default ClosetContainer;
