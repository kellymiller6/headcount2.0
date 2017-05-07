export default class DistrictRepository {

  constructor(data){
    this.data = this.duplicateCleaner(data)
  }

  numberRounder(input){
    return Math.round(input*1000)/1000
  }

  duplicateCleaner(data){
    return data.reduce((acc, curVal) => {
      const district = curVal.Location;
      const upperDistrict = district.toUpperCase()
      const year = curVal.TimeFrame;
      const data = this.numberRounder(curVal.Data) || 0
      if (!acc[upperDistrict]) {
       acc[upperDistrict] = { 'location': district, 'data': {}};
      }

      acc[upperDistrict]['data'][year] = data;
      return acc;
    }, {});
  }

  findByName(location='') {
    return this.data[location.toUpperCase()]
  }

  findAllMatches(searchInput=''){
    const keys = Object.keys(this.data).filter(district => {
      return district.includes(searchInput.toUpperCase())
    })
    return keys
  }

  findAverage(userInput){
    let district = this.findByName(userInput)
      const keys = Object.keys(district.data)

      let sum = keys.reduce((totalVal, year)=>{
        totalVal += district.data[year]
        return totalVal
      }, 0)
      let average = this.numberRounder(sum/keys.length)
      return average

  }

  compareDistrictAverages(districtA, districtB){
    const avgDistrictA = this.findAverage(districtA)
    const avgDistrictB = this.findAverage(districtB)
    let compared = this.numberRounder(avgDistrictA/avgDistrictB)
    let compareObject = {
      [districtA.toUpperCase()]: avgDistrictA,
      [districtB.toUpperCase()]: avgDistrictB,
      'compared': compared
    };
    return compareObject;
  }

  selectedIndicator(district, selected) {
    let match = selected.find(val => {return val === district})
    if (match) {
      return 'selected-card'
    }
  }
}
