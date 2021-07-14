import React, { createContext, useState } from 'react';

export const ItemContext = createContext();

/*
this context it unused in the application as of now
*/

const ItemProvider = ({ children }) => {
  const [itemData, setItemData] = useState({});

  return (
    <ItemContext.Provider value={[itemData, setItemData]}>
      {children}
    </ItemContext.Provider>
  );
};

export default ItemProvider;
