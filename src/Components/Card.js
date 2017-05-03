import React from 'react';


const Card = ({ location, year }) => {
  return (
    <section>
      <div>
      
        <h4 >District: { location }</h4>
        <p > : { year }</p>
      </div>
    </section>
  );
};

export default Card;
