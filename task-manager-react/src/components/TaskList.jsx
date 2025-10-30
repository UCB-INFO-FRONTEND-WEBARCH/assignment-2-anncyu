import TaskItem from './TaskItem';
function TaskList({ tasks, onToggleComplete, onDelete }) {
    if (tasks.length === 0) {
        return (
            <div className="empty-state">
                <p>You have no tasks at the moment. Please add one above.</p>
            </div>
        );
    }
    return (
        <ul className="task-list">
        {tasks.map((task) => (
            <TaskItem
            key={task.id}
            task={task}
            onToggleComplete={onToggleComplete}
            onDelete={onDelete}
            />
        ))}
        </ul>
    );
}

export default TaskList;