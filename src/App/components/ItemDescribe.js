import React, { useState, useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';

import { ItemContext } from '../Store/ItemContext';

const ItemDescribe = ({ item }) => {
  const [itemData, setItemData] = useContext(ItemContext);
  const { register, handleSubmit } = useForm({
    mode: 'onChange',
    defaultValues: item,
  });

  useEffect(() => {
    console.log('itemData change');
    return () => {
      console.log('itemdata dismount--->');
    };
  }, [itemData]);

  useEffect(() => {
    console.log('component did mounted');
    return () => {
      const body = { ...item, ...itemData };
      console.log('bodyYODY', body);
      /*
      fetch('/api/updateItem', {
        method: 'POST',
        headers: {
          Content-Type: 'application/json',
        }
        body: JSON.stringify(body)
      })
      */
    };
  }, []);

  const onSubmit = (data) => {
    console.log(data);
    const { itemname, itemclothingtype, itemcolor, status } = data;
    // worn true or false ?
    const update = {
      ...item,
      itemname,
      itemclothingtype,
      itemcolor,
      worn,
      status: status == '0' ? 'inactive' : 'active',
    };

    setItemData(update);
  };

  return (
    <div className="item-describe">
      <form onBlur={handleSubmit(onSubmit)} autoComplete="off">
        <input autoComplete="false"></input>
        <input type="text" ref={register} name="itemname" />
        <input type="text" ref={register} name="itemclothingtype" />
        <input type="text" ref={register} name="itemcolor" />
        <input
          type="range"
          ref={register}
          name="status"
          min="0"
          max="10"
          step="10"
        />
        <input type="" ref={register} name="last_worn" />
      </form>
    </div>
  );
};

export default ItemDescribe;
