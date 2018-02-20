import React, { Component } from 'react';
import Logo from './logo.js';
import RightContainer from './rightContainerParent.js';
import '../styles/bigContainer.css';

class tweet extends Component {


  render(){
    return(
      <div className="big-container">
      <Logo />
      <RightContainer />
      </div>
    )
  }
}

export default tweet;