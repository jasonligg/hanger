import React, { useState } from 'react';
import Row from './Row';
import ItemCard from './ItemCard';

const Closet = ({ tableData }) => {
  // console.log(tableData);
  // const rows = [];
  // for (let i = 0; i < tableData.length; i++) {
  //   console.log(tableData[i]);
  //   rows.push(
  //     <Row
  //       key={`Row-${i}`}
  //       id={`Row-${i}`}
  //       item={tableData[i].itemname}
  //       type={tableData[i].itemclothingtype}
  //       color={tableData[i].itemcolor}
  //       image={tableData[i].itemimage}
  //     />
  //     // potential last prop is the active/donate status for the article of clothing
  //   );
  // }
  const demo = [];
  for (let i = 0; i < 15; i += 1) {
    demo.push(<ItemCard />);
  }

  // const cards = demo.map((x) => <ItemCard />);
  // console.log(rows);
  return (
    <div className="closet">
      
      {demo}
    </div>
  );
  // return (
  //   <div className="Closet">
  //     <div className="columnTitles">
  //       <span>Item</span>
  //       <span>Type</span>
  //       <span>Color</span>
  //       <span>Image</span>
  //       <span>Active/Donate</span>
  //       {/* <span>Worn</span> */}
  //     </div>
  //     <div className="rows">{rows}</div>
  //   </div>
  // );
};

export default Closet;
