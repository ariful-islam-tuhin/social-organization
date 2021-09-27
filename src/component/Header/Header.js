import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <nav className="navigation">
        <a href="/Home">Home</a>
        <a href="/About">About</a>
        <a href="/facebook"> facebook</a>
        <a href="/Email"> Email</a>
        <input type="text" placeholder="search" />
      </nav>
      <h1>Social Organization</h1>
      <p>
        Social organization (division of labor) is a major influence on social
        behavior and is the link between human nature reacting to environmental
        conditions (natural, demographic, economic, cultural), and overt social
        behavior patterns; and consciousness
      </p>
      <h4>Budget: $10 milion</h4>
    </div>
  );
};

export default Header;
