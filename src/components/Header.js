import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";

export const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="https://www.f4u-foodforu.com/images/logo.png"
      alt="logo"
    />
  </a>
);

// Composing Comopnentss
const Header = () => {
  return (
    <div style={{ backgroundColor: "lightgray" }} className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
