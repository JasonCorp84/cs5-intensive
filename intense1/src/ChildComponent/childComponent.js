import React from 'react'



const childComponent = (props) => {
  return(
    <div> {props.child} {` `}{props.age}
    </div>
  )
}

export default childComponent;