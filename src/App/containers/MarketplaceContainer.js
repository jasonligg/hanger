import React, { useState, useEffect } from 'react';
import Market from '../components/Market';

const MarketplaceContainer = () => {
  const [market, setMarkets] = useState();
  const [hasLoaded, setHasLoaded] = useState(false);

  /*upon component mount, make fetch request to get all clothes that don't belong to user 
  which are marked as available*/
  useEffect(() => {
    fetch('/api/marketplace')
      .then((response) => response.json())
      .then((data) => {
        setMarkets(data);
        setHasLoaded(true);
      })
      //catch all other errors
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
