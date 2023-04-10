import { useState } from "react";
import "./App.css";

// components
import CustomForm from "./components/CustomForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  // adding task
  const addTask = (task) => {
    setTasks((prevState) => [...prevState, task]);
  };

  return (
    <div className="App">
      <h1 className="text-4xl font-bold">My Task List</h1>
      <CustomForm addTask={addTask} />
      {tasks && <TaskList tasks={tasks} />}
    </div>
  );
}

export default App;
