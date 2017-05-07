import React from 'react';
import  Card  from './Card.js';
import  CompareCard  from './CompareCard';
import '../styles/compareDistricts.css';

const CompareDistricts = ({ repository , compareArray, districtData, handleSelect }) => {
  let districtA;
  let districtB;

  if(!compareArray.length) {
    return(
      <div></div>
    )
  } else if (compareArray.length === 1) {
    districtA = repository.findByName(compareArray[0]);
    return(
      <section className="compare-field">
        <Card
          district={districtA.location}
          data={districtA.data}
          handleSelect={handleSelect}
          repository={repository}
          compareArray={compareArray}

        />
      </section>
    )
  } else if (compareArray.length === 2) {
    compareArray.forEach(() => {
      districtA = repository.findByName(compareArray[0]);
      districtB = repository.findByName(compareArray[1]);
    })

    return(
      <section className="top-compare">
        <Card district={districtA.location}
              data={districtA.data}
              handleSelect={handleSelect}
              repository={repository}
              compareArray={compareArray}
        />

        <CompareCard
              repository={ repository }
              districtA={districtA.location}
              districtB={districtB.location}
        />

        <Card district={districtB.location}
              data={districtB.data}
              handleSelect={handleSelect}
              repository={repository}
              compareArray={compareArray}
        />
      </section>
    )
  }
}
export default CompareDistricts
