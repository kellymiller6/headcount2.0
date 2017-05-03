import React, { Component } from 'react';

export default class Controls extends Component {
  constructor(){
    super()
    this.state = {
      district: ''
    }
  }

  //handleSubmit()

  render(){
    return(
      <div>
        <label>School District</label>
        <input type='text' value={this.state.district} onChange={ (event) => this.setState({ district: event.target.value }) } />
        <button>Submit</button>

      </div>
    )
  }

}
