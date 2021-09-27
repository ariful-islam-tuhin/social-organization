import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "./SinglePerson.css";

const element = <FontAwesomeIcon icon={faCartPlus} />;

const SinglePerson = (props) => {
  const { id, name, address, salary, phone, picture } = props.person;
  return (
    <div className="singlePerson">
      <div>
        <img className="sImage" src={picture} alt="" />
        <h3>{name}</h3>
        <p>Id:{id}</p>
        <p>address: {address}</p>
        <p>Salary:{salary}</p>
        <p> Phone:{phone}</p>
        <button
          onClick={() => props.handleAddToCart(props.person)}
          className="button-design"
        >
          {element} add to card
        </button>
      </div>
    </div>
  );
};

export default SinglePerson;
