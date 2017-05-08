import React from 'react'
import '../styles/compareDistricts.css';
import '../styles/card.css';

const CompareCard = ({ repository, districtA, districtB }) => {
  let compareObject = repository.compareDistrictAverages(districtA, districtB);

  return (
    <article className="district-card compared">
      <h3 className='districtA-card'>{districtA}: {compareObject[districtA.toUpperCase()]}</h3>

      <p className='compared-card'> Compared Averages: {compareObject.compared} </p>

      <h3 className='districtB-card'>{districtB}: {compareObject[districtB.toUpperCase()]}</h3>
    </article>
  )
}

export default CompareCard
