import React from 'react';
import  Card  from './Card.js'
import '../styles/cards.css';

const Cards = ({ districtData, repository, handleSelect, compareArray }) => {
    return(
      <div className='card-container'>
        { Object.keys(districtData).map((district, index) => {
          return (
          <div key={index} >
            <Card district={ districtData[district].location }
                  data={ districtData[district].data }
                  handleSelect={ handleSelect }
                  repository={repository}
                  compareArray={compareArray}/>
          </div>
          )
        })}
      </div>
    )
}

export default Cards;
