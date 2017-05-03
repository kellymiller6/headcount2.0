import React from 'react';
import Card from './Card.js';
import Year from './Year.js'
import YearlyData from './YearlyData.js'

const Cards = ({ districtData }) => {
    return(
      <div>
        <div>
        All the data
        { Object.keys(districtData).map((district, index) => {
          return(
            <div key={index}>
              <Card location={ district } />
              <Year years={districtData[district].data}
               />
               <YearlyData yearlydata={districtData[district].data}/>

            </div>
          )
        })}
        </div>
      </div>
    )
}

export default Cards;
