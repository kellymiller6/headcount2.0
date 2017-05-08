import React from 'react'
import '../styles/compareDistricts.css';
import '../styles/card.css';
import PropTypes from 'prop-types';

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

CompareCard.propTypes = {
  repository: PropTypes.object,
  districtB: PropTypes.string,
  districtA: PropTypes.string
};


export default CompareCard
