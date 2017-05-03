import React, { Component } from 'react';
import DistrictRepository from './helper.js';
import './App.css';
import { Card } from './components/Card';
import { UserData } from './components/UserData';
import data from '../data/kindergartners_in_full_day_program';

class App extends Component {
  constructor() {
    super();
    this.DistrictRepository = new DistrictRepository(data)
    // this is where you set initial state
    this.someValue = 2;
  }
// pass the functions into the components
// call those functions in the component classes after an on change event



  findSchools(userInput) { // 'Denver'
    userInput
    this.DistrictRepository.findByName(userInput)
    this.someRepository.getName();
  }

  render() {
    return (
      <div>
        <div>Welcome To Headcount 2.0</div>
        <UserData findSchools = {this.findSchools}/>
        <Card />
      </div>
    );
  }
}

export default App;
