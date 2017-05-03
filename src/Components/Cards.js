import React from 'react';
import Card from './Card';

const Cards = ({ districtData }) => {
    return(
      <div>
        <div>
        All the data
        { Object.keys(districtData).map((district, index) => {
          return(
            <div key={index}>
              <Card location={ district}
                    four={ districtData[district].data[2004]}
                    five={ districtData[district].data[2005]}
                    six={ districtData[district].data[2006]}
                    seven={ districtData[district].data[2007]}
                    eight={ districtData[district].data[2008]}
                    nine={ districtData[district].data[2009]}
                    ten={ districtData[district].data[2010]}
                    eleven={ districtData[district].data[2011]}
                    twelve={ districtData[district].data[2012]}
                    thirteen={ districtData[district].data[2013]}
                    fourteen={ districtData[district].data[2014]}
                    />
            </div>
          )
        })}
        </div>
      </div>
    )
}

export default Cards;
