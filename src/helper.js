
export default class DistrictRepository {
constructor(data){
  // super()
  this.data = data
  }
  duplicateCleaner(data){
    data.reduce((acc, val)=>{

      if(data[val].location){
        !acc.Location ? acc['location'] = [[val].]

      }
      return acc
    }, {})
  }
}
