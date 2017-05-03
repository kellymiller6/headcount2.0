import React from 'react';


const Card = ({ location, year, yearlydata }) => {
  return (
    <section>
      <div>
        <h4 >District: { location }</h4>
        <p > : { year } </p>
        <p > : { yearlydata }</p>
      </div>
    </section>
  );
};

export default Card;
