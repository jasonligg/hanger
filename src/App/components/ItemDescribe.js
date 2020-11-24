import React, { useState, useEffect, useContext } from 'react';

import { useForm } from 'react-hook-form';
import { ItemContext } from '../Store/ItemContext';

const ItemDescribe = ({ item }) => {
  const [itemData, setItemData] = useContext(ItemContext);
  const [times_worn, setTimes_worn] = useState(item.times_worn);
  const [last_worn, setLast_worn] = useState(item.last_worn);
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

  const onSubmit = async (data) => {
    const { itemname, itemclothingtype, itemcolor, status } = data;
    const update = {
      ...item,
      itemname,
      itemclothingtype,
      itemcolor,
      status,
      times_worn,
      last_worn,
    };

    setItemData(update);
  };

  const handleWear = () => {
    setTimes_worn(times_worn + 1);
    setLast_worn(new Date());
  };

  return (
    <div className="item-describe">
      <form onBlur={handleSubmit(onSubmit)}>
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
        <input
          type="button"
          name="timesworn"
          ref={register}
          onClick={handleWear}
        />
      </form>
    </div>
  );
};

export default ItemDescribe;
