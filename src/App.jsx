// react
import { useState } from "react";

// custom components
import CustomForm from "./components/CustomForm";
import TaskList from "./components/TaskList";

function App() {
  const [taskList, setTaskList] = useState([]);

  const addTask = (task) => {
    // Look taskList state and add new state(task)
    setTaskList((prevState) => [...prevState, task]);
    console.log(task);
  };

  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
      <CustomForm addTask={addTask} />

      {/* Display task list */}
      {taskList && <TaskList taskList={taskList} />}
    </div>
  );
}

export default App;
