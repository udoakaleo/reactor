import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from "react"
import './index.css';
import AddTask from './components/AddTask';

function App() { 
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Learning Php',
            day: 'Feb 5th at 8.00am',
            reminder: true
        },
         {
            id: 2,
            text: 'Learning Vanilla Javascript',
            day: 'Feb 5th at 2.00pm',
            reminder: true
        },
          {
            id: 3,
            text: 'Learning Reactjs',
             day: 'Feb 5th at 8.00pm',
            reminder: false
        },
     ])
     const addTask = (task) => { 
      const id = Math.floor(Math.random() * 10000) + 1
      const newTask = {id, ...task}
      setTasks([...tasks, newTask])
     }

     const deleteTask = (id) => { 
      setTasks(tasks.filter((task) => task.id !== id)) 
     }

      const toggleReminder = (id) => {
      setTasks(tasks.map((task) => 
      task.id === id ? { ...task, reminder: 
      !task.reminder} : task ))
      }
        
  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
       {tasks.length > 0 ?
     (<Tasks tasks={tasks} onDelete={deleteTask}
      onToggle={toggleReminder} />)
     :('No Task To Show')}
    </div>
  ); 
}

export default App;
