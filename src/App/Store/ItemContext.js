import React, { createContext, useState } from 'react';

export const ItemContext = createContext();

const ItemProvider = ({ children }) => {
  const [itemData, setItemData] = useState({});

  return (
    <ItemContext.Provider value={[itemData, setItemData]}>
      {children}
    </ItemContext.Provider>
  );
};

export default ItemProvider;
