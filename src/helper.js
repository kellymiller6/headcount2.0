export default class DistrictRepository {

constructor(data){
  this.data = this.duplicateCleaner(data)
  }

convertOrSetData(data){
  if(isNaN(this.data.Data)){
    this.data.Data === 0;
  }
  console.log(this.data.data)
}

  duplicateCleaner(data){
    return data.reduce((acc, curVal) => {
      const district = curVal.Location;
      const year = curVal.TimeFrame;
      const data = Math.round(curVal.Data * 1000)/1000;

      if (!acc[district]) {
       acc[district.toUpperCase()] = { 'location': district, 'data': {}};
      }

      acc[district.toUpperCase()]['data'][year] = data;
      return acc;
    }, {});
  }
findByName(location){
  if(location === ''){
    return undefined;
  }else{
    return this.data[location.toUpperCase()]
  }

}
}
