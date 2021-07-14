import React from 'react';

import ItemCard from './ItemCard';

/*
Iterates through the closetData and returns an ItemCard 
for each item in a users closet.
*/

const Closet = ({ closetData }) => {
  const cards = closetData.map((item, i) => (
    <ItemCard key={`card${i}`} id={item._id} item={item} />
  ));
  return <div className="closet">{cards}</div>;
};

export default Closet;
