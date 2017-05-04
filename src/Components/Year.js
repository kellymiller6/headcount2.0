import React from 'react';
import '../styles/year.css';

const Year = ({ years }) => {
    return(
        <div>
        { Object.keys(years).map((year, index) => {
          if( years[year] < 0.5){
          return(
              <p className='below' key={index}> { year} : {years[year] } </p>
            )
          }
          return(
            <p className='above' key={index}> { year} : {years[year] } </p>
          )
        })}
        </div>
    )
}

export default Year;
