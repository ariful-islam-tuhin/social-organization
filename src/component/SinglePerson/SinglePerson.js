import React from "react";
import "./SinglePerson.css";

const SinglePerson = (props) => {
  const { name, picture, age, gender, company, email } = props.person;
  return (
    <div className="singlePerson">
      <div>
        <img className="sImage" src={picture} alt="" />
        <h3>{name}</h3>
        <p>
          age:{age}&nbsp;&nbsp; gender:{gender}
        </p>
        <p>company: {company}</p>
        <p>{email}</p>
        <button
          onClick={() => props.handleAddToCart(props.person)}
          className="button-design"
        >
          add to card
        </button>
      </div>
    </div>
  );
};

export default SinglePerson;
