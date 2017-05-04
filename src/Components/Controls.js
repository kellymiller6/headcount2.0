import React, { Component } from 'react';

export default class Controls extends Component {
  constructor(){
    super()
    this.state = {
      district: ''
    }
  }

  findName() {
     this.props.handleClick(this.state.district)
     this.setState({
       district: ''
     })
   }

  allMatches(e) {
    const userInput = e.target.value
    this.setState( {district: userInput}, () => {
      this.props.handleFilter(this.state.district)
    })
  }

  render(){
    return(
      <div>
        <label>School District</label>
        <input type='text' className='user-input' value={this.state.district} onChange={(e) => this.allMatches(e) } />

        <button className='user-input-submit-btn' onClick={ () => {this.findName()} }>Submit</button>
      </div>
    )
  }

}
