import React from "react";
import { Redirect } from "react-router-dom";
import Context from "../Context/UserContext";

const Dashboard = () => {
  const user = React.useContext(Context);
  return (
    <>
      {user.loggedIn ? (
        <div className="dashboard">
          <h1>Dashboard</h1>
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default Dashboard;
