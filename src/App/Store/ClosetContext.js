import React, { createContext, useState } from 'react';

export const ClosetContext = createContext();

const ClosetProvider = ({ children }) => {
  const [closet, setCloset] = useState([]);

  return (
    <ClosetContext.Provider value={[closet, setCloset]}>
      {children}
    </ClosetContext.Provider>
  );
};

export default ClosetProvider;
