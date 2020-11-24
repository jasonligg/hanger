import React, { createContext, useState } from 'react';

export const ClosetContext = createContext();

const ClosetProvider = ({ children }) => {
  const initialState = {
    itemName: '',
    itemClothingType: 'Tops/Shirts/Tees',
    itemColor: 'Black',
    itemImage:
      'https://res.cloudinary.com/dfu8r9blo/image/upload/v1605922447/HangerImages/no_uploaded_cu28uy.png',
  };
  const [closet, setCloset] = useState(initialState);

  return (
    <ClosetContext.Provider value={[closet, setCloset]}>
      {children}
    </ClosetContext.Provider>
  );
};

export default ClosetProvider;
