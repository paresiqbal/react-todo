// custom components
import TaskItem from "./TaskItem";

// styles
import styles from "../styles/TaskList.module.css";

export default function TaskList({ taskList }) {
  return (
    <ul className={styles.tasks}>
      {/* Looping to taskList to display it */}
      {taskList.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}
