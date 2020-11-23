import React, { useContext } from 'react';
import { UserContext } from '../App';

const UserContainer = () => {
  const [user] = useContext(UserContext);
  const { nickName, birthday, gender, location, interests } = user;
  console.log(user);
  return (
    <div className="user-container">
      <h1>{`Hey ${nickName}!`}</h1>
      <div id="temp">
        <p>profile-pic</p>
      </div>
      <h2>Profile:</h2>
      <p>{gender}</p>
      <p>{`birthday: ${birthday.month}/${birthday.day}/${birthday.year}`}</p>
      <p>{location}</p>
      <p>{interests}</p>
    </div>
  );
};

export default UserContainer;
