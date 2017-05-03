import React from 'react';

const Year = ({ years }) => {
    return(
        <div>
        { Object.keys(years).map((year, index) => {
          return(
            <p key={index}> { year} : {years[year] } </p>
          )
        })}
        </div>
    )
}

export default Year;
