import React from 'react';
import Year from './Year.js'


const Cards = ({ districtData }) => {
    return(
      <div>
        <div>
        All the data
        { Object.keys(districtData).map((district, index) => {
          return(
            <div key={index}>
              <h4> District: { district } </h4>
              <Year years={districtData[district].data}
               />
            </div>
          )
        })}
        </div>
      </div>
    )
}

export default Cards;
