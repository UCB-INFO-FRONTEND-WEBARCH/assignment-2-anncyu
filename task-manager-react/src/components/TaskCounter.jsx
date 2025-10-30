function TaskCounter({ tasks, allTasks, filter }) {
  const totalTasks = allTasks.length;
  const completedTasks = allTasks.filter(task => task.completed).length;
  const activeTasks = totalTasks - completedTasks;

  let message = '';
  if (filter === 'all') {
    message = `Total Tasks: ${totalTasks}`;
  } else if (filter === 'active') {
    message = `Active Tasks: ${activeTasks}`;
  } else if (filter === 'completed') {
    message = `Completed Tasks: ${completedTasks}`;
  }

  return (
    <div className="task-counter">
      <p>{message}</p>
    </div>
  );
}

export default TaskCounter;