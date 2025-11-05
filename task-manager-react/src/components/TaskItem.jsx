
function TaskItem({ task, onToggle, onDelete }) {
    return (
      <li className="task-item">
        <div className="task-content">
          <input
            type="checkbox"
            className="task-checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
          />
          
          <span className={task.completed ? 'task-text completed' : 'task-text'}>
            {task.text}
          </span>
        </div>
  
        <button 
          className="delete-btn"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </li>
    );
  }
  
  export default TaskItem;