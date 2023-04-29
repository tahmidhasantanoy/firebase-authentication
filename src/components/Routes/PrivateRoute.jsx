import React, { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Loading ...</div>;
  }
  if (user) {
    //user ==  truthy value
    return children;
  } 
  else {
    console.log('navigate');
    <Navigate to="login" replace={true}></Navigate>;
  }
{/* <Navigate to="/login"></Navigate> */}
};

export default PrivateRoute;
