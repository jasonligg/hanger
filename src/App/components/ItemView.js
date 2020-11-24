import React, { useState, useEffect } from 'react';

const ItemView = ({ image }) => {
  return (
    <div className="item-view">
      <img src={image} className="item-image" />
    </div>
  );
};

export default ItemView;
