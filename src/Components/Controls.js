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

  render(){
    return(
      <div>
        <label>School District</label>
        <input type='text' className='user-input' value={this.state.district}
        onKeyUp={(e) =>{this.props.handleKeyup(e.target.value)}}
        onChange={ (event) => this.setState({ district: event.target.value }) } />
        <button className='user-input-submit-btn'>Submit</button>
      </div>
    )
  }

}
