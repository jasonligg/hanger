import React, { useState, useEffect, useContext } from 'react';

import { UserContext } from '../Store/UserContext';

const UserContainer = () => {
  const [user, setUser] = useContext(UserContext);
  const [loaded, setLoaded] = useState(false);
  // const id = user.verified;
  // const { nickName, birthday, gender, interests } = user;

  useEffect(() => {
    fetch(`/api/user/${user.verified}`)
      .then((response) => response.json())
      .then((data) => {
        setUser({ ...user, data })
        setLoaded(true)
      })
      .catch((e) => console.log(e));
    return () => {
      console.log('unmount');
    };
  }, []);

  console.log(user);
  return loaded ? (
    <div className="user-container">
      <h1>{`Hey ${user.data[0].display_name_1}!`}</h1>
      <div className="profile-pic">
        <img src={user.data[0].profile_image} />
      </div>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default UserContainer;
