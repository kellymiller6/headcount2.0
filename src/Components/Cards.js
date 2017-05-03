import React from 'react';
import Card from './Card';

const Cards = ({ districtData }) => {
    return(
      <div>
        <div>
        All the data
        { Object.keys(districtData).map((district, index) => {
          return(
            <div key={index}>
            // <Card location = {district.Location}


            />

            </div>
          )
        })}
        </div>
      </div>
    )
}

export default Cards;
