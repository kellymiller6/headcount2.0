import React from 'react';
import Year from './Year.js'

const Card = ({ district, data }) => {
    return(
      <div>
        <h4> District: { district } </h4>
        <Year years={ data } />
      </div>
    )
}

export default Card;
