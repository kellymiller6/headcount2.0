import React, { Component } from 'react';
import DistrictRepository from '../helper.js';
import '../styles/App.css';
import Controls from './Controls';
import  Cards  from './Cards';
import CompareDistricts from './CompareDistricts';

import kinderData from '../../data/kindergartners_in_full_day_program';


class App extends Component {
  constructor(){
    super()
    this.repository = new DistrictRepository(kinderData)
    this.state = {
      districtData: {},
      compareArray: []
    }
  }

  componentWillMount() {
    this.setState({
      districtData: this.repository.data,
    })
  }

  submitSearch (district, data) {
    let specDistrict = this.repository.findByName(district);
    this.setState({
      districtData: {specDistrict}
    })
   }

  filterDistricts (input) {
    let matchDistricts = this.repository.findAllMatches(input);
    let matches = matchDistricts.reduce((allMatches, match) => {
      if (!allMatches[match]) {
        allMatches[match] = this.repository.data[match]
      }
      return allMatches;
    }, {})
    this.setState({ districtData: matches});
  }

  selectCard(district) {
    if (!this.state.compareArray.length) {
      this.state.compareArray.push(district);
      return this.setState( {compareArray: this.state.compareArray});

    } else if (this.state.compareArray.length < 2 && !this.state.compareArray.includes(district)) {
      this.state.compareArray.push(district);
      return this.setState( {compareArray: this.state.compareArray});

    } else if (this.state.compareArray.length < 3 && this.state.compareArray.includes(district)) {
      let result = this.state.compareArray.filter(val => {
        return district !== val
      });
    return this.setState( {compareArray: result} );
    }
    this.state.compareArray.shift();
    this.state.compareArray.push(district);
    return this.setState( {compareArray: this.state.compareArray});
  }

  render() {
    return (
      <div className='app'>
        <h1>Welcome To Headcount 2.0</h1>

        <CompareDistricts
          repository={this.repository}
          compareArray={this.state.compareArray}
          districtData={this.state.districtData}
          handleSelect={this.selectCard.bind(this)}
        />

        <Controls handleClick={ this.submitSearch.bind(this) }
                  handleFilter={ this.filterDistricts.bind(this) }/>

        <Cards districtData={this.state.districtData}
                handleSelect={this.selectCard.bind(this)}
                  repository={this.repository}
                  compareArray={this.state.compareArray}/>
      </div>
    );
  }
}

export default App;
