import React from 'react';
import Card from './Card.js'
import '../styles/cards.css';

const Cards = ({ districtData }) => {
    return(
      <div className='card-container'>
        { Object.keys(districtData).map((district, index) => {
          return (
          <div key={index} >
            <Card district={ districtData[district].location }
                  data={ districtData[district].data }/>
          </div>
          )
        })}
      </div>
    )
}

export default Cards;
