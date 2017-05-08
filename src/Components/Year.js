import React from 'react';
import '../styles/year.css';
import PropTypes from 'prop-types';

const Year = ({ years }) => {
    return(
        <div className='years'>
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

Year.propTypes = {
  years: PropTypes.object
};

export default Year;
