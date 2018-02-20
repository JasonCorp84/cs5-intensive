import React,  { Component } from 'react';
import functionalComponent from '../functionalComponent/functionalComponent.js'
import ChildComponent from '../ChildComponent/childComponent.js';

class ParentComponent extends Component {

  constructor(){
    super();
    this.state = {
    children:
     [
      { name: 'David', age:'4' },
      { name: 'Aiden', age: '7' }
    ]
  }
  }


  render() {
    return (
        <div >{this.state.children.map((child,i) => {
          return(
            <ChildComponent
            child={child.name} 
            age={child.age}
            />
          )
        })}</div>
    );
}
} 

export default ParentComponent;