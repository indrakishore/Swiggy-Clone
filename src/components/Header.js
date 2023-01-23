import React, { useState } from "react";
import ReactDOM, { createRoot } from "react-dom/client";

const loggedInUser = () => {
  // TODo: API call to check authentication
  return true;
};

export const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="https://www.f4u-foodforu.com/images/logo.png"
      alt="logo"
    />
    {/* <h1>Food For U</h1> */}
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
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>

      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
