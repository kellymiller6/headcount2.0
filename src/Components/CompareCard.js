import React from 'react'
import '../styles/compareDistricts.css';
import '../styles/card.css';

const CompareCard = ({ repository, districtA, districtB }) => {
  let compareObject = repository.compareDistrictAverages(districtA, districtB);

  return (
    <article className="district-card compared-card">
      <h3>{districtA}: {compareObject[districtA.toUpperCase()]}</h3>

      <p> Compared Averages: {compareObject.compared} </p>

      <h3>{districtB}: {compareObject[districtB.toUpperCase()]}</h3>
    </article>
  )
}

export default CompareCard
