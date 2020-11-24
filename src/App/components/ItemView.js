import React, { useState, useEffect } from 'react';

const ItemView = ({ image }) => {
  return (
    <div className="item-view">
      <img src={image} className="item-image" />
      {/* <h1>Item View</h1>
      <p>img</p> */}
    </div>
  );
};

export default ItemView;
