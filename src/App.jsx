// custom components
import { useState } from "react";
import CustomForm from "./components/CustomForm";

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
    </div>
  );
}

export default App;
