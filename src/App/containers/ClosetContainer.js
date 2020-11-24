import React, { useState, useEffect } from 'react';

// //#region commentzz
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
import InputDisplay from '../components/InputDisplay';
import TableDisplay from '../components/TableDisplay';
//  //#endregion

const ClosetContainer = () => {
  //  #region commentszz
  // invoke useEffect and make a fetch request to our backend endpoint
  // to retrieve the table data and store it in state. this useEffect
  // should only trigger once (and not each time the page re-renders
  // (a la componentDidMount))

  // inputDisplay does not need any props passed down to it
  // pass down the appropriate props to the tableDisplay component

  // not sure on this part...
  // create a custom hook (useFetch) to pass down as a prop to InputDisplay
  // (EDIT: or maybe define in separate file and import)
  // this will allow InputDisplay to trigger the useEffect hook in here
  // to re-fetch the latest data from the backend, which will then update
  // and re-render the TableDisplay component
  const [closet, setCloset] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    fetch('/api')
      .then((response) => response.json())
      .then((data) => {
        setCloset(data);
        setHasLoaded(true);
      })
      .catch((error) => console.log(error));
  }, []);
  // console.log(url);
  return hasLoaded ? (
    <div className="content-container">
      <Router>
        <div>
          <Link to="/closet">My Closet</Link>
          <Link to="/newitem">Add Item</Link>
        </div>

        <Switch>
          <Route path="/newitem">
            <InputDisplay />
          </Route>
          <Route path="/closet">
            <TableDisplay tableData={closet} />
          </Route>
          <Route path='/'>
            <div><h1>HANGER</h1></div>
          </Route>
        </Switch>
      </Router>
    </div>
  ) : (
    <div className="closet-container">
      <p>Still loading...</p>
    </div>
  );
};

export default ClosetContainer;
