import React from 'react';

/*
Renders the image side of the image card
*/

const ItemView = ({ image }) => {
  return (
    <div className="item-view">
      <img src={image} className="item-image" />
    </div>
  );
};

export default ItemView;
