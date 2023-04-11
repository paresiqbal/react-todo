// components
import TaskItem from "./TaskItem";
import styles from "./TaskList.module.css";

export default function TaskList({ tasks, deleteTask, toggleTask }) {
  return (
    <div>
      <ul className={styles.tasks}>
        {tasks
          // sort ascending
          .sort((a, b) => b.id - a.id)
          .map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              toggleTask={toggleTask}
            />
          ))}
      </ul>
    </div>
  );
}
