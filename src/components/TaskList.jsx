// components
import TaskItem from "./TaskItem";
import styles from "./TaskList.module.css";

export default function TaskList({ tasks }) {
  return (
    <div>
      <ul className={styles.tasks}>
        {tasks
          .sort((a, b) => b.id - a.id)
          .map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
      </ul>
    </div>
  );
}
