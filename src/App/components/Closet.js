import React from 'react';

import ItemCard from './ItemCard';

const Closet = ({ tableData }) => {
  const cards = tableData.map((item, i) => <ItemCard key={`card${i}`} id={item._id} item={item} />)
  return <div className="closet">{cards}</div>;
};

export default Closet;
