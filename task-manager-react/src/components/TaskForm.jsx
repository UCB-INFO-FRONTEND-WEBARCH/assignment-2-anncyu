import {useState} from 'react';

function TaskForm({ onAddTask }) {
    const [inputValue, setInputValue] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      if (inputValue.trim() === '') {
        return;
      }
  
      onAddTask(inputValue.trim());
      
      setInputValue('');
    };
  
    return (
      <form className="task-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="task-input"
          placeholder="Add a new task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="add-btn">
          Add Task
        </button>
      </form>
    );
  }
  
  export default TaskForm;