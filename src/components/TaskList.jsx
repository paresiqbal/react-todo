// custom components
import TaskItem from "./TaskItem";

// styles
import styles from "../styles/TaskList.module.css";

export default function TaskList({ taskList, deleteTask }) {
  return (
    <ul className={styles.tasks}>
      {/* Looping to taskList to display it */}
      {taskList
        .sort((a, b) => b.id - a.id) // sort asc
        .map((task) => (
          <TaskItem key={task.id} task={task} deleteTask={deleteTask} />
        ))}
    </ul>
  );
}
