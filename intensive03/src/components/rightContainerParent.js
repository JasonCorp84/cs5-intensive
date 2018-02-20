import React, { Component } from 'react';
import NavBarChild from './navBarChild.js';
import BodyChild from './bodyChild.js';
import FooterChild from './footerChild';
import '../styles/rightContainer.css'

class RightContainerParent extends Component {


  render(){
    return(
      <div className="right-container">
        <NavBarChild />
        <BodyChild />
        <FooterChild />
      </div>
    )
  }
}

export default RightContainerParent;