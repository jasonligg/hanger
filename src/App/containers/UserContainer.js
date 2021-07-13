import React, { useState, useEffect, useContext } from 'react';

import { UserContext } from '../Store/UserContext';

/*
UserContainer is the wrapper that holds the user's profile data... 
includes Profile Picture and name

Here we make a fetch to our Server with the ID we received 
as a cookie which will return all of the user's information
that was saved in our database.
*/

const UserContainer = () => {
  const [user, setUser] = useContext(UserContext);
  const [loaded, setLoaded] = useState(false);

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
