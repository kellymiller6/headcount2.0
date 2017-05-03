import React from 'react';
import Card from './Card';

const YearlyData = ({ yearlydata }) => {
    return(
      <div>
        <div>
        
        { Object.keys(yearlydata).map((yearly, index) => {
          return(
            <div key={index}>
              <Card yearlydata={yearlydata[yearly]}/>

            </div>
          )
        })}
        </div>
      </div>
    )
}

export default YearlyData;
