import React, { useState, useEffect } from 'react';
import MarketCard from './MarketCard';

/*
Iterates through marketData and returns MarketCard components 
for each item. 

This component is a little too abstracted, but it leaves room for scaling
*/

const Market = ({ marketData }) => {
  const cards = marketData.map((item, i) => (
    <MarketCard key={`mkItem${i}`} id={item._id} item={item} />
  ));
  return <div className="closet">{cards}</div>;
};

export default Market;
