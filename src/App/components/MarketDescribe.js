import React, { useState, useEffect, useContext } from 'react';

/*
The back of each Market Card, has been neglected
is in need of item description, and a button to msg the user
*/

const MarketDescribe = ({ item }) => {
  return (
    <div className="item-describe">
      {/* <p>{item.itemname}</p>
      <p>{item.itemclothingtype}</p>
      <p>{item.itemcolor}</p>
      <div id="contact-button">
        <h3>Interested?</h3>
        <button
          onPress={() => Linking.openURL(`mailto:${item.email}`)}
          title={`Interest in Markeplace item: ${itemname}`}
        >
          {' '}
          Message User{' '}
        </button>
      </div> */}
    </div>
  );
};

export default MarketDescribe;
