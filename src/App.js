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

  return (
    <div className="App">
      <h1>TO DO APP</h1>
      <h1>My tasks</h1>
      <NewTask newTask={newTask}
      handleChange={handleChange}
      handleSubmit={handleSubmit} />
      
      <TasksList allTasks={allTasks}
      handleDelete={handleDelete} />
    </div>
  );
}

export default App;
