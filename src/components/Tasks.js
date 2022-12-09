import Task from './Task'

const Tasks =({ tasks, onDelete, onToggle }) => {
  return (
    <>
    {tasks.map((tasks)=>(
    // <h3 key = {tasks.id}>{tasks.text}</h3>
        <Task key = {tasks.id} task ={tasks} 
        onDelete = {onDelete} onToggle = {onToggle}/>
    ))}
    </>
  )
}

export default Tasks