export default class DistrictRepository {

  constructor(data){
    this.data = this.duplicateCleaner(data)
  }

  duplicateCleaner(data){
    return data.reduce((acc, curVal) => {
      const district = curVal.Location;
      const upperDistrict = district.toUpperCase()
      const year = curVal.TimeFrame;
      const data = Math.round(curVal.Data*1000)/1000 || 0

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
      console.log(keys)
      let sum = keys.reduce((totalVal, year)=>{
        totalVal += district.data[year]
        return totalVal
      }, 0)
      let average = Math.round((sum / keys.length)*1000)/1000
      console.log(average)
      return average
//math.round function 
  }

  compareDistrictAverages(districtA, districtB){
    const avgDistrictA = this.findAverage(districtA)
    const avgDistrictB = this.findAverage(districtB)
    let compared =  Math.round((avgDistrictA/avgDistrictB)*1000)/1000
    return {
      [districtA.toUpperCase()]: avgDistrictA,
      [districtB.toUpperCase()]: avgDistrictB,
      'compared': compared
    };
  }

}
