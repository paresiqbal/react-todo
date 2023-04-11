import { useState } from "react";
import "./App.css";

// components
import CustomForm from "./components/CustomForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  // adding task
  const addTask = (task) => {
    // set prev variable and add new one
    setTasks((prevState) => [...prevState, task]);
  };

  // handle delete, pass something uniq like ID
  const deleteTask = (id) => {
    setTasks((prevState) => prevState.filter((task) => task.id !== id));
  };

  // handle check task, pass id
  const toggleTask = (id) => {
    // find task with id, and set check with the opposite value
    setTasks((prevState) =>
      prevState.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  };

  return (
    <div className="App">
      <h1 className="text-4xl font-bold">My Task List</h1>
      <CustomForm addTask={addTask} />
      {tasks && (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      )}
    </div>
  );
}

export default App;
