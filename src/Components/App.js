import React, { Component } from 'react';
import DistrictRepository from '../helper.js';
import '../App.css';
import Controls from './Controls';
import Cards from './Cards';

import kinderData from '../../data/kindergartners_in_full_day_program';


class App extends Component {
  constructor(){
    super()
    this.state = {
      districtData: {}
    }
  }

  componentDidMount() {
    const district = new DistrictRepository(kinderData)
    this.setState({
      districtData: district.data
    })
  }

  submitSearch (district, data) {
     const district1 = new DistrictRepository(kinderData)
     let specDistrict = district1.findByName(district)
     this.setState({
       districtData: {specDistrict}
     })
   }

  // filterDistricts (district, data) {
  //   const district2 = new DistrictRepository(kinderData)
  //   let matchDistricts = district2.findAllMatches(district)
  //   this.setState({
  //     districtData: {matchDistricts}
  //   })
  // }

  render() {
    return (
      <div>
        <h1>Welcome To Headcount 2.0</h1>
        <Controls handleClick={ this.submitSearch.bind(this) }/>
        <Cards districtData={this.state.districtData} />
      </div>
    );
  }
}

export default App;
