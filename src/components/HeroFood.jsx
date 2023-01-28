import React from "react";
import MexicanFood from "../Assets/mexicanfood.jpg";
import Fajitas from "../Assets/fajitas.jpg";

const HeroFood = () => {
  return (
    <div className="bg-dark opacity-75">
      <div className="d-flex justify-content-around">
        <img
          src={MexicanFood}
          alt="mexican food"
          style={{ width: "30%" }}
        ></img>
        <img src={Fajitas} alt="fajitas" style={{ width: "40%" }}></img>
      </div>
      <div className="d-flex justify-content-around">
        <h4 className="text-danger">Our Loco Enchiladas</h4>
        <h4 className="text-success">Our Carne Placa Especial </h4>
      </div>
    </div>
  );
};

export default HeroFood;
