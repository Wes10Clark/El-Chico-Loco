import React from "react";
import Mexico from "../Assets/mexico.png";

const Heading = () => {
  return (
    <div className="bg-dark pt-4 opacity-75 pb-4">
      <img
        className="mx-auto d-block pb-4"
        src={Mexico}
        alt="image of mexico"
      />
      <h2 className="text-white text-center">
        {" "}
        <span className="text-danger">El</span>{" "}
        <span className="text-success">Chico</span>{" "}
        <span className="text-danger">Loco</span>
      </h2>
      <p className="text-warning text-center">
        Come eat with us and go crazy for our food
      </p>
    </div>
  );
};

export default Heading;
