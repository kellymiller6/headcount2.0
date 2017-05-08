import React from 'react';
import  Card  from './Card.js';
import  CompareCard  from './CompareCard';
import '../styles/compareDistricts.css';

const CompareDistricts = ({ repository , compareArray, districtData, handleSelect }) => {
  const renderCard = (district) => {
    return (
      <Card
        district={district.location}
        data={district.data}
        handleSelect={handleSelect}
        repository={repository}
        compareArray={compareArray}
      />
    )
  }

  if (compareArray.length === 0) {
    return (
      <div></div>
    )
  } else if (compareArray.length === 1) {
    const district = repository.findByName(compareArray[0]);
    return (
      <section className="top-compare">
        {renderCard(district)}
      </section>
    )
  } else if (compareArray.length === 2) {
    const districtA = repository.findByName(compareArray[0]);
    const districtB = repository.findByName(compareArray[1]);
    return (
      <section className="top-compare">
        {renderCard(districtA)}
        <CompareCard
          repository={ repository }
          districtA={districtA.location}
          districtB={districtB.location}
        />
        {renderCard(districtB)}
      </section>
    )
  }
}

export default CompareDistricts
