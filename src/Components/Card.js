import React from 'react';
import Year from './Year.js'
import '../styles/card.css';

const Card = ({ district, data, handleSelect, repository, compareArray }) => {
  let cssClass = repository.selectionId(district, compareArray);
    return(
      <div id={location}
              className={`district-card ${cssClass}`}
              onClick={() => { handleSelect(district) } }>
        <h4> { district } </h4>
        <Year years={ data } />
      </div>
    )
}

export default Card;
