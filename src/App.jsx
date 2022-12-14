import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { tasks as data } from "./components/data.js";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(data);
  }, []);

  const createTask = (task)=>{
    setTasks([...tasks, {
      title: task.title,
      id: tasks.length,
      description: task.description
    }])
  }

  const deleteTask = (taskId)=>{
    setTasks(tasks.filter(task => task.id !== taskId))
   }

  return (
    <>
      <TaskForm createTask={createTask}/>
      <TaskList tasks={tasks} deleteTask={deleteTask}/>
    </>
  );
}

export default App;
