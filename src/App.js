import{useState} from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";




const App =() => {
  const [tasks, setTasks] = useState([//tasks is what we name this piece of state|setTasks is the function to update this state|useState-inside it is the default that we want to use for our tasks
    {
      id: 1,
      text: "Doctor Appointment",
      day: "Feb 5th at 2:30",
      reminder: true,
    },
    {
      id: 2,
      text: "Mother Appointment",
      day: "Feb 6th at 2:30",
      reminder: true,
    },
    {
      id: 3,
      text: "Dad Appointment",
      day: "Feb 7th at 2:30",
      reminder: true,
    },
  ])
  
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>

           
    </div>
  )
}

export default App;

/* Doing the same with class:
import React from 'react'
class App extends React.Component {
  render//() {
    return<h1> using class</h1>
  }
} 
 */
