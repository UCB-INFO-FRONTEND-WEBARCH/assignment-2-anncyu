function TaskCounter({ tasks, allTasks, filter }) {
    const totalTasks = allTasks.length;
    const completedTasks = allTasks.filter(task => task.completed).length;
    const activeTasks = totalTasks - completedTasks;
  
    let displayText = '';
    
    if (filter === 'all') {
      displayText = `${completedTasks} of ${totalTasks} tasks completed`;
    } else if (filter === 'active') {
      displayText = `${activeTasks} active task${activeTasks !== 1 ? 's' : ''}`;
    } else if (filter === 'completed') {
      displayText = `${completedTasks} completed task${completedTasks !== 1 ? 's' : ''}`;
    }
  
    return (
      <div className="task-counter">
        <p>{displayText}</p>
      </div>
    );
  }
  
  export default TaskCounter;