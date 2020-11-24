import React, { useState, useEffect } from 'react';
import ItemDescribe from './ItemDescribe';
import ItemView from './ItemView';

const ItemCard = () => {
  const [visible, setVisibility] = useState(false);
  const [sticky, setSticky] = useState(false);

  return (
    <div
      className="item-card"
      onMouseEnter={() => setVisibility(true)}
      onMouseLeave={() => setVisibility(false)}
      onClick={() => setSticky(!sticky)}
    >
      {visible || sticky ? <ItemDescribe /> : <ItemView />}
    </div>
  );
};

export default ItemCard;
