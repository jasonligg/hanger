import React, { useState, useEffect } from 'react';
import MarketCard from './MarketCard';

const Market = ({ marketData }) => {
  const cards = marketData.map((item, i) => (
    <MarketCard key={`mkItem${i}`} id={item._id} item={item} />
  ));
  return <div className="closet">{cards}</div>;
};
//loop through items that are available and push them into item card with item information
//reference closet
export default Market;
