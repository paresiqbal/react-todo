// react
import { useState } from "react";

// library
import { PlusIcon } from "@heroicons/react/24/solid";

export default function CustomForm({ addTask }) {
  const [task, setTask] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    addTask({
      name: task,
      checked: false,
      id: Date.now(), // create uniq id
    });

    // reset task to empty after submit
    setTask("");
  };

  return (
    <form className="todo" onSubmit={handleFormSubmit}>
      <div className="wrapper">
        <input
          type="text"
          id="task"
          className="input"
          required
          autoFocus
          maxLength={64}
          placeholder="Enter Task"
          value={task}
          onInput={(e) => setTask(e.target.value)}
        />
        <label htmlFor="task" className="label">
          Enter Task
        </label>
      </div>
      <button className="btn" aria-label="Add Task" type="submit">
        <PlusIcon width={20} />
      </button>
    </form>
  );
}
