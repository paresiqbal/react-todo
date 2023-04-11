import { useState } from "react";
import "./App.css";

// components
import CustomForm from "./components/CustomForm";
import TaskList from "./components/TaskList";
import EditForm from "./components/EditForm";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [prevFocus, setPrevFocus] = useState(false);
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

  // handle edit task
  const updateTask = (taskList) => {
    // find task with id, and set check with the opposite value
    setTasks((prevState) =>
      prevState.map((task) =>
        task.id === taskList.id ? { ...task, name: taskList.name } : task
      )
    );

    closeEditMode();
  };

  const closeEditMode = () => {
    setIsEditing(false);
    prevFocus.focus();
  };

  const enterEditMode = (task) => {
    setEditedTask(task);
    setIsEditing(true);

    // set focus to original
    setPrevFocus(document.activeElement);
  };

  return (
    <div className="App">
      <h1 className="text-4xl font-bold">My Task List</h1>
      {isEditing && (
        <EditForm
          editedTask={editedTask}
          updateTask={updateTask}
          closeEditMode={closeEditMode}
        />
      )}
      <CustomForm addTask={addTask} />
      {tasks && (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          enterEditMode={enterEditMode}
        />
      )}
    </div>
  );
}

export default App;
