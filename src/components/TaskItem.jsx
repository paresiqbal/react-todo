// react
import { useState } from "react";

// styles
import styles from "./TaskItem.module.css";

// library
import {
  CheckIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

export default function TaskItem({ task, deleteTask, toggleTask }) {
  const [isChecked, setIsChecked] = useState(false);

  // check the box
  const handleCheckBoxChange = (e) => {
    setIsChecked(!isChecked);
    toggleTask(task.id);
  };

  return (
    <li className={styles.task}>
      <div className={styles["task-group"]}>
        <input
          type="checkbox"
          value={isChecked}
          name={task.name}
          id={task.id}
          onChange={handleCheckBoxChange}
          className={styles.checkbox}
        />
        <label htmlFor={task.id} className={styles.label}>
          {task.name}
          <p className={styles.checkmark}>
            <CheckIcon strokeWidth={2} width={24} />
          </p>
        </label>
      </div>
      <div className={styles["task-group"]}>
        <button
          className="btn"
          aria-label={`Update ${task.name} task`}
          onClick={toggleTask}
        >
          <PencilSquareIcon width={24} />
        </button>
        <button
          className={`btn ${styles.delete}`}
          aria-label={`Update ${task.name} task`}
          onClick={() => deleteTask(task.id)}
        >
          <TrashIcon width={24} />
        </button>
      </div>
    </li>
  );
}
