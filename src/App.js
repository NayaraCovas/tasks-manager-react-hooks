import{useState, useEffect} from 'react'//this way we can also use this state within other components
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';




const App =() => {
  const [showAddTask, setShowAddTask] = useState (false)
  const [tasks, setTasks] = useState([])//tasks is what we name this piece of state|setTasks is the function to update this state|useState-inside it is the default that we want to use for our tasks,//In order to use state inside a function we use a hook called useState
   
  useEffect (() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

   getTasks()
  }, [])
  

  //Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json ()    
    return(data)
  }
  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1    
    const newTask = { id, ...task }//use id and copies what is passed in (task) and add to the object newTask
    setTasks([...tasks, newTask])//copy tasks that are already there but also adds the new task to it
  }
  
  

  //Delete task

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })

    setTasks(tasks.filter((task) =>task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
      task.id === id ? {...task, reminder:
      !task.reminder} : task))
  }



  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask
        (!showAddTask)}
         showAdd= {showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete=
      {deleteTask} onToggle={toggleReminder}/>
      ) : (
        'No Tasks to show'
        )}
      

           
    </div>
  )
}
//onDelete will be a prop of tasks
export default App;

/* Doing the same with class:
import React from 'react'
class App extends React.Component {
  render//() {
    return<h1> using class</h1>
  }
} 
 */
