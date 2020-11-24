import React, { useState, useEffect, useContext } from 'react';

import { useForm } from 'react-hook-form';
import { ItemContext } from '../Store/ItemContext';

const ItemDescribe = ({ item }) => {
  const [itemData, setItemData] = useContext(ItemContext);
  const { register, handleSubmit } = useForm({
    mode: 'onChange',
    defaultValues: item,
  });
  console.log('outside', itemData);
  useEffect(() => {
    console.log('mounther -->', itemData);
    return () => {
      console.log('unmounted--->', itemData);
    };
  }, [itemData]);

  const onSubmit = async (data) => {
    console.log('DATA --->', data);
    const { itemname, itemclothingtype, itemcolor } = data;
    const update = { ...item, itemname, itemclothingtype, itemcolor };
    console.log('update -->', update);
    setItemData(update);
  };

  return (
    <div className="item-describe">
      <form onChange={handleSubmit(onSubmit)}>
        <input type="text" ref={register} name="itemname" />
        <input type="text" ref={register} name="itemclothingtype" />
        <input type="text" ref={register} name="itemcolor" />
        {/* <input type="submit" value="save changes" /> */}
      </form>
    </div>
  );
};

export default ItemDescribe;
