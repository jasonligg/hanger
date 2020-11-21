import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// when updating state, we are putting into the userInput state object
// key-value pairs. the four pairs are:
// itemName: String -> user types into texbar
// itemClothingType: String  -> user selects from dropdown bar
// itemColor: String -> user selects from dropdown bar
// itemImage: File API integration -> user selects from file from device storage
const InputDisplay = () => {
  const initialState = {
    itemName: '',
    itemClothingType: 'Tops/Shirts/Tees',
    itemColor: 'Black',
    itemImage: null,
  };
  const [userInput, setUserInput] = useState(initialState);

  const handleImageUpload = (event) => {
    const [file] = event.target.files;
    if (file) {
      console.log(file);
    }
  }

  return (
    <div className="InputDisplay">
      <p>Add to Closet</p>
      <p>Upload Image</p>
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
          setUserInput({ ...userInput, itemName: event.target.value })
        }
      />
      <button type="button">Submit</button>
      <div className="dropDowns">
        <h3>Select Color</h3>
        <select
          className="color"
          value={userInput.itemColor}
          onChange={(event) => {
            setUserInput({ ...userInput, itemColor: event.target.value });
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
          value={userInput.itemClothingType}
          onChange={(event) =>
            setUserInput({ ...userInput, itemClothingType: event.target.value })
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
    </div>
  );
};

export default InputDisplay;
