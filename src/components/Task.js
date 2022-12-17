import React from 'react'

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className = {`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick = {() => onToggle(task._id)}>
        <h3>{task.text} <i style = {{color: 'red', cursor: 'pointer'}} onClick = {() => onDelete(task._id)} className="fa-solid fa-xmark"></i></h3>
        <p>{task.day}</p>
    </div>
  )
}



export default Task