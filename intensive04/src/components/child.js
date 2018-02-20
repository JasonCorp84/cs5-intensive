import React from 'react';
import Parent from './parent.js';

const child = (props) => {
  const style={
    fontWeight: 'bold'
  }
  const style2={
    borderStyle: 'solid',
    padding: '5px',
    margin: '5px'
  }
  return(
    <div style={ style2 }> 
    <div style={ style }>
      { props.name } <br/>
      </div>
      { props.text }
    </div>
  )
}

export default child;