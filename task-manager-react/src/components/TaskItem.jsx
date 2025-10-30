function TaskItem({ task, onToggleComplete, onDelete }) {
  return (
    <li className="task-item">
        <div className="task-content">
        <input
            type="checkbox"
            className="task-checkbox"
            checked={task.completed}
            onChange={() => onToggleComplete(task.id)}
        />
        <span className={task.completed ? 'completed' : ''}>{task.title}</span>
        <button className="delete-btn" onClick={() => onDelete(task.id)}>Delete</button>
        </div> 
    </li>
  );
}

export default TaskItem;