// react
import { useEffect, useState } from "react";

// library
import { CheckIcon } from "@heroicons/react/24/solid";

export default function EditForm({ editedTask, updateTask, closeEditMode }) {
  // updatedTaskName = editedTask = original task
  const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Look prev value of task and replace the name of the task
    // replace editedTask.name with updatedTaskName.name
    updateTask({ ...editedTask, name: updatedTaskName });
  };

  useEffect(() => {
    // espace key function
    const closeModalEscape = (e) => {
      e.key === "Escape" && closeEditMode();
    };

    // add the function
    window.addEventListener("keydown", closeModalEscape);

    // cleanup function
    return () => {
      window.removeEventListener("keydown", closeModalEscape);
    };
  }, [closeEditMode]);

  return (
    <div
      role="dialog"
      aria-labelledby="editTask"
      onClick={(e) => {
        e.target === e.currentTarget && closeEditMode();
      }}
    >
      <form className="todo" onSubmit={handleFormSubmit}>
        <div className="wrapper">
          <input
            type="text"
            id="editTask"
            className="input"
            required
            autoFocus
            maxLength={64}
            placeholder="Update Task"
            value={updatedTaskName}
            onInput={(e) => setUpdatedTaskName(e.target.value)}
          />
          <label htmlFor="editTask" className="label">
            Update Task
          </label>
        </div>
        <button
          className="btn"
          aria-label={`Confirm edited task to now ${updatedTaskName}`}
          type="submit"
        >
          <CheckIcon width={20} />
        </button>
      </form>
    </div>
  );
}
