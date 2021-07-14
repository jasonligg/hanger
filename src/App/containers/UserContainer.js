import React, { useState, useEffect, useContext } from 'react';
import { ClosetContext } from '../Store/ClosetContext';
import { UserContext } from '../Store/UserContext';

/*
UserContainer is the wrapper that holds the user's profile data... 
includes Profile Picture and name

Here we make a fetch to our Server with the ID we received 
as a cookie which will return all of the user's information
that was saved in our database.
*/

const UserContainer = () => {
  const [closet, setCloset] = useContext(ClosetContext);
  const [user, setUser] = useContext(UserContext);
  const [loaded, setLoaded] = useState(false);
  console.log('user closet: ', closet);
  useEffect(() => {
    fetch(`/api/user/${user.verified}`)
      .then((response) => response.json())
      .then((data) => {
        setUser({ ...user, data });
        setLoaded(true);
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
        <img id="user-pic" src={user.data[0].profile_image} />
      </div>
      <h3>Total Items in Closet:</h3>
      <h3>{closet ? closet.length : 0}</h3>
      <h3>Total Items :</h3>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default UserContainer;
