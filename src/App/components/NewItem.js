import React, { useState } from 'react';
import { useForm } from 'react-hook-form';


/*
unaddressed, needs reformating, could be refactored with react-hook-form

notes from first phase:
when updating state, we are putting into the userInput state object
key-value pairs. the four pairs are:
itemName: String -> user types into texbar
itemClothingType: String  -> user selects from dropdown bar
itemColor: String -> user selects from dropdown bar
itemImage: File API integration -> user selects from file from device storage
*/


const NewItem = () => {
  const initialState = {
    itemName: '',
    itemClothingType: 'Tops/Shirts/Tees',
    itemColor: 'Black',
    itemImage:
      'https://res.cloudinary.com/dfu8r9blo/image/upload/v1605922447/HangerImages/no_uploaded_cu28uy.png',
  };
  const [closetItem, setClosetItem] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data, '<---- data');

  // const handleSubmit = async () => {
  //   try {
  //     setLoading(true);
  //     // console.log(JSON.stringify(userInput));
  //     const response = await fetch('/api', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(closet),
  //     });
  //     setLoading(false);
  //     setClosetItem(initialState);
  //   } catch (error) {
  //     console.log(error);
  //     setLoading(false);
  //   }
  // };

  const handleImageUpload = async (event) => {
    const [file] = event.target.files;
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'hanger');
    setLoading(true);
    try {
      const response = await fetch(
        'https://api.cloudinary.com/v1_1/dfu8r9blo/image/upload',
        {
          method: 'POST',
          body: data,
        }
      );
      const { url } = await response.json();
      setClosetItem({ ...closetItem, itemImage: url });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="InputDisplay">
      <p id="addtoCloset">Add to Closet</p>
      <p id="uploadImage">Upload Image</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputConsole">
          <input
            id="upload-file"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            multiple="false"
          />
          <input
            type="text"
            onChange={(event) =>
              setClosetItem({ ...closetItem, itemName: event.target.value })
            }
          />
          <button id="closetButton" type="button" onClick={handleSubmit}>
            Submit
          </button>
        </div>

        <div className="dropDowns">
          <h3>Select Color</h3>
          <select
            className="color"
            value={closetItem.itemColor}
            onChange={(event) => {
              setClosetItem({ ...closetItem, itemColor: event.target.value });
            }}
          >
            <option value="Black">Black</option>
            <option value="White">White</option>
            <option value="Red">Red</option>
            <option value="Pink">Pink</option>
            <option value="Green">Green</option>
            <option value="Blue">Blue</option>
            <option value="Yellow">Yellow</option>
            <option value="Purple">Purple</option>
            <option value="Orange">Orange</option>
            <option value="Brown/Tan">Brown</option>
            <option value="Grey">Grey</option>
          </select>
          <h3>Select Type</h3>
          <select
            className="clothingType"
            value={closetItem.itemClothingType}
            onChange={(event) =>
              setClosetItem({
                ...closetItem,
                itemClothingType: event.target.value,
              })
            }
          >
            <option value="Tops/shirts/Tees">Tops/Shirts/Tees</option>
            <option value="Pants">Pants</option>
            <option value="Skirts">Skirt</option>
            <option value="Dresses">Dress</option>
            <option value="Outerwear">Outerwear</option>
            <option value="Swim">Swim</option>
            <option value="Shoes">Shoes</option>
            <option value="Hats">Hats</option>
            <option value="Accessories">Accessories</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default NewItem;
