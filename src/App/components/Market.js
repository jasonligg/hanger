import React, { useState, useEffect } from 'react';
import ItemCard from './ItemCard';

const Market = () => {
  const demo = [];
  for (let i = 0; i < 15; i += 1) {
    demo.push(<ItemCard />);
  }

  // const cards = demo.map((x) => <ItemCard />);
  // console.log(rows);
  return <div className="closet">{demo}</div>;
};

export default Market;
