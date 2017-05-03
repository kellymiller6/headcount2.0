import React from 'react';
import Card from './Card.js'

const Cards = ({ districtData }) => {
    return(
      <div>
        All the data
        { Object.keys(districtData).map((district, index) => {
          return (
          <div key={index} >
            <Card district={ district }
                  data={ districtData[district].data }/>
          </div>
          )
        })}
      </div>
    )
}

export default Cards;
