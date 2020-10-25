import React, { useState } from 'react';
import './App.css';
import NewTask from './Presentational/NewTask';
import TasksList from './Presentational/TasksList';


function App() {

  const [newTask, setNewTask] = useState({});

  const handleChange = ({target}) => {
    const {name, value} = target;
    setNewTask((prevTask)=>({
      ...prevTask,
      id: Date.now(),
      [name]: value
    }));
  };
 

  const [allTasks, setAllTasks] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    if(!newTask.title)return;
    setAllTasks((prev) => [newTask, ...prev]);
    setNewTask({});
  };

  const handleDelete = (taskIdToRemove) => {
    setAllTasks((prev) => prev.filter(
      task => task.id !== taskIdToRemove));
  };

  
  // const handleDone = () => {
  //   document.getElementById('idTitle').style.cssText=
  //   'text-decoration: line-through; background-color:  #aaff80;'
  // }
     
// const handleDone = () => {
  // document.getElementByClassName('toDoTitle').classList.add('done')
// }

  // const handleDone = (index) => {
  //   const newTasks = [...allTasks];
  //   newTasks[index].isCompleted = true;
  //   setAllTasks(newTasks);
  // }
  const handleDone = (index) => {
    document.getElementsByClassName("toDoTitle")[index].style.cssText=
  'text-decoration: line-through; background-color:  #aaff80;'
  }



  return (
    <div className="App">
      <h1>TO DO APP</h1>
      <h1>My tasks</h1>
      <NewTask newTask={newTask}
      handleChange={handleChange}
      handleSubmit={handleSubmit} />
      
      <TasksList allTasks={allTasks}
      setAllTasks={setAllTasks}
      handleDelete={handleDelete}
      handleDone={handleDone}
       />
    </div>
  );
}

export default App;
