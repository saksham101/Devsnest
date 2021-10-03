import React from "react";
import Context from "../Context/UserContext";
const Home = () => {
  const user = React.useContext(Context);
  return (
    <div className="home">
      <h2>Login to access Profile and Dashboard</h2>
      <button
        onClick={() => {
          user.toggleLoading().then(user.toggleLog);
        }}
      >
        {user.loading ? "Loading" : user.loggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Home;
