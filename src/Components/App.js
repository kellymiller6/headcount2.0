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
    console.log(district.data)
    this.setState({
      districtData: district.data
    })
  }

  // findSchools(userInput){
  //   this.DistrictRepository.findByName(userInput);
  // }

  render() {
    return (
      <div>
        <h1>Welcome To Headcount 2.0</h1>
        <Controls />
        <Cards cards={this.state.districtData} />
      </div>
    );
  }
}

export default App;
