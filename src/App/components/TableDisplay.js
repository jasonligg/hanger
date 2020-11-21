import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Row from './Row';

const TableDisplay = ({ entries }) => {
  const rows = [];
  for (let i = 0; i < entries.length; i++) {
    rows.push(
      <Row
        key={`Row-${i}`}
        id={`Row-${i}`}
        item={entries[i].item}
        type={entries[i].type}
        color={entries[i].color}
        image={entries[i].image}
      />
      // potential last prop is the active/donate status for the article of clothing
    );
  }

  return (
    <div className="TableDisplay">
      <div className="columnTitles"></div>
      <div className="rows">{rows}</div>
    </div>
  );
};

export default TableDisplay;
