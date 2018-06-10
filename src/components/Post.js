
import React from "react";

export default (props) => {
  return (
    <div >
      <h3>{props.post.title}</h3>
      <h4>{props.post.date}</h4>
      <p> {props.post.content} </p>
    </div>
  )
}


