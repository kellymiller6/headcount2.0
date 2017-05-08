import React, { Component } from 'react';
import '../styles/controls.css';
import PropTypes from 'prop-types'

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
    const userInput = e.target.value;
    this.setState( {district: userInput}, () => {
      this.props.handleFilter(this.state.district)
    })
  }

  render(){
    return(
      <div className='nav-bar'>
        <label className='input'>School District</label>
        <input type='text' className='user-input input' value={this.state.district} onChange={(e) => this.allMatches(e) } />

        <button className='user-input-submit-btn input' onClick={ () => {this.findName()} }>Submit</button>
      </div>
    )
  }

}

Controls.propTypes = {
  handleClick: PropTypes.func,
  handleFilter: PropTypes.func
};
