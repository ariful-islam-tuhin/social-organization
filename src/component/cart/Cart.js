import React from "react";
import "./Cart.css";

const Cart = (props) => {
  console.log(props.cart);
  const { cart } = props;
  let total = 0;
  for (const person of cart) {
    total = total + person.salary;
  }

  const name = cart.map((personName) => (
    <li key={personName.id}>{personName.name}</li>
  ));
  console.log(name);
  return (
    <div className="card">
      <h2>Show details</h2>
      <h5>added person: {cart.length}</h5>
      <h5>Total Salary:{total}</h5>
      <br />
      <h5>
        <ol>{name}</ol>
      </h5>
    </div>
  );
};

export default Cart;
