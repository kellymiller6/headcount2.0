import React from 'react';

const Card = ({ location, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen }) => {
  return (
    <section>
      <div>
        <h4 >District: { location }</h4>
        <p >2004: { four }</p>
        <p >2005: { five }</p>
        <p >2006: { six }</p>
        <p >2007: { seven }</p>
        <p >2008: { eight }</p>
        <p >2009: { nine }</p>
        <p >2010: { ten }</p>
        <p >2011: { eleven }</p>
        <p >2012: { twelve }</p>
        <p >2013: { thirteen }</p>
        <p >2014: { fourteen }</p>

      </div>
    </section>
  );
};

export default Card;
