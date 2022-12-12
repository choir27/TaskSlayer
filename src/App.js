import { useState, useEffect } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'

function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([])


  useEffect( () => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

//Fetch Tasks

const fetchTasks = async () => {
  // const res = await fetch('http://localhost:5000/tasks')
  
  const res = await fetch('https://task-tracker-api-v1eh.onrender.com/api')
  const data = await res.json()
  return data
}


//Fetch singular Task
const fetchTask = async (id) => {
  // const res = await fetch(`http://localhost:5000/tasks/${id}`)
  const res = await fetch(`https://task-tracker-api-v1eh.onrender.com/api/${id}`)
  const data = await res.json()
  return data
}


//You never want Tasks in a file like Tasks, contextAPI or redux to pull different parts of state, or you could also put it in App.js to make it global
//You want to be able to use tasks in other components, so it should be a part of the top level
//state is not something to change using tasks.push()
//if you want to change any part of the state, use setTasks
//state is immutable, one way data
//To add to the data, setTasks([...tasks, {}])


//Add Task
const addTask = async (task) => {

  
  
  // const res = await fetch(`http://localhost:5000/tasks`, {
    const res = await fetch(`https://task-tracker-api-v1eh.onrender.com/api`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'      
    },
    body: JSON.stringify(task)
  })

  const data = await res.json()

  setTasks([...tasks, data])

  //Create our own ID and add task
  // const id = Math.floor(Math.random() * 10000) + 1
  // const newTask = { id, ...task}
  // setTasks([...tasks, newTask])
}

//Delete Task
const deleteTask = async (id) => {

  // await fetch(`http://localhost:5000/tasks/${id}`, {
    await fetch(`https://task-tracker-api-v1eh.onrender.com/api/${id}`, {
    method: 'DELETE'
  })

  setTasks(tasks.filter((task)=> task.id !== id))
}

// toggle reminder
const toggleReminder = async (id) => {
  const taskToToggle = await fetchTask(id)
  const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}

  // const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    const res = await fetch(`https://task-tracker-api-v1eh.onrender.com/api/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(updTask)
  })

  const data = await res.json()

  setTasks(tasks.map((task)=> task.id === id  ? 
  {...task, reminder: data.reminder} : task))
}


  // const name = 'Brad'
  // const equation = 1 + 1
  // const boolean = true
  return (
    <Router>
    <div className = "container">
      <Header onAdd = {
        () => setShowAddTask(!showAddTask)
        } 
        showAdd = {showAddTask}/>
      
      <Routes>
      <Route path = '/' element={
        <>
      {showAddTask && <AddTask onAdd = {addTask}/>}
      {tasks.length > 0 ?
      <Tasks tasks = {tasks} onDelete = 
      {deleteTask} onToggle = {toggleReminder} / > 
      : 'No Tasks to be done at this time.'}
      {/* <h1>Hello From React</h1>
      <h2>Hello {name}, you have {equation} days.  {boolean ? 'Yes' : 'No'}, you do get an extension.</h2> */}
        </>
      }/>
      <Route path ='/about' element = {<About />}/>
      </Routes>
      <Footer />
    </div>
    </Router>
  )
}

//Example of using a class for React
// import React from 'react'
// class App extends React.Component{
//   render(){
//     return <h1>Hello from a class</h1>
//   }
// }

export default App;


