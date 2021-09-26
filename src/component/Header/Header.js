import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="navigation">
        <a href="/Home">Home</a>
        <a href="/About">About</a>
        <a href="/facebook"> facebook</a>
        <a href="/Email"> Email</a>
        <input type="text" placeholder="search" />
      </nav>
    </div>
  );
};

export default Header;
