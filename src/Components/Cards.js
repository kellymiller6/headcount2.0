import React from "react";
import Card from "./Card.js";
import "../styles/cards.css";

const Cards = ({ districtData, selectedDistrict1, selectDistrict }) => {
  return (
    <div className="card-container">
      {Object.keys(districtData).map((district, index) => {
        return (
          <div key={index}>
            <Card
              district={districtData[district].location}
              data={districtData[district].data}
              selectedDistrict1={selectedDistrict1}
              selectDistrict={selectDistrict}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
