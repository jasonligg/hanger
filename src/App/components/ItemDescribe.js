import React, { useState, useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Rating } from '@material-ui/lab';
import { Typography, Box, Button, makeStyles } from '@material-ui/core';
import { ItemContext } from '../Store/ItemContext';

/*
References the ItemContext for a default state
Forms created with 'react-hook-form' module
This was never linked wtih the backend
It is set up to fetch upon dismount which
may or may not fire too many times 
*/
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
const ItemDescribe = ({ item }) => {
  const classes = useStyles();

  const [value, setValue] = React.useState(1);

  const [itemData, setItemData] = useContext(ItemContext);
  const { register, handleSubmit } = useForm({
    mode: 'onChange',
    defaultValues: item,
  });

  // 'api/delete/id'
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
    const {
      itemname,
      itemclothingtype,
      itemcolor,
      donation_status,
      worn,
    } = data;
    // worn true or false ?
    const update = {
      ...item,
      itemname,
      itemclothingtype,
      itemcolor,
      worn,
      donation_status: donation_status == '0' ? 'inactive' : 'active',
    };

    setItemData(update);
  };

  return (
    <div className="item-describe">
      <form onBlur={handleSubmit(onSubmit)} autoComplete="off">
        {/* <input
          autoComplete="false"
          type="text"
          ref={register}
          name="itemclothingtype"
        /> */}
        <input
          autoComplete="false"
          type="text"
          ref={register}
          name="itemname"
        />
        {/* <input
          autoComplete="false"
          type="text"
          ref={register}
          name="itemcolor"
        /> */}
        {/* <input
          type="range"
          ref={register}
          name="donation_status"
          min="0"
          max="10"
          step="10"
        /> */}
        <div>
          <Box
            id="worn-today"
            component="fieldset"
            mb={3}
            borderColor="transparent"
          >
            <Typography component="legend">Rating</Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </Box>
        </div>

        <div>
          {/* <label htmlFor="worn">worn today</label> */}
          <div className={classes.root}>
            <Button ref={register} variant="contained" color="primary">
              Worn Today
            </Button>
          </div>
          {/* <button ref={register} name="worn" value="true">
            Worn Today
          </button> */}
        </div>
      </form>
    </div>
  );
};

export default ItemDescribe;
