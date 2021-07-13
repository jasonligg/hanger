import React, { useState, useEffect } from 'react';
import Market from '../components/Market';

/*
MarketplaceContainer is the top-level component that holds
all of the components at the endpoint '/marketplace'

we make a fetch request to our backend to receive 
all of the items inside of the user's closet

We pass the data to a single component 'Market'
*/


const MarketplaceContainer = () => {
  const [market, setMarkets] = useState();
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    fetch('/api/marketplace')
      .then((response) => response.json())
      .then((data) => {
        setMarkets(data);
        setHasLoaded(true);
      })
      .catch((error) => console.log(error));
  }, []);

  return hasLoaded ? (
    <div>
      <div className="content-nav"></div>
      <div className="content-container">
        <h1>Marketplace</h1>
        <Market marketData={market} />
      </div>
    </div>
  ) : (
    <div className="content-container">
      <p>Still loading...</p>
    </div>
  );
};
export default MarketplaceContainer;
