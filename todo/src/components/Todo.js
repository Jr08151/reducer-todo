import React from "react";

const Todo = props => {
  console.log(props)
  return (
    <div
      onClick={()=>props.toggleTodo(props.item.id)}
      className={`item${props.item.complete ? ' complete': ''}`}
    >
      <p>{props.item.item}</p>
    </div>
  )
}

export default Todo;