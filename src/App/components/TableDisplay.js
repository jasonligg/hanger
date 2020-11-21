import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Row from './Row';

const TableDisplay = ({ tableData }) => {
  console.log(tableData);
  const rows = [];
  for (let i = 0; i < tableData.length; i++) {
    console.log(tableData[i]);
    rows.push(
      <Row
        key={`Row-${i}`}
        id={`Row-${i}`}
        item={tableData[i].itemname}
        type={tableData[i].itemclothingtype}
        color={tableData[i].itemcolor}
        image={tableData[i].itemimage}
      />
      // potential last prop is the active/donate status for the article of clothing
    );
  }

  console.log(rows);

  return (
    <div className="TableDisplay">
      <div className="columnTitles">
        <span>Item</span>
        <span>Type</span>
        <span>Color</span>
        <span>Image</span>
        <span>Active/Donate</span>
        <span>Worn</span>
      </div>
      <div className="rows">{rows}</div>
    </div>
  );
};

export default TableDisplay;
