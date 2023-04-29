import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user.displayName);

  const handleLogOut = () => {
    logOut()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        {user && (
          <span>
            {user.email} <button onClick={handleLogOut}>Sign Out</button>
          </span>
        )}
      </div>
    </nav>
  );
};

export default Header;
