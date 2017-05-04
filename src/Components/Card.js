import React from 'react';
import Year from './Year.js'
import '../styles/card.css';

const Card = ({ district, data }) => {
    return(
      <div className='district-card'>
        <h4> { district } </h4>
        <Year years={ data } />
      </div>
    )
}

export default Card;
