// react
import { useState } from "react";

// library
import { PlusIcon } from "@heroicons/react/24/solid";

export default function CustomForm({ addTask }) {
  const [task, setTask] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // adding object to task
    addTask({
      name: task.charAt(0).toUpperCase() + task.slice(1),
      checked: false,
      id: Date.now(),
    });

    // set task value to empty after submit
    setTask("");
  };

  return (
    <form className="todo py-10" onSubmit={handleFormSubmit}>
      <div className="wrapper">
        <input
          type="text"
          id="task"
          className="input"
          value={task}
          onInput={(e) => setTask(e.target.value)}
          required
          autoFocus
          maxLength={60}
          placeholder="Enter Task"
          autoCapitalize="sentences"
        />
        <label htmlFor="task" className="label">
          Enter Task
        </label>
      </div>
      <button className="btn" aria-label="Add Task" type="submit">
        <PlusIcon />
      </button>
    </form>
  );
}
