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

  const deleteTask = (id) => {
    // Look taskList state & find id
    // Delete task with specific id with filter
    setTaskList((prevState) =>
      prevState.filter((taskList) => id !== taskList.id)
    );
  };

  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
      <CustomForm addTask={addTask} />

      {/* Display task list */}
      {taskList && <TaskList taskList={taskList} deleteTask={deleteTask} />}
    </div>
  );
}

export default App;
