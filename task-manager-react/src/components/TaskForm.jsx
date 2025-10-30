import {useState} from 'react';

function TaskForm({onAddTask}) {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskText.trim() === '') {
      return;
    }
    onAddTask(taskText.trim());
    setInputvalue('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input"
        placeholder="Enter a new task..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button type="submit" className="add-task-btn">Add Task</button>
    </form>
  );
}

export default TaskForm;