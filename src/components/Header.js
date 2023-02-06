import React, { useState } from "react";
// import ReactDOM, { createRoot } from "react-dom/client";
import logo from "../assets/img/logo.jpg";
import { Link } from "react-router-dom";

const loggedInUser = () => {
  // API call to check authentication
  return true;
};

export const Title = () => (
  <a href="/">
    <img
      className="logo"
      // src="https://www.f4u-foodforu.com/images/logo.png"
      src={logo}
      alt="logo"
    />
  </a>
);

// Composing Comopnentss
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [title, setTitle] = useState("Food For U");
  return (
    <div style={{ backgroundColor: "lightgray" }} className="header">
      <Title />
      <h1>{title}</h1>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/About">About Us</Link>
          </li>
          <li>
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/Cart">Cart</Link>
          </li>
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
        </ul>
      </div>

      {
        // write only javascript expression not statement
        // ((a = 10), console.log(a))
        isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        )
      }
    </div>
  );
};

export default Header;
