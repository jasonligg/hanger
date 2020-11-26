import React, { useState, useEffect, useContext } from 'react';

import MarketDescribe from './MarketDescribe';
import ItemView from './ItemView';

const marketCard = ({ id, item }) => {
  const [visible, setVisibility] = useState(false);
  const [sticky, setSticky] = useState(false);
  const { itemimage } = item;

  return (
    <div
      className="item-card"
      onMouseEnter={() => setVisibility(true)}
      onMouseLeave={() => setVisibility(false)}
      onClick={() => setSticky(!sticky)}
    >
      {visible || sticky ? (
        <MarketDescribe item={item} id={id} />
      ) : (
        <ItemView id={id} image={itemimage} />
      )}
    </div>
  );
};

export default marketCard;
