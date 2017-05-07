import React from 'react';
import Year from './Year.js'
import '../styles/card.css';

const Card = ({ district, data, handleSelect, repository, compareArray }) => {
  let cssSelectedCardClass = repository.selectedIndicator(district, compareArray);
    return(
      <div id={location}
              className={`district-card ${cssSelectedCardClass}`}
              onClick={() => { handleSelect(district) } }>
        <h4 className='district-name'> { district } </h4>
        <Year years={ data } />
      </div>
    )
}

export default Card;
