import React from "react";
import Year from "./Year.js";
import "../styles/card.css";

const Card = ({ district, data, selectedDistrict1, selectedDistrict2, selectDistrict }) => {
  let selections = [
    selectedDistrict1 && selectedDistrict1.Location,
    selectedDistrict2 && selectedDistrict2.Location
  ];
  let selected = selections.includes(district);
  return (
    <div className={"district-card" + (selected ? " selected" : "")} onClick={selectDistrict(district)}>
      <h4> {district} </h4>
      <Year years={data} />
    </div>
  );
};

export default Card;
