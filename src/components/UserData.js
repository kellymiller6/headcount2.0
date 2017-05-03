import React, { Component } from 'react';

export class UserData extends Component{
  constructor(){
    super()
    this.state = {
      userInput:''
    }
  }
  render(){
    return(
      <div>
      <input className = "user-input" onChange={(e)=>{this.setState({userInput:e.target.value})}}/>
      <button className = "user-submit-button" />
      </div>
    )
  }
}
