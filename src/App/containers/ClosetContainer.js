import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import InputDisplay from '../components/InputDisplay';
import TableDisplay from '../components/TableDisplay';

const ClosetContainer = () => {
  // declare an initialState object
  // set state with react hooks

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

  const initialState = {
    tableData: [],
  };
  const [closet, setCloset] = useState(initialState);

  useEffect(() => {
    fetch('/')
      .then((data) => data.json())
      .then((parseData) => {
        setCloset({ ...closet, tableData: parseData });
      });
  }, []);

  return (
    <div className="ClosetContainer">
      <InputDisplay />
      <TableDisplay />
    </div>
  );
};

export default ClosetContainer;
