// react
import { useState } from "react";

// custom components
import CustomForm from "./components/CustomForm";
import TaskList from "./components/TaskList";
import EditForm from "./components/EditForm";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [editedTask, setEditedTask] = useState(null);

  const [isEditing, setIsEditing] = useState(false);

  const [prevFocusEl, setPrevFocusEl] = useState(false);

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

  const toggleTask = (id) => {
    // Map the task and find the correct id
    // Look all object variable in task
    // Change the value of checked to the opposite
    setTaskList((prevState) =>
      prevState.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  };

  const enterEditMode = (task) => {
    // trigger popup edit modal
    setIsEditing(true);

    // passing real value of task from editForm.jsx
    setEditedTask(task);

    setPrevFocusEl(document.activeElement);
  };

  const closeEditMode = () => {
    setIsEditing(false);

    setPrevFocusEl.focus();
  };

  const updateTask = (taskItSefl) => {
    // look origin value of task
    // find the correct id
    // replace origin vaue of task with new one with is (updatedTaskName)
    setTaskList((prevState) =>
      prevState.map((task) =>
        task.id === taskItSefl.id ? { ...taskItSefl, name: task.name } : task
      )
    );

    // close edit mode
    closeEditMode();
  };

  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
      {isEditing && (
        <EditForm
          updateTask={updateTask}
          editedTask={editedTask}
          closeEditMode={closeEditMode}
        />
      )}
      <CustomForm addTask={addTask} />

      {/* Display task list */}
      {taskList && (
        <TaskList
          taskList={taskList}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          enterEditMode={enterEditMode}
        />
      )}
    </div>
  );
}

export default App;
