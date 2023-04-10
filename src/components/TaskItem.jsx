import { useState } from "react";

import styles from "./TaskItem.module.css";

import {
  CheckIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

export default function TaskItem({ task }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBoxChange = (e) => {
    setIsChecked(true);
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
          //   onClick={}
        >
          <PencilSquareIcon width={24} />
        </button>
        <button
          className={`btn ${styles.delete}`}
          aria-label={`Update ${task.name} task`}
          //   onClick={}
        >
          <TrashIcon width={24} />
        </button>
      </div>
    </li>
  );
}
