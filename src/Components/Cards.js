import React from 'react';


const Cards = ({ districtData }) => {
    return(
      <div>
        <div>
        All the data
        { Object.keys(districtData).map((district, index) => {
          return(
            <div key={index}>
              { district }
            </div>
          )
        })}
        </div>
      </div>
    )
}

export default Cards;
