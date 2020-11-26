import React, { useState } from 'react';

import ItemDescribe from './ItemDescribe';
import ItemView from './ItemView';

/*
Renders the container component for each Card
*/

const ItemCard = ({ id, item }) => {
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
        <ItemDescribe item={item} id={id} />
      ) : (
        <ItemView image={itemimage} id={id} />
      )}
    </div>
  );
};

export default ItemCard;
