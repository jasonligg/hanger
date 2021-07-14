import React, { createContext, useState } from 'react';

export const ClosetContext = createContext();

/*
This context was prepared to maintain a global state given a users closet
*/

const ClosetProvider = ({ children }) => {
  const [closet, setCloset] = useState();

  return (
    <ClosetContext.Provider value={[closet, setCloset]}>
      {children}
    </ClosetContext.Provider>
  );
};

export default ClosetProvider;
