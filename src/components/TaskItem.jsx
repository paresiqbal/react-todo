// styles
import { useState } from "react";
import styles from "../styles/TaskItem.module.css";

// library
import { CheckIcon } from "@heroicons/react/24/outline";

export default function TaskItem({ task }) {
  const [isChecked, setIsChecked] = useState(task.checked);

  const handleCheckBoxChange = (e) => {
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
    </li>
  );
}
