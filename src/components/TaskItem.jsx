// styles
import { useState } from "react";
import styles from "../styles/TaskItem.module.css";

// library
import {
  CheckIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

export default function TaskItem({ task }) {
  // set isChecked value to original task.checked value(false)
  const [isChecked, setIsChecked] = useState(task.checked);

  const handleCheckBoxChange = (e) => {
    // when checkbox is clicked set value the opposite
    setIsChecked(!isChecked);
  };

  return (
    <li className={styles.task}>
      <div className={styles["task-group"]}>
        <input
          type="checkbox"
          checked={isChecked}
          name={task.name}
          id={task.id}
          className={styles.checkbox}
          onChange={handleCheckBoxChange}
        />
        <label htmlFor={task.id} className={styles.label}>
          {task.name}
          <p className={styles.checkmark}>
            <CheckIcon width={24} strokeWidth={2} />
          </p>
        </label>
      </div>

      <div className={styles["task-group"]}>
        <button
          className="btn"
          aria-label={`Update ${task.name} Task`}
          // onClick={}
        >
          <PencilSquareIcon width={24} />
        </button>
        <button
          className={`btn ${styles.delete}`}
          aria-label={`Delete ${task.name} Task`}
          // onClick={}
        >
          <TrashIcon width={24} />
        </button>
      </div>
    </li>
  );
}
