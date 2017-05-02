export default class DistrictRepository {

constructor(data){
  this.data = this.duplicateCleaner(data)
  }

  duplicateCleaner(data){
    return data.reduce((acc, curVal) => {
      const district = curVal.Location;
      const year = curVal.TimeFrame;
      const data = Math.round(curVal.Data*1000)/1000 || 0


      if (!acc[district]) {
       acc[district.toUpperCase()] = { 'location': district, 'data': {}};
      }

      acc[district.toUpperCase()]['data'][year] = data;
      return acc;
    }, {});
  }

  findByName(location=''){
    return this.data[location.toUpperCase()]
  }

  findAllMatches(search='') {
      const keys = Object.keys(this.data).filter( location => location.includes(search.toUpperCase()))
      return keys;
    }

}
