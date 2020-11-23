import React from 'react';

// //#region commentzz

// import { BrowserRouter as Router, Route, Link, Switch }
//  from 'react-router-dom';
// import InputDisplay from '../components/InputDisplay';
// import TableDisplay from '../components/TableDisplay';
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

  // const [closet, setCloset] = useState([]);
  // const [hasLoaded, setHasLoaded] = useState(false);

  // useEffect(() => {
  //   fetch('/api')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setCloset(data);
  //       setHasLoaded(true);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  // return hasLoaded ? (
  //   <div className="ClosetContainer">
  //     <InputDisplay />
  //     <TableDisplay tableData={closet} />
  //   </div>
  // ) : (
  //   <div className="ClosetContainer">Still loading...</div>
  // );
  //  #endregion
  return (
    <div className="closet-container">
      <h1>CLOSET CONTAINER HERE</h1>
    </div>
  );
};

export default ClosetContainer;
