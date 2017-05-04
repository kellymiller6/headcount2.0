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
}
