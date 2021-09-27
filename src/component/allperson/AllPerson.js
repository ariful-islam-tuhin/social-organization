import React, { useState, useEffect } from "react";
import SinglePerson from "../SinglePerson/SinglePerson";
import Cart from "../cart/Cart";
import "./AllPerson.css";

const AllPerson = () => {
  const [persons, setPersons] = useState([]);
  const [cart, setCart] = useState([]);
  // const [salary, setSalary] = useState([]);

  useEffect(() => {
    fetch("./datas.JSON")
      .then((res) => res.json())
      .then((data) => setPersons(data));
  }, []);

  const handleAddToCart = (person) => {
    const newCart = [...cart, person];
    setCart(newCart);
    // const newSalary = [...cart, person];
    // setSalary(newSalary);
  };

  return (
    <div>
      <div className="AllPersonContainer">
        <div className="single-container">
          {persons.map((person) => (
            <SinglePerson
              key={person.id}
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
