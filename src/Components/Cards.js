import React from 'react';
import  Card  from './Card.js'
import '../styles/cards.css';
import PropTypes from 'prop-types';

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

Cards.propTypes = {
  district: PropTypes.string,
  handleSelect: PropTypes.func,
  repository: PropTypes.object,
  compareArray: PropTypes.array
};

export default Cards;
