import React from "react";
import { Redirect } from "react-router-dom";
import Context from "../Context/UserContext";

const Profile = () => {
  const user = React.useContext(Context);
  return (
    <>
      {user.loggedIn ? (
        <div className="profile">
          <h1>Profile</h1>
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default Profile;
