import React, { useState } from 'react';

const Row = ({ id, item, type, color, image }) => {
  return (
    <div id={id} className="row">
      {item}, {type}, {color}, <img src={image} className="rowImage" alt="" />
    </div>
  );
};

export default Row;
