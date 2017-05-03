import React, { Component } from 'react';
import DistrictRepository from '../helper.js';
import '../App.css';
import Controls from './Controls';
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

  render() {
    return (
      <div>
        <h1>Welcome To Headcount 2.0</h1>
      </div>
    );
  }
}

export default App;
