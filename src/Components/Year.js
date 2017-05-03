import React from 'react';
import Card from './Card';

const Year = ({ years }) => {
    return(
      <div>
        <div>
        
        { Object.keys(years).map((year, index) => {
          return(
            <div key={index}>
              <Card year={year}/>

            </div>
          )
        })}
        </div>
      </div>
    )
}

export default Year;
