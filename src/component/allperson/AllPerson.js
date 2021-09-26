import React, { useState, useEffect } from "react";
import SinglePerson from "../SinglePerson/SinglePerson";
import Cart from "../cart/Cart";
import "./AllPerson.css";
const AllPerson = () => {
  const [persons, setpersons] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("datas.JSON").then((res) =>
      res.json().then((data) => setpersons(data))
    );
  }, []);

  const handleAddToCart = (person) => {
    const newCart = [...cart, person];
    setCart(newCart);
  };
  return (
    <div>
      <h1 className="header">Social Organization</h1>
      <p>
        Social organization (division of labor) is a major influence on social
        behavior and is the link between human nature reacting to environmental
        conditions (natural, demographic, economic, cultural), and overt social
        behavior patterns; and consciousness
      </p>
      <h4>Budget: one milion</h4>
      <div className="AllPersonContainer">
        <div className="single-container">
          {persons.map((person) => (
            <SinglePerson
              person={person}
              handleAddToCart={handleAddToCart}
            ></SinglePerson>
          ))}
        </div>

        <div className="cart-container">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};
export default AllPerson;
