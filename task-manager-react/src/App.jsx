// src/App.jsx
import { useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskCounter from './components/TaskCounter'
import TaskList from './components/TaskList'
import './App.css'


function App() {
  // State: array of tasks
  const [tasks, setTasks] = useState([]);
  
  // State: current filter ('all', 'active', 'completed')
  const [filter, setFilter] = useState('all');

  // Function 1: Add a new task
  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  // Function 2: Toggle task completion status
  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id 
        ? { ...task, completed: !task.completed }
        : task
    ));
  };

  // Function 3: Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Function 4: Filter tasks based on current filter
  const getFilteredTasks = () => {
    if (filter === 'active') {
      return tasks.filter(task => !task.completed);
    }
    if (filter === 'completed') {
      return tasks.filter(task => task.completed);
    }
    return tasks;
  };

  const filteredTasks = getFilteredTasks();

  // Calculate task counts
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;

  return (
    <div className="page">
      {/* Header - matching your original HTML */}
      <header className="site-header">
        <button className="menu-button">
          <img className="menu-icon" src="./assets/menu_icon.png" alt="Menu Icon" />
        </button>
        <form onSubmit={(e) => e.preventDefault()}>
          <label className="search-container">
            <img className="search-icon" src="./assets/search_icon.png" alt="Search Icon" />
            <input className="search-input" type="search" placeholder="Quick Find" />
          </label>
        </form>
        <div className="site-header_status">
          <img className="check-icon" src="./assets/check_icon.png" alt="Check Icon" />
          <span>{completedTasks}/{totalTasks}</span>
        </div>
      </header>

      {/* Main Content - matching your original HTML */}
      <main className="site-main">
        {/* Sidebar - matching your original HTML */}
        <aside className="sidebar">
          <ul>
            <li>
              <img className="nav-icon" src="./assets/inbox_icon.png" alt="Inbox Icon" />
              Inbox
              <span className="task-count">{totalTasks}</span>
            </li>
            <li>
              <img className="nav-icon" src="./assets/calendar_icon.png" alt="Today Icon" />
              Today
              <span className="task-count">0</span>
            </li>
            <li>
              <img className="nav-icon" src="./assets/upcoming_icon.png" alt="Upcoming Icon" />
              Upcoming
              <span className="task-count"></span>
            </li>
          </ul>
        </aside>

        {/* Main Content Section */}
        <section className="main-content">
          <h1>Inbox</h1>

          {/* Task Form */}
          <TaskForm onAddTask={addTask} />

          {/* Filter Buttons */}
          <div className="filter-buttons">
            <button 
              className={filter === 'all' ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button 
              className={filter === 'active' ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setFilter('active')}
            >
              Active
            </button>
            <button 
              className={filter === 'completed' ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setFilter('completed')}
            >
              Completed
            </button>
          </div>

          {/* Task Counter */}
          <TaskCounter tasks={filteredTasks} allTasks={tasks} filter={filter} />

          {/* Task List */}
          <TaskList 
            tasks={filteredTasks}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        </section>
      </main>
    </div>
  );
}

export default App;