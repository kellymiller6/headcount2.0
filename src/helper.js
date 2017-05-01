export default class DistrictRepository {

constructor(data){
  this.data = this.duplicateCleaner(data)
  }

  duplicateCleaner(data){
    return data.reduce((acc, curVal) => {
      const district = curVal.Location;
      const year = curVal.TimeFrame;
      const data = curVal.Data

      if (!acc[district]) {
       acc[district] = { 'location': district, 'yearlyData': {}};
      }

      acc[district]['yearlyData'][year] = data;
      return acc;
    }, {});
  }


}
