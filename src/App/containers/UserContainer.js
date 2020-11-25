import React, { useContext } from 'react';

import { UserContext } from '../Store/UserContext';

const UserContainer = () => {
  const [user] = useContext(UserContext);
  // const { nickName, birthday, gender, interests } = user;

    // useEffect(() => {
  //   if (loggedIn) {
  //     fetch(`/api/user/${id}`)
  //       .then((response) => response.json())
  //       .then((data) => setUser(data));
  //   }
  //   return () => {
  //     console.log('unmount');
  //   };
  // }, [loggedIn]);
  console.log(user);
  return (
    <div className="user-container">
      <h1>USER</h1>
      {/* <h1>{`Hey ${nickName}!`}</h1>
      <div id="temp">
        <p>profile-pic</p>
      </div>
      <div className="actions"></div>
      <h2>Profile:</h2>
      <p>{gender}</p>
      <p>{`birthday: ${birthday.month}/${birthday.day}/${birthday.year}`}</p>
      <p>{interests}</p> */}
    </div>
  );
};

export default UserContainer;
