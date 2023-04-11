// react
import { useEffect, useState } from "react";

// library
import { CheckIcon, WindowIcon } from "@heroicons/react/24/solid";

export default function EditForm({ editedTask, updateTask, closeEditMode }) {
  const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);

  useEffect(() => {
    const closeModalIfEscape = (e) => {
      e.key === "Escape" && closeEditMode();
    };
    window.addEventListener("keydown", closeModalIfEscape);

    return () => {
      window.removeEventListener("keydown", closeModalIfEscape);
    };
  }, [closeEditMode]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateTask({ ...editedTask, name: updatedTaskName });
  };

  return (
    <div
      role="dialog"
      aria-labelledby="editTask"
      onClick={(e) => e.target === e.currentTarget && closeEditMode()}
    >
      <form className="todo py-10" onSubmit={handleFormSubmit}>
        <div className="wrapper">
          <input
            type="text"
            id="editTask"
            className="input"
            value={updatedTaskName}
            onInput={(e) => setUpdatedTaskName(e.target.value)}
            required
            autoFocus
            maxLength={60}
            placeholder="Update Task"
            autoCapitalize="sentences"
          />
          <label htmlFor="editTask" className="label">
            Enter Task
          </label>
        </div>
        <button
          className="btn"
          aria-label={`Confirm edited task to now read ${updatedTaskName}`}
          type="submit"
        >
          <CheckIcon width={20} />
        </button>
      </form>
    </div>
  );
}
