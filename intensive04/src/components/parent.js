import React, { Component } from 'react';
import Child from './child.js'


class Parent1 extends Component{
  constructor(){
    super();
    this.state = {
      comments : [
        {
            username: "twitch",
            text: "Epic Street Fighter action here in Las Vegas at #EVO2017!"
        },
        {
            username: "michaelmarzetta",
            text: "Omg that match was crazy"
        },
        {
            username: "themexican_leprechaun",
            text: "What a setup"
        },
        {
            username: "dennis_futbol",
            text: "It that injustice"
        },
        {
            username: "dennis_futbol",
            text: "Is"
        }
    ]
    }
  }

  render(){
    return(
      <div>
      { this.state.comments.map((comment, i) => {
        return(
        <Child 
        name={comment.username}
        text={comment.text}
        />
        )
      })
      }
      </div>
    )
  }
}


export default Parent1;